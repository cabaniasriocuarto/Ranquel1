"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

// --- Tipos ---
type Message = {
  id: string;
  role: "bot" | "user";
  text: string;
  type?: "text" | "options" | "input" | "file";
  options?: { label: string; value: string }[];
  inputType?: "text" | "email" | "tel" | "textarea" | "number";
  inputKey?: keyof UserData;
};

type UserData = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  pages: string;
  description: string;
  contactMethod: "mail" | "whatsapp" | "videollamada"; // Nuevo campo clave
};

const STEPS = [
  {
    id: "welcome",
    text: "¡Hola! Soy el asistente virtual de Ranquel Tech Lab. 🤖 Para darte un presupuesto estimado, necesito hacerte unas preguntas breves. ¿Empezamos?",
    options: [{ label: "¡Dale!", value: "start" }],
  },
  {
    id: "name",
    text: "¿Cuál es tu nombre?",
    inputType: "text",
    inputKey: "name",
  },
  {
    id: "email",
    text: "Genial. ¿A qué email te puedo enviar la info?",
    inputType: "email",
    inputKey: "email",
  },
  {
    id: "phone",
    text: "¿Podrías dejarme un número de WhatsApp por si acaso? (Opcional)",
    inputType: "tel",
    inputKey: "phone",
  },
  {
    id: "projectType",
    text: "¿Qué tipo de servicio estás buscando?",
    options: [
      { label: "Sitio Web (Landing/Institucional)", value: "web" },
      { label: "Tienda Online (E-commerce)", value: "ecommerce" },
      { label: "Aplicación Web / Sistema a medida", value: "webapp" },
      { label: "Marketing / Ads", value: "marketing" },
      { label: "Otro", value: "other" },
    ],
    inputKey: "projectType",
  },
  // Lógica condicional simple: si es web, preguntamos páginas
  {
    id: "pages",
    text: "¿Cuántas páginas o secciones estimas que tendrá? (Ej: Inicio, Nosotros, Contacto = 3)",
    inputType: "number",
    inputKey: "pages",
    condition: (data: UserData) => data.projectType === "web" || data.projectType === "ecommerce",
  },
  {
    id: "description",
    text: "Cuéntame un poco más sobre tu idea o negocio. ¿Qué funcionalidades clave necesitas?",
    inputType: "textarea",
    inputKey: "description",
  },
  {
    id: "contactMethod",
    text: "¡Perfecto! Ya tengo lo necesario para un pre-presupuesto. ¿Cómo prefieres recibir la propuesta detallada?",
    options: [
      { label: "Enviar por Mail 📧", value: "mail" },
      { label: "Enviar a mi WhatsApp 💬", value: "whatsapp" },
      { label: "Agendar Videollamada 📹", value: "videollamada" },
    ],
    inputKey: "contactMethod",
  },
];

