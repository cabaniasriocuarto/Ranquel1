// =====================
// Ranquel Tech Lab - JavaScript
// Archivo: script.js
// =====================

const translations = {
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre',
    'nav.services': 'Servicios',
    'nav.ai': 'IA aplicada',
    'nav.marketing': 'Marketing',
    'nav.method': 'Método',
    'nav.options': 'Opciones de Desarrollo',
    'hero.badge': 'En la cúspide de la tecnología',
    'hero.title': 'Creamos software inteligente que<br>Impulsa tu negocio.',
    'hero.subtitle': 'Desarrollo Web, Apps Android y Automatizaciones con IA. SEO, analítica y performance listos desde el día uno.',
    'hero.chatbot': 'Chatbot',
    'hero.whatsapp': 'WhatsApp',
    'hero.options': 'Opciones de Desarrollo',
    'about.title': 'Sobre nosotros',
    'about.p1': 'En Ranquel Tech Lab diseñamos y desarrollamos sitios web, apps Android y sistemas en Java integrados con IA. Unimos diseño, código y automatización para convertir ideas en productos reales, medibles y escalables.',
    'about.p2': 'Por que todo se puede <strong>Codificar</strong>, podemos diseñar el software a medida que necesites. Nos comentas donde está tu cuello de botella o tu necesidad de mejora, analizamos la situación y damos soluciones.',
    'about.cta': 'Conocé Opciones de Desarrollo',
    'services.title': 'Servicios',
    'services.web.title': 'Desarrollo Web',
    'services.web.desc': 'Resolvemos de posicionamiento web y marca, performance, e-commerce (tiendas digitales) y landings rápidas.',
    'services.domains.title': 'Dominios',
    'services.domains.desc': 'Nos encargamos de tu hosting y el dominio que necesitás para tu página web.',
    'services.apps.title': 'Apps Multi dispositivos',
    'services.apps.desc': 'Generamos Apps optimizadas para todos los dispositivos en Java/Kotlin, publicación en Play Store y App Store.',
    'services.systems.title': 'Sistemas a medida',
    'services.systems.desc': 'Por que toda empresa es unica, generamos las soluciones a la altura de tu negocio o sistema, Java/Node.js, dashboards y microservicios y mucho más.',
    'services.seo.title': 'SEO + Ads',
    'services.seo.desc': 'PUblicitá en los principales buscadores y Apps del momento Google- Bing - Meta con medición y experimentos. Tu Web/App reconocible en el mundo.',
    'services.analytics.title': 'Analítica',
    'services.analytics.desc': ' Conectamos tu App/Web a todo el sistema web para reconocimiento de los entornos digitales como Google Analitycs, GTM, Search Console, Meta y Bing Webmaste, para obtener datos fidelignos y con esto poder tomar las mejores desiciones, tanto publicitarias como de ventas o exposición de tu marca.. .',
    'ia.title': 'IA aplicada',
    'ia.subtitle': 'En Ranquel Tech Lab la IA no es un extra: es parte del producto. Te mostramos caminos concretos para llevarla a tus procesos hoy, con métricas claras y foco en ROI.',
    'ia.consulting.title': 'Asesoramiento',
    'ia.consulting.desc': 'Auditamos procesos y datos, medimos tu madurez digital y detectamos "quick wins". Entregamos un plan 30-60-90 días con casos de uso priorizados, costos, métricas y ROI estimado para acelerar resultados.',
    'ia.gpts.title': 'GPTs a medida',
    'ia.gpts.desc': 'Creamos asistentes con el contexto de tu negocio (documentos, políticas, catálogos) y reglas propias. Se conectan a tus sistemas (ERP/CRM/AFIP/Sheets) para automatizar tareas, responder con trazabilidad y ejecutar flujos end-to-end.',
    'ia.bots.title': 'Bots conversacionales',
    'ia.bots.desc': 'Web/WhatsApp/Instagram que atienden, reservan, cobran y escalan a un humano cuando corresponde. Entrenados con tu contenido, con analytics de conversaciones y mejoras continuas para elevar la experiencia del cliente.',
    'ia.cta': 'Conocé Opciones de Desarrollo',
    'marketing.title': 'Marketing',
    'marketing.subtitle': 'Con 13 años de experiencia en Marketing digital, hacemos que el dinero de tu inversión en publicidad digital rinda como Nunca Antes.',
    'method.title': 'Nuestro Método Ganador',
    'method.subtitle': 'Te mostramos el paso a paso del ÉXITO.',
    'method.step1.title': '1 Escuchamos las Necesidades del Cliente.',
    'method.step1.desc': 'Para poder arrancar con cualquier proyecto necesitamos saber cuales son las necesides de nuestro clientes y el modo operandi de su negocio, solicitamos toda la información que nos puedan brindar...y ahora es cuando estamos en condiciones de seguir al próximo paso.',
    'method.step2.title': '2- Analizamos la competencia.',
    'method.step2.desc': 'Comparamos los standares de la competencia para superarlos.',
    'method.step3.title': '3- Estudiamos el Proyecto',
    'method.step3.desc': 'Con la información recopilada, buscamos las mejores estrategias tecnológicas que se adecúen a las necesidades y objetivos de nuestro clientes.',
    'method.step4.title': '4- Materealizando Objetivos.',
    'method.step4.desc': 'Ponemos Marcha y hacemos maqueta previa según  todo la información obtenida y analizada. Se presenta una primera muestra de lo Trabajado y se abona un 50% del presupuesto.',
    'method.step5.title': '5- Conexión con Buscadores y SEO',
    'method.step5.desc': 'Conectamos la web a Google Ads, Google Tag Manager, Google Analytics, Google Search Console, Meta (Facebook + Instagram + WhatsApp), Bing y Bing Ads. Optimización e Indexación de la Página para reconocimiento prioritario en buscadores.',
    'method.step6.title': '6- Entrega de la web, Puesta a punto y seguimiento mensual.',
    'method.step6.desc': 'Ultimamos detalles. Se Abona el 50% del presupuesto restante. Hacemos entrega de la Página Web y hacemos un segumiento mensual para la implementación de nuevas tecnologías.',
    'options.title': 'Opciones de Desarrollo',
    'options.subtitle': 'Porque lo que soñás lo podemos <strong>codificar</strong>. Elegí un vertical o contanos tu idea y armamos el plan.',
    'options.industry.title': 'Industria (manufactura)',
    'options.industry.list': '<li>• Mantenimiento predictivo – Sensores (vibración/temperatura/consumo), modelo ML que anticipe fallas y genere órdenes en tu ERP/MES; alertas en Android.</li><li>• Control de calidad por visión – Cámaras + modelos de visión (defectos, soldaduras, etiquetas) con registro y trazabilidad; OK/NO‑OK directo al SCADA.</li><li>• Planificación y OEE inteligente – IA que secuencia órdenes minimizando setups y cuellos de botella; tablero OEE con causas automáticas.</li>',
    'options.finance.title': 'Finanzas (PyMEs)',
    'options.finance.list': '<li>• Lectura de comprobantes + AFIP – OCR + validación online, categorización contable y conciliación bancaria automática; banderas rojas por discrepancias.</li><li>• Scoring de riesgo y mora – Modelos con variables contables/comerciales para priorizar cobranza, cupos y condiciones; semáforos y workflows.</li><li>• Detección de fraude/anomalías – Gastos atípicos, proveedores duplicados, desvíos de caja; reglas + ML con auditoría y evidencia exportable.</li>',
    'options.hotel.title': 'Hotelería',
    'options.hotel.list': '<li>• Precios dinámicos (revenue) – Ajuste tarifario por demanda, clima y eventos locales; restricciones y upsells automáticos.</li><li>• Chatbot omnicanal (Web/WhatsApp) – Disponibilidad, reservas, cobros y upgrades; integra PMS/Channel Manager.</li><li>• Housekeeping asistido por visión – App Android que reconoce estado de habitación/amenities y optimiza turnos.</li>',
    'options.restaurant.title': 'Restaurants',
    'options.restaurant.list': '<li>• Forecast de demanda por plato – Predice ventas por franja y día; sugiere compras y mise en place para reducir quiebres/merma.</li><li>• Upselling inteligente en POS – Sugerencias de combos y extras según historial y hora; A/B testing de menús y precios.</li><li>• Control de porciones/mermas por visión – Cámaras + básculas conectadas para estandarizar raciones y detectar desvíos.</li>',
    'options.agro.title': 'Agro',
    'options.agro.list': '<li>• Detección temprana de plagas/nutrientes – Móvil/dron con visión que clasifica estrés y recomienda correctivos (se enlaza con FertiCalc).</li><li>• Riego y fertilización prescriptiva – Modelos con clima/ET0/fenología que calculan lámina, EC/pH objetivo y dosis.</li><li>• Logística de cosecha y rutas – Optimiza turnos, ventanas de descarga y fletes; integra precios y humedad/mermas.</li>',
    'options.mining.title': 'Minería',
    'options.mining.list': '<li>• Mantenimiento predictivo de flota pesada – Telemetría para anticipar fallas en palas/camiones; plan de repuestos.</li><li>• Seguridad por visión (EPP/áreas) – Detección de casco/chaleco, zonas restringidas y proximidad a equipos; alertas.</li><li>• Blend y recuperación en planta – Predice ley/recuperación y ajusta mezcla para maximizar producción y energía.</li>',
    'options.gov.title': 'Gobierno (sector público)',
    'options.gov.list': '<li>• Trámites inteligentes + validación automática – OCR de formularios y DNI; verificación en padrones; turnos y notificaciones.</li><li>• Compras públicas y control del gasto con IA – Sobreprecios, proveedores vinculados y fraccionamiento; monitoreo y alertas.</li><li>• Gestión urbana predictiva – Baches, alumbrado, residuos; ruteo óptimo de cuadrillas y modelos de riesgo de inundaciones/incendios.</li>',
    'cta.title': '¿Consultas? Para Mayor Información Usá el ChatBot',
    'cta.subtitle': 'Para presupuestos o Reuniones usá el ChatBot.',
    'footer.copy': '© 2025 Ranquel Tech Lab',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.ai': 'Applied AI',
    'nav.marketing': 'Marketing',
    'nav.method': 'Method',
    'nav.options': 'Development options',
    'hero.badge': 'At the cutting edge of technology',
    'hero.title': 'We build intelligent software that<br>boosts your business.',
    'hero.subtitle': 'Web development, Android apps and automations with AI. SEO, analytics and performance ready from day one.',
    'hero.chatbot': 'Chatbot',
    'hero.whatsapp': 'WhatsApp',
    'hero.options': 'Development options',
    'about.title': 'About us',
    'about.p1': 'At Ranquel Tech Lab we design and build websites, Android apps and Java systems integrated with AI. We blend design, code and automation to turn ideas into real, measurable and scalable products.',
    'about.p2': 'Because everything can be <strong>coded</strong>, we design the custom software you need. Tell us where your bottleneck or improvement need is, we analyze and deliver solutions.',
    'about.cta': 'See development options',
    'services.title': 'Services',
    'services.web.title': 'Web development',
    'services.web.desc': 'We take care of brand positioning, performance, e-commerce and fast landing pages.',
    'services.domains.title': 'Domains',
    'services.domains.desc': 'We manage your hosting and the domain your site needs.',
    'services.apps.title': 'Multi-device apps',
    'services.apps.desc': 'Optimized apps for every device in Java/Kotlin, published to Play Store and App Store.',
    'services.systems.title': 'Custom systems',
    'services.systems.desc': 'Every company is unique—we build solutions at your level with Java/Node.js, dashboards, microservices and more.',
    'services.seo.title': 'SEO + Ads',
    'services.seo.desc': 'Advertise on the main search engines and apps (Google, Bing, Meta) with measurement and experiments. Make your web/app recognizable worldwide.',
    'services.analytics.title': 'Analytics',
    'services.analytics.desc': 'We connect your app/site to Google Analytics, GTM, Search Console, Meta and Bing to get reliable data for better marketing and sales decisions.',
    'ia.title': 'Applied AI',
    'ia.subtitle': 'At Ranquel Tech Lab, AI is not an add-on: it is part of the product. We show concrete ways to bring it to your processes today, with clear metrics and ROI focus.',
    'ia.consulting.title': 'Consulting',
    'ia.consulting.desc': 'We audit processes and data, measure your digital maturity and detect quick wins. We deliver a 30-60-90 day plan with prioritized use cases, costs, metrics and estimated ROI to accelerate results.',
    'ia.gpts.title': 'Custom GPTs',
    'ia.gpts.desc': 'We build assistants with your business context (documents, policies, catalogs) and custom rules. They connect to your systems (ERP/CRM/AFIP/Sheets) to automate tasks, respond with traceability and run end-to-end flows.',
    'ia.bots.title': 'Conversational bots',
    'ia.bots.desc': 'Web/WhatsApp/Instagram bots that serve, book, collect payments and escalate to a human when needed. Trained with your content, with analytics and continuous improvements.',
    'ia.cta': 'See development options',
    'marketing.title': 'Marketing',
    'marketing.subtitle': 'With 13 years of digital marketing experience, we make your ad investment work harder than ever.',
    'method.title': 'Our winning method',
    'method.subtitle': 'We guide you through the step-by-step to success.',
    'method.step1.title': '1 We listen to client needs.',
    'method.step1.desc': 'To start any project we need to know the needs of our clients and how their business operates. We gather as much information as possible to move to the next step.',
    'method.step2.title': '2 We analyze competitors.',
    'method.step2.desc': 'We compare industry standards to outperform them.',
    'method.step3.title': '3 We study the project',
    'method.step3.desc': 'With the collected information we find the best tech strategies that fit the needs and objectives of our clients.',
    'method.step4.title': '4 Turning objectives into reality.',
    'method.step4.desc': 'We start building and create a first mockup with all the analyzed information. We present the first deliverable and collect 50% of the estimate.',
    'method.step5.title': '5 Search engine connection & SEO',
    'method.step5.desc': 'We connect the site to Google Ads, Google Tag Manager, Google Analytics, Google Search Console, Meta (Facebook + Instagram + WhatsApp), Bing and Bing Ads. Optimization and indexing for priority recognition.',
    'method.step6.title': '6 Delivery, tuning and monthly follow-up.',
    'method.step6.desc': 'We finalize details, collect the remaining 50%, deliver the website and run monthly follow-ups to add new technology.',
    'options.title': 'Development options',
    'options.subtitle': 'Because what you dream of we can <strong>code</strong>. Pick a vertical or tell us your idea and we will build the plan.',
    'options.industry.title': 'Industry (manufacturing)',
    'options.industry.list': '<li>• Predictive maintenance – Sensors (vibration/temperature/consumption) and ML models to anticipate failures and create work orders in your ERP/MES; Android alerts.</li><li>• Vision-based quality control – Cameras + vision models (defects, welding, labels) with logging and traceability; OK/NOT-OK directly into SCADA.</li><li>• Smart planning & OEE – AI that sequences orders minimizing setups and bottlenecks; OEE board with automatic causes.</li>',
    'options.finance.title': 'Finance (SMEs)',
    'options.finance.list': '<li>• Invoice reading + AFIP – OCR + online validation, automatic accounting categorization and bank reconciliation; red flags for discrepancies.</li><li>• Risk and delinquency scoring – Models with accounting/commercial variables to prioritize collections, limits and terms; traffic lights and workflows.</li><li>• Fraud/anomaly detection – Atypical expenses, duplicate suppliers, cash deviations; rules + ML with audit trail and exportable evidence.</li>',
    'options.hotel.title': 'Hospitality',
    'options.hotel.list': '<li>• Dynamic pricing (revenue) – Rate adjustment by demand, weather and local events; automatic restrictions and upsells.</li><li>• Omnichannel chatbot (Web/WhatsApp) – Availability, bookings, payments and upgrades; integrates PMS/Channel Manager.</li><li>• Vision-assisted housekeeping – Android app recognizing room/amenity status and optimizing shifts.</li>',
    'options.restaurant.title': 'Restaurants',
    'options.restaurant.list': '<li>• Menu item demand forecast – Predicts sales by time slot and day; suggests purchasing and prep to cut waste.</li><li>• Intelligent POS upselling – Combo and add-on suggestions by history and time; menu and price A/B testing.</li><li>• Portion/waste control by vision – Cameras + connected scales to standardize servings and detect deviations.</li>',
    'options.agro.title': 'Agro',
    'options.agro.list': '<li>• Early detection of pests/nutrients – Mobile/drone vision to classify stress and recommend corrections (integrates with FertiCalc).</li><li>• Prescriptive irrigation & fertilization – Models with weather/ET0/phenology to calculate water volume, target EC/pH and doses.</li><li>• Harvest logistics and routing – Optimizes shifts, unloading windows and freight; integrates prices and moisture/shrink.</li>',
    'options.mining.title': 'Mining',
    'options.mining.list': '<li>• Predictive maintenance for heavy fleet – Telemetry to anticipate failures in shovels/trucks; spare parts planning.</li><li>• Vision safety (PPE/areas) – Detects helmets/vests, restricted zones and proximity to equipment; alerts.</li><li>• Plant blending & recovery – Predicts grade/recovery and adjusts mix to maximize production and energy.</li>',
    'options.gov.title': 'Government (public sector)',
    'options.gov.list': '<li>• Smart procedures + automatic validation – OCR for forms and IDs; registry checks; appointments and notifications.</li><li>• Public procurement & spend control with AI – Overpricing, related suppliers and fractioning; monitoring and alerts.</li><li>• Predictive urban management – Potholes, lighting, waste; optimal routing of crews and risk models for floods/fires.</li>',
    'cta.title': 'Questions? Use the ChatBot for more info',
    'cta.subtitle': 'For quotes or meetings, use the ChatBot.',
    'footer.copy': '© 2025 Ranquel Tech Lab',
  }
};

