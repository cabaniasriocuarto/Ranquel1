// =====================
// Ranquel Tech Lab - JavaScript
// Archivo: script.js
// =====================

document.addEventListener('DOMContentLoaded', () => {
  
  // ===== NAVEGACIÓN =====
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');
  const vistaInicio = document.getElementById('vistaInicio');
  const vistaOpciones = document.getElementById('vistaOpciones');
  
  let menuOpen = false;
  
  // Toggle menú móvil
  menuToggle?.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileMenu.style.display = menuOpen ? 'block' : 'none';
    menuToggle.setAttribute('aria-expanded', menuOpen);
    
    // Cambiar icono
    if (menuOpen) {
      menuIcon.innerHTML = '<path d="M18 6L6 18M6 6l12 12"/>';
    } else {
      menuIcon.innerHTML = '<path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/>';
    }
  });
  
  // Navegación entre vistas
  function navegarA(vista, anchor = null) {
    menuOpen = false;
    mobileMenu.style.display = 'none';
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuIcon.innerHTML = '<path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/>';
    
    if (vista === 'inicio') {
      vistaInicio.style.display = 'block';
      vistaOpciones.style.display = 'none';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      if (anchor) {
        setTimeout(() => {
          const elemento = document.querySelector(anchor);
          if (elemento) {
            elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    } else if (vista === 'opciones') {
      vistaInicio.style.display = 'none';
      vistaOpciones.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  
  // Manejadores de navegación
  document.querySelectorAll('[data-nav="inicio"]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      navegarA('inicio');
    });
  });
  
  document.querySelectorAll('[data-nav="opciones"], .btn-opciones').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      navegarA('opciones');
    });
  });
  
  document.querySelectorAll('[data-anchor]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const anchor = el.getAttribute('data-anchor');
      navegarA('inicio', `#${anchor}`);
    });
  });
  
  // Botones específicos
  document.getElementById('btnOpciones')?.addEventListener('click', () => {
    navegarA('opciones');
  });
  
  
  // ===== CHATBOT =====
  const chatBubble = document.getElementById('chatBubble');
  const openChatBtn = document.getElementById('openChat');
  const closeChatBtn = document.getElementById('closeChat');
  const chatWindow = document.getElementById('chatWindow');
  const chatContent = document.getElementById('chatContent');
  const btnChatbot = document.getElementById('btnChatbot');
  
  let chatOpen = false;
  let chatStep = 'root';
  
  function toggleChat() {
    chatOpen = !chatOpen;
    chatWindow.style.display = chatOpen ? 'flex' : 'none';
    openChatBtn.textContent = chatOpen ? 'Cerrar' : 'Chat';
    
    if (chatOpen && chatStep === 'root') {
      renderChat();
    }
  }
  
  openChatBtn?.addEventListener('click', toggleChat);
  closeChatBtn?.addEventListener('click', toggleChat);
  btnChatbot?.addEventListener('click', () => {
    if (!chatOpen) toggleChat();
  });
  
  function renderChat() {
    chatContent.innerHTML = '';
    
    if (chatStep === 'root') {
      chatContent.innerHTML = `
        <p>Hola 👋 ¿En qué te ayudamos?</p>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          <button class="btn btn-ghost" data-chat="servicios">Servicios</button>
          <button class="btn btn-ghost" data-chat="presupuesto">Presupuesto</button>
          <button class="btn btn-ghost" data-chat="faq">FAQ</button>
        </div>
      `;
      
      chatContent.querySelectorAll('[data-chat]').forEach(btn => {
        btn.addEventListener('click', () => {
          chatStep = btn.getAttribute('data-chat');
          renderChat();
        });
      });
    }
    
    else if (chatStep === 'servicios') {
      chatContent.innerHTML = `
        <p><strong>Nuestros servicios:</strong></p>
        <ul style="list-style: none; padding: 0; display: grid; gap: 6px;">
          <li>• Desarrollo Web</li>
          <li>• IA aplicada</li>
          <li>• Apps Android</li>
          <li>• Sistemas a medida</li>
          <li>• SEO + Ads</li>
          <li>• Analítica</li>
        </ul>
        <div style="display: flex; gap: 8px; margin-top: 12px;">
          <button class="btn btn-accent" data-chat="lead">Quiero que me contacten</button>
          <button class="btn btn-ghost" data-chat="root">Volver</button>
        </div>
      `;
      
      chatContent.querySelectorAll('[data-chat]').forEach(btn => {
        btn.addEventListener('click', () => {
          chatStep = btn.getAttribute('data-chat');
          renderChat();
        });
      });
    }
    
    else if (chatStep === 'presupuesto') {
      chatStep = 'lead';
      renderChat();
    }
    
    else if (chatStep === 'faq') {
      chatContent.innerHTML = `
        <div style="display: grid; gap: 12px;">
          <div>
            <strong>¿Plazos de entrega?</strong>
            <p style="color: var(--text-muted); margin-top: 4px;">Un landing 1–2 semanas (según alcance). Apps y sistemas varían según complejidad.</p>
          </div>
          <div>
            <strong>¿Publicación incluida?</strong>
            <p style="color: var(--text-muted); margin-top: 4px;">Sí, preparamos el deploy (Vercel/Netlify) y publicación en Play Store si corresponde.</p>
          </div>
          <div>
            <strong>¿Medición y analítica?</strong>
            <p style="color: var(--text-muted); margin-top: 4px;">Configuramos GA4, GTM, Search Console y definimos KPIs desde el día uno.</p>
          </div>
        </div>
        <div style="display: flex; gap: 8px; margin-top: 16px;">
          <button class="btn btn-accent" data-chat="lead">Quiero que me contacten</button>
          <button class="btn btn-ghost" data-chat="root">Volver</button>
        </div>
      `;
      
      chatContent.querySelectorAll('[data-chat]').forEach(btn => {
        btn.addEventListener('click', () => {
          chatStep = btn.getAttribute('data-chat');
          renderChat();
        });
      });
    }
    
    else if (chatStep === 'lead') {
      chatContent.innerHTML = `
        <p><strong>¡Perfecto!</strong></p>
        <p>Escribinos por WhatsApp y te respondemos en minutos:</p>
        <a href="https://wa.me/5493584123456" class="btn btn-accent glow" style="margin-top: 8px;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.46 0 0.12 5.34 0.12 11.94c0 2.1.54 4.08 1.5 5.82L0 24l6.42-1.62c1.68.9 3.6 1.44 5.64 1.44 6.6 0 11.94-5.34 11.94-11.94 0-3.18-1.26-6.06-3.48-8.4Z"/>
          </svg>
          Abrir WhatsApp
        </a>
        <button class="btn btn-ghost" data-chat="root" style="margin-top: 8px;">Volver</button>
      `;
      
      chatContent.querySelectorAll('[data-chat]').forEach(btn => {
        btn.addEventListener('click', () => {
          chatStep = btn.getAttribute('data-chat');
          renderChat();
        });
      });
    }
  }
  
  
  // ===== ANIMACIONES SCROLL (REVEAL) =====
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-in');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  // Observar todos los elementos con data-reveal
  document.querySelectorAll('[data-reveal]').forEach(el => {
    observer.observe(el);
  });
  
});
// === Chatbot Ranquel Tech Lab ===
(function () {
  const CALENDAR_LINK = "https://calendar.app.google/Gan912bCwXFqymKUA";
  const WHATSAPP_OWNER = "5493584118722";
  const EMAIL_OWNER = "waltervaldivieso@gmail.com";

  let state = {
    step: "intro",
    name: "",
    email: "",
    phone: "",
    projectType: "",
    pages: 1,
    description: "",
    estimate: null,
  };

  function calcEstimate(projectType, pages) {
    const n = Number.isFinite(pages) && pages > 0 ? pages : 1;

    if (projectType === "web-simple") {
      const base = 750000;
      const extraPages = Math.max(0, n - 2);
      const total = base + extraPages * 80000;
      return { min: total, max: Math.round(total * 1.15), currency: "ARS" };
    }

    if (projectType === "web-payments") {
      const base = 1350000;
      const extraPages = Math.max(0, n - 1);
      const total = base + extraPages * 150000;
      return { min: total, max: Math.round(total * 1.2), currency: "ARS" };
    }

    if (projectType === "web-app") {
      const base = 2000000;
      return { min: base, max: Math.round(base * 1.5), currency: "ARS" };
    }

    return { min: 1000000, max: 2000000, currency: "ARS" };
  }

  function render() {
    const container = document.getElementById("chatbot-panel-inner");
    if (!container) return;

    const s = state;

    if (s.step === "intro") {
      container.innerHTML = `
        <div>
          <p><strong>Hola 👋</strong></p>
          <p>Soy el asistente de <strong>Ranquel Tech Lab</strong>.</p>
          <p class="chatbot-badge">Te ayudo a calcular un presupuesto y agendar una reunión.</p>
          <button id="cb-start" class="chatbot-btn-primary">Empezar 👉</button>
        </div>
      `;
      document.getElementById("cb-start").onclick = () => {
        state.step = "contact";
        render();
      };
      return;
    }

    if (s.step === "contact") {
      container.innerHTML = `
        <div>
          <p>Primero, dejame tus datos de contacto:</p>
          <input id="cb-name" class="chatbot-input" placeholder="Nombre y apellido" value="${s.name}">
          <input id="cb-email" class="chatbot-input" placeholder="Email" type="email" value="${s.email}">
          <input id="cb-phone" class="chatbot-input" placeholder="Teléfono / WhatsApp" value="${s.phone}">
          <button id="cb-next-project" class="chatbot-btn-primary">Continuar con el proyecto →</button>
          <button id="cb-back-intro" class="chatbot-btn-link">Volver</button>
        </div>
      `;

      document.getElementById("cb-name").oninput = (e) =>
        (state.name = e.target.value);
      document.getElementById("cb-email").oninput = (e) =>
        (state.email = e.target.value);
      document.getElementById("cb-phone").oninput = (e) =>
        (state.phone = e.target.value);

      document.getElementById("cb-next-project").onclick = () => {
        if (
          !state.name.trim() ||
          !state.email.trim() ||
          state.phone.trim().length < 6
        ) {
          alert("Completá nombre, email y teléfono para seguir 😊");
          return;
        }
        state.step = "project";
        render();
      };

      document.getElementById("cb-back-intro").onclick = () => {
        state.step = "intro";
        render();
      };
      return;
    }

    if (s.step === "project") {
      container.innerHTML = `
        <div>
          <p>Contame qué necesitás. Con esto calculo un <strong>presupuesto aproximado</strong>.</p>

          <select id="cb-project-type" class="chatbot-select">
            <option value="">Tipo de proyecto</option>
            <option value="web-simple" ${s.projectType === "web-simple" ? "selected" : ""}>
              Web simple (1–2 páginas, sin pagos)
            </option>
            <option value="web-payments" ${s.projectType === "web-payments" ? "selected" : ""}>
              Web con pagos / e-commerce
            </option>
            <option value="web-app" ${s.projectType === "web-app" ? "selected" : ""}>
              Aplicación web / sistema a medida
            </option>
            <option value="otro" ${s.projectType === "otro" ? "selected" : ""}>
              Otro / no estoy seguro
            </option>
          </select>

          <input id="cb-pages" class="chatbot-input" type="number" min="1"
            placeholder="Cantidad aproximada de páginas / secciones"
            value="${s.pages}">

          <textarea id="cb-description" class="chatbot-textarea"
            placeholder="Ej: Necesito una web para mi empresa, con 4 secciones, formulario y conexión con WhatsApp.">
${s.description}</textarea>

          <button id="cb-see-estimate" class="chatbot-btn-primary">Ver presupuesto aproximado</button>
          <button id="cb-back-contact" class="chatbot-btn-link">Volver</button>
        </div>
      `;

      document.getElementById("cb-project-type").onchange = (e) =>
        (state.projectType = e.target.value);
      document.getElementById("cb-pages").oninput = (e) =>
        (state.pages = parseInt(e.target.value || "1", 10) || 1);
      document.getElementById("cb-description").oninput = (e) =>
        (state.description = e.target.value);

      document.getElementById("cb-see-estimate").onclick = () => {
        if (!state.description.trim()) {
          alert("Escribí una breve descripción del proyecto 😉");
          return;
        }
        state.estimate = calcEstimate(state.projectType, state.pages);
        state.step = "estimate";
        render();
      };

      document.getElementById("cb-back-contact").onclick = () => {
        state.step = "contact";
        render();
      };
      return;
    }

    if (s.step === "estimate" && s.estimate) {
      const est = s.estimate;

      const whatsappText =
        `Nuevo lead Ranquel Tech Lab:\n` +
        `Nombre: ${s.name}\n` +
        `Email: ${s.email}\n` +
        `Teléfono: ${s.phone}\n` +
        `Tipo: ${s.projectType}\n` +
        `Páginas: ${s.pages}\n\n` +
        `Descripción:\n${s.description}\n\n` +
        `Presupuesto aprox: ${est.min} - ${est.max} ${est.currency}`;
      const whatsappOwnerUrl = `https://wa.me/${WHATSAPP_OWNER}?text=${encodeURIComponent(
        whatsappText
      )}`;

      const whatsappClientText =
        `Hola, soy ${s.name} y quiero avanzar con un proyecto (${s.projectType ||
        "web/app"}) para mi empresa. Vengo desde la web de Ranquel Tech Lab.`;
      const whatsappClientUrl = `https://wa.me/${WHATSAPP_OWNER}?text=${encodeURIComponent(
        whatsappClientText
      )}`;

      const emailSubject = `Consulta web/app - ${s.name}`;
      const emailBody =
        `Nombre: ${s.name}\nEmail: ${s.email}\nTeléfono: ${s.phone}\n\n` +
        `Tipo de proyecto: ${s.projectType}\nPáginas: ${s.pages}\n\n` +
        `Descripción:\n${s.description}\n\n` +
        `Presupuesto aprox: ${est.min} - ${est.max} ${est.currency}`;
      const mailtoUrl = `mailto:${EMAIL_OWNER}?subject=${encodeURIComponent(
        emailSubject
      )}&body=${encodeURIComponent(emailBody)}`;

      container.innerHTML = `
        <div>
          <p>En base a lo que me contaste, un proyecto así suele estar entre:</p>
          <p><strong>${est.min.toLocaleString("es-AR")} – ${est.max.toLocaleString(
        "es-AR"
      )} ${est.currency}</strong></p>

          <p class="chatbot-badge">
            Datos aproximados y orientativos: cada proyecto se cotiza aparte y hay que analizarlo.
          </p>

          <ul style="margin-top:6px; margin-bottom:6px; padding-left:16px;">
            <li>Web simple: $750.000 (1–2 páginas) + $80.000 por página extra.</li>
            <li>Con pagos / e-commerce: $1.350.000 + $150.000 por página.</li>
            <li>Aplicaciones web: desde $2.000.000 en adelante.</li>
          </ul>

          <p class="chatbot-badge">Recibo cuotas por Mercado Pago 💳.</p>

          <p style="margin-top:8px; font-weight:600;">Próximo paso 👇</p>

          <a href="${CALENDAR_LINK}" target="_blank" class="chatbot-btn-primary" style="display:block; text-align:center; margin-top:6px;">
            Agendar reunión en Google Calendar
          </a>

          <a href="${whatsappClientUrl}" target="_blank" class="chatbot-btn-primary" style="display:block; text-align:center; margin-top:6px; background:#22c55e;">
            Hablar ahora por WhatsApp
          </a>

          <a href="${mailtoUrl}" class="chatbot-btn-primary" style="display:block; text-align:center; margin-top:6px; background:#0ea5e9;">
            Enviar datos por email
          </a>

          <a href="${whatsappOwnerUrl}" target="_blank" class="chatbot-btn-link">
            (Solo para mí) Enviarme este lead a mi WhatsApp
          </a>

          <button id="cb-close" class="chatbot-btn-link">Cerrar</button>
        </div>
      `;

      document.getElementById("cb-close").onclick = () => {
        state.step = "done";
        render();
      };
      return;
    }

    if (s.step === "done") {
      container.innerHTML = `
        <div>
          <p>¡Gracias! 🙌</p>
          <p>Recibí tus datos. Te voy a responder lo antes posible con un presupuesto más detallado.</p>
          <button id="cb-again" class="chatbot-btn-link">Empezar de nuevo</button>
        </div>
      `;
      document.getElementById("cb-again").onclick = () => {
        state = { step: "intro", name: "", email: "", phone: "", projectType: "", pages: 1, description: "", estimate: null };
        render();
      };
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("chatbot-container");
    if (!container) return;

    container.innerHTML = `
      <button id="chatbot-toggle" class="chatbot-toggle">💬 Chat Ranquel Tech Lab</button>
      <div id="chatbot-panel" class="chatbot-panel chatbot-hidden">
        <div id="chatbot-panel-inner"></div>
      </div>
    `;

    const toggle = document.getElementById("chatbot-toggle");
    const panel = document.getElementById("chatbot-panel");

    toggle.onclick = function () {
      panel.classList.toggle("chatbot-hidden");
      render();
    };
  });
})();