export function ChatbotBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "init", role: "bot", text: STEPS[0].text, type: "options", options: STEPS[0].options },
  ]);
  const [stepIndex, setStepIndex] = useState(0);
  const [userData, setUserData] = useState<UserData>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    pages: "1",
    description: "",
    contactMethod: "mail",
  });
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // --- Lógica de redirección ---
  const handleRedirect = (method: string) => {
    // Pequeño delay para que el usuario lea "Enviando..."
    setTimeout(() => {
        if (method === "whatsapp") {
          // Primero enviamos a la página de gracias para marcar conversión
          // Y esa página redirige a la API de WhatsApp
          // O redirigimos directo si preferimos, pero perdemos precisión.
          // Estrategia: Ir a pagina gracias-whatsapp.html
          window.location.href = "/gracias-whatsapp.html"; 
        } else if (method === "videollamada") {
          window.location.href = "/gracias-videollamada.html";
        } else {
          window.location.href = "/gracias-presupuesto.html"; // Tu archivo nuevo
        }
    }, 1500);
  };

  const handleNextStep = async (value: string, key?: keyof UserData) => {
    // 1. Guardar dato usuario
    const newUserData = { ...userData };
    if (key) {
      // @ts-ignore
      newUserData[key] = value;
      setUserData(newUserData);
    }

    // 2. Agregar mensaje usuario al chat
    const userMsg: Message = { id: Date.now().toString(), role: "user", text: value };
    // Si es una opción, buscamos el label para mostrar texto bonito
    const currentStepObj = STEPS[stepIndex];
    if (currentStepObj.options) {
      const selectedOption = currentStepObj.options.find((o) => o.value === value);
      if (selectedOption) userMsg.text = selectedOption.label;
    }
    setMessages((prev) => [...prev, userMsg]);

    // 3. Calcular siguiente paso
    let nextStepIndex = stepIndex + 1;
    // Saltar pasos si no cumplen condición
    while (
      nextStepIndex < STEPS.length &&
      STEPS[nextStepIndex].condition &&
      !STEPS[nextStepIndex].condition(newUserData)
    ) {
      nextStepIndex++;
    }

    // 4. Si hay más pasos, mostrar siguiente
    if (nextStepIndex < STEPS.length) {
      const nextStep = STEPS[nextStepIndex];
      setStepIndex(nextStepIndex);
      
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setMessages((prev) => [
          ...prev,
          {
            id: nextStep.id,
            role: "bot",
            text: nextStep.text,
            type: nextStep.inputType ? "input" : "options",
            options: nextStep.options,
            inputType: nextStep.inputType,
            inputKey: nextStep.inputKey,
          },
        ]);
      }, 600);
    } else {
      // 5. FIN DEL FLOW -> ENVIAR DATOS
      setLoading(true);
      try {
        // Enviar a tu API Route (route.ts)
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUserData),
        });

        if (res.ok) {
          setMessages((prev) => [
            ...prev,
            { id: "final", role: "bot", text: "¡Recibido! Procesando tu solicitud..." },
          ]);
          // REDIRECCIÓN CLAVE
          handleRedirect(newUserData.contactMethod);
        } else {
          setMessages((prev) => [
            ...prev,
            { id: "error", role: "bot", text: "Ups, hubo un error enviando los datos. Por favor escríbenos por WhatsApp." },
          ]);
        }
      } catch (error) {
        console.error(error);
        setMessages((prev) => [
          ...prev,
          { id: "error", role: "bot", text: "Error de conexión." },
        ]);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div id="chatbot-container">
      {/* Botón flotante */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="chatbot-toggle glow"
            onClick={() => setIsOpen(true)}
          >
            💬 Presupuesto Online
          </motion.button>
        )}
      </AnimatePresence>

      {/* Panel del Chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="chatbot-panel"
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", borderBottom: "1px solid #334155", paddingBottom: "8px" }}>
              <span style={{ fontWeight: "bold", color: "#22ccff" }}>Asistente Ranquel</span>
              <button onClick={() => setIsOpen(false)} style={{ background: "none", border: "none", color: "#94a3b8", cursor: "pointer" }}>✕</button>
            </div>

            <div style={{ height: "300px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "8px" }}>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  style={{
                    alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                    background: msg.role === "user" ? "#7c3aed" : "#1e293b",
                    color: "#fff",
                    padding: "8px 12px",
                    borderRadius: "12px",
                    maxWidth: "85%",
                    fontSize: "13px",
                  }}
                >
                  {msg.text}
                </div>
              ))}
              {loading && <div style={{ color: "#94a3b8", fontSize: "11px", marginLeft: "8px" }}>Escribiendo...</div>}
              <div ref={messagesEndRef} />
            </div>

            {/* Area de Inputs */}
            <div style={{ marginTop: "12px", borderTop: "1px solid #334155", paddingTop: "8px" }}>
              {!loading && messages[messages.length - 1].role === "bot" && messages[messages.length - 1].type === "options" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {messages[messages.length - 1].options?.map((opt) => (
                    <button
                      key={opt.value}
                      className="chatbot-btn-primary"
                      onClick={() => handleNextStep(opt.value, messages[messages.length - 1].inputKey)}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}

              {!loading && messages[messages.length - 1].role === "bot" && messages[messages.length - 1].type === "input" && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const val = (e.currentTarget.elements.namedItem("userInput") as HTMLInputElement).value;
                    if (val.trim()) handleNextStep(val, messages[messages.length - 1].inputKey);
                  }}
                  style={{ display: "flex", gap: "6px" }}
                >
                  {messages[messages.length - 1].inputType === "textarea" ? (
                    <textarea name="userInput" className="chatbot-textarea" placeholder="Escribe aquí..." autoFocus />
                  ) : (
                    <input
                      name="userInput"
                      type={messages[messages.length - 1].inputType}
                      className="chatbot-input"
                      placeholder="Escribe aquí..."
                      autoFocus
                    />
                  )}
                  <button type="submit" className="chatbot-btn-primary" style={{ width: "auto" }}>➤</button>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