// IDs de EmailJS (reemplazar por los tuyos reales)
const EMAILJS_SERVICE_ID = "service_ranquel";
const EMAILJS_TEMPLATE_ID = "template_quote";

// Abre el formulario y setea el "source" según el botón que tocaron
function openQuoteFromButton(event) {
  event.preventDefault();
  const source = event?.currentTarget?.getAttribute("data-source") || "boton-desconocido";
  const sourceInput = document.getElementById("source");
  if (sourceInput) sourceInput.value = source;

  const form = document.getElementById("quote-form");
  if (form) {
    form.scrollIntoView({ behavior: "smooth" });
  }
}

// Desde el chatbot
function openQuoteFromChat(sourceLabel) {
  const sourceInput = document.getElementById("source");
  if (sourceInput) sourceInput.value = sourceLabel || "chatbot";

  const form = document.getElementById("quote-form");
  if (form) {
    form.scrollIntoView({ behavior: "smooth" });
  }
}

// Manejo del envío del formulario
const quoteForm = document.getElementById("quote-form");
const quoteStatus = document.getElementById("quote-status");

if (quoteForm) {
  quoteForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (quoteStatus) {
      quoteStatus.textContent = "Enviando tu solicitud...";
    }

    const templateParams = {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      project_type: document.getElementById("projectType").value,
      budget: document.getElementById("budget").value,
      message: document.getElementById("message").value,
      source: document.getElementById("source").value,
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);

      if (quoteStatus) {
        quoteStatus.textContent = "¡Listo! Te enviamos el presupuesto aproximado a tu mail y en breve te contactamos.";
      }

      quoteForm.reset();
      document.getElementById("source").value = "form-contacto";
    } catch (error) {
      console.error("Error al enviar presupuesto", error);
      if (quoteStatus) {
        quoteStatus.textContent = "Ocurrió un error al enviar el presupuesto. Probá de nuevo en unos minutos.";
      }
    }
  });
}

function applyTranslations(lang = 'es') {
  const dict = translations[lang] || translations.es;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = dict[key];
    if (!value) return;

    if (['INPUT', 'TEXTAREA'].includes(el.tagName)) {
      el.placeholder = value;
    } else {
      el.innerHTML = value;
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  
  // ===== NAVEGACIÓN =====
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');
  const vistaInicio = document.getElementById('vistaInicio');
  const vistaOpciones = document.getElementById('vistaOpciones');
  const langSelector = document.getElementById('langSelector');
  
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

  // Idiomas
  const savedLang = localStorage.getItem('rtl-lang') || 'es';

  if (langSelector) {
    langSelector.value = savedLang;
  }

  applyTranslations(savedLang);

  langSelector?.addEventListener('change', (event) => {
    const nextLang = event.target.value;
    localStorage.setItem('rtl-lang', nextLang);
    applyTranslations(nextLang);
  });
  
  // Botones específicos
  document.getElementById('btnOpciones')?.addEventListener('click', () => {
    navegarA('opciones');
  });
  
  
  // ===== CHATBOT =====
  const btnChatbot = document.getElementById('btnChatbot');

  btnChatbot?.addEventListener('click', () => {
    window.ranquelChatbot?.open();
  });
  
  
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
  const EMAIL_OWNER = "ranqueltechlab@gmail.com";
  const APPS_SCRIPT_ENDPOINT = "URL_DE_TU_APP_SCRIPT_AQUI";

  let state = {
    step: "intro",
    name: "",
    email: "",
    phone: "",
    projectType: "",
    pages: 1,
    description: "",
    estimate: null,
    leadSent: false,
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

  function isValidAppsScriptEndpoint(endpoint) {
    return endpoint && endpoint !== "URL_DE_TU_APP_SCRIPT_AQUI";
  }

  function sendLeadToAppsScript(endpoint, payload) {
    if (!isValidAppsScriptEndpoint(endpoint)) return Promise.resolve();

    state.leadSent = true;

    return fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).catch((err) => {
      console.error("Error enviando lead a Apps Script", err);
      state.leadSent = false;
    });
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
          <p class="chatbot-legal">Al enviar tus datos aceptás que te contactemos por email o WhatsApp para enviarte información y presupuestos.</p>
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
        openQuoteFromChat("Chatbot – presupuesto aproximado");
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

      if (!state.leadSent) {
        sendLeadToAppsScript(APPS_SCRIPT_ENDPOINT, {
          name: s.name,
          email: s.email,
          phone: s.phone,
          projectType: s.projectType,
          pages: s.pages,
          description: s.description,
          estimateMin: est.min,
          estimateMax: est.max,
          currency: est.currency,
        });
      }

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

          <button id="cb-open-quote" class="chatbot-btn-primary" style="display:block; text-align:center; margin-top:6px; background:#0ea5e9;">
            Enviar datos y recibir presupuesto en mi mail
          </button>

          <button id="cb-close" class="chatbot-btn-link">Cerrar</button>
        </div>
      `;

      const quoteBtn = document.getElementById("cb-open-quote");
      if (quoteBtn) {
        quoteBtn.onclick = () => openQuoteFromChat("Chatbot – presupuesto aproximado");
      }
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
        state = { step: "intro", name: "", email: "", phone: "", projectType: "", pages: 1, description: "", estimate: null, leadSent: false };
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

    const openPanel = () => {
      panel.classList.remove("chatbot-hidden");
      render();
    };

    const togglePanel = () => {
      panel.classList.toggle("chatbot-hidden");
      render();
    };

    toggle.onclick = togglePanel;

    window.ranquelChatbot = {
      open: openPanel,
      toggle: togglePanel,
    };

    setTimeout(openPanel, 6000);
  });
})();

