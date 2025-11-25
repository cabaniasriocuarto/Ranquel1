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

// --- Google Ads helpers ---
const GOOGLE_ADS_ID = 'AW-958141767';
const CONVERSION_LABEL_WHATSAPP = 'wsp_click';
const CONVERSION_LABEL_PRESUPUESTO = 'presupuesto_request';

function trackGoogleAdsConversion(label, value = 1) {
  if (typeof gtag === 'function') {
    gtag('event', 'conversion', {
      send_to: `${GOOGLE_ADS_ID}/${label}`,
      value,
    });
  }
}

// --- Métricas: click en WhatsApp ---
function trackWhatsAppClick(location = 'desconocido') {
  if (typeof gtag === 'function') {
    // Evento para GA4 / Google Ads antes de abrir WhatsApp
    gtag('event', 'click_whatsapp', {
      event_category: 'engagement',
      event_label: location,
      value: 1,
    });
  }

  trackGoogleAdsConversion(CONVERSION_LABEL_WHATSAPP, 1);
}

function setupWhatsAppTracking(root = document) {
  const whatsappLinks = root.querySelectorAll('a[href^="https://wa.me/"], a[href^="https://api.whatsapp.com/"]');

  whatsappLinks.forEach((link) => {
    if (link.dataset.whatsappTracked === 'true') return;

    link.addEventListener('click', (event) => {
      const location = link.dataset.whatsappLocation || 'desconocido';
      trackWhatsAppClick(location);

      // Abrimos WhatsApp en otra pestaña después de disparar el evento
      event.preventDefault();
      const href = link.href;
      setTimeout(() => {
        window.open(href, link.target || '_blank', 'noopener');
      }, 120);
    });

    link.dataset.whatsappTracked = 'true';
  });
}

function updateLangFlag(langSelector, lang) {
  if (!langSelector) return;
  const supported = ['es', 'en'];
  const next = supported.includes(lang) ? lang : 'es';
  langSelector.dataset.flag = next;
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
    updateLangFlag(langSelector, savedLang);
  }

  applyTranslations(savedLang);

  langSelector?.addEventListener('change', (event) => {
    const nextLang = event.target.value;
    localStorage.setItem('rtl-lang', nextLang);
    updateLangFlag(langSelector, nextLang);
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

  // Vinculamos medición de clics de WhatsApp en todos los enlaces estáticos
  setupWhatsAppTracking();

  });

// Utilizar en el submit final del flujo de presupuesto (después de validar y enviar los datos)
// Ejemplo: onSuccess -> redirectToBudgetThankYou();
function redirectToBudgetThankYou() {
  window.location.href = '/gracias-presupuesto';
}

// Ejemplo para flujos que quieran derivar a la página de gracias de WhatsApp
function redirectToWhatsAppThankYou() {
  window.location.href = '/gracias-whatsapp';
}

// === Chatbot Ranquel Tech Lab ===
(function () {
  const CALENDAR_LINK = "https://calendar.app.google/Gan912bCwXFqymKUA";
  const WHATSAPP_OWNER = "5493584118722";
  const EMAIL_OWNER = "ranqueltechlab@gmail.com";
  let state = {
    step: "intro",
    budget: {
      name: "",
      email: "",
      phone: "",
      projectType: "",
      details: "",
      contact: "whatsapp",
    },
  };

  function trackBudgetRequest(source = 'chatbot') {
    if (typeof gtag === 'function') {
      gtag('event', 'presupuesto_solicitado', {
        event_category: 'conversion',
        event_label: source,
        value: 1,
      });
    }

    trackGoogleAdsConversion(CONVERSION_LABEL_PRESUPUESTO, 1);
  }

  async function submitLeadForm() {
    const { name, email, phone, projectType, details, contact } = state.budget;
    const observations = `${details} | Preferencia de contacto: ${contact}`;

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${EMAIL_OWNER}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nombre: name,
          whatsapp: phone,
          email,
          presupuesto: projectType,
          observaciones: observations,
          _subject: "Nuevo presupuesto desde el chatbot",
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!response.ok) {
        throw new Error(`Error enviando lead: ${response.status}`);
      }

      return true;
    } catch (error) {
      console.error("No se pudo enviar el lead", error);
      alert("No pudimos enviar tu solicitud. Escribinos por WhatsApp o probá de nuevo en unos minutos.");
      return false;
    }
  }

  function updateBudget(field, value) {
    state = {
      ...state,
      budget: {
        ...state.budget,
        [field]: value,
      },
    };
  }

  function isBudgetInfoValid() {
    const { name, email, phone } = state.budget;
    return name.trim().length > 1 && email.trim().length > 3 && phone.trim().length > 5;
  }

  function isBudgetProjectValid() {
    const { projectType, details } = state.budget;
    return projectType.trim().length > 0 && details.trim().length > 5;
  }

  function buildBudgetMessage() {
    const { name, email, phone, projectType, details, contact } = state.budget;
    return `Hola, soy ${name}. Quiero un presupuesto para: ${projectType}. Detalles: ${details}. Mis datos de contacto son ${email} / ${phone}. Prefiero que me contacten por ${contact}.`;
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
          <p class="chatbot-badge">Te ayudo a entender opciones y agendar una charla.</p>
          <button id="cb-budget" class="chatbot-btn-primary" style="margin-bottom:6px;">Pedir presupuesto ⭐</button>
          <button id="cb-start" class="chatbot-btn-primary">Ver opciones 👉</button>
        </div>
      `;
      document.getElementById("cb-start").onclick = () => {
        state.step = "options";
        render();
      };
      document.getElementById("cb-budget").onclick = () => {
        state.step = "budget-info";
        render();
      };
      return;
    }

    if (s.step === "options") {
      container.innerHTML = `
        <div>
          <p>Contame qué necesitás y elegí cómo querés seguir.</p>

          <div class="chatbot-badge" style="margin-bottom:12px;">
            <strong>Opciones rápidas:</strong>
            <ul style="margin:8px 0 0 16px; padding:0 0 0 12px;">
              <li>Agendar una videollamada breve.</li>
              <li>Hablar ahora por WhatsApp.</li>
              <li>Enviar info por email y te respondemos.</li>
            </ul>
          </div>

          <a href="${CALENDAR_LINK}" target="_blank" class="chatbot-btn-primary" style="display:block; text-align:center; margin-top:6px;">
            Agendar videollamada
          </a>

          <a href="https://wa.me/${WHATSAPP_OWNER}" target="_blank" class="chatbot-btn-primary" data-whatsapp-location="wsp_bot" style="display:block; text-align:center; margin-top:6px; background:#22c55e;">
            Hablar por WhatsApp
          </a>

          <a href="mailto:${EMAIL_OWNER}" class="chatbot-btn-primary" style="display:block; text-align:center; margin-top:6px; background:#0ea5e9;">
            Enviar info por email
          </a>

          <button id="cb-back-intro" class="chatbot-btn-link">Volver</button>
        </div>
      `;

      document.getElementById("cb-back-intro").onclick = () => {
        state.step = "intro";
        render();
      };
      setupWhatsAppTracking(container);
      return;
    }

    if (s.step === "budget-info") {
      container.innerHTML = `
        <div>
          <p><strong>Datos para el presupuesto</strong></p>
          <label>Nombre y apellido
            <input id="cb-name" class="chatbot-input" type="text" placeholder="Tu nombre" value="${s.budget.name}" />
          </label>
          <label>Email
            <input id="cb-email" class="chatbot-input" type="email" placeholder="tu@mail.com" value="${s.budget.email}" />
          </label>
          <label>Teléfono / WhatsApp
            <input id="cb-phone" class="chatbot-input" type="tel" placeholder="Código de país y número" value="${s.budget.phone}" />
          </label>
          <button id="cb-next-project" class="chatbot-btn-primary" ${isBudgetInfoValid() ? '' : 'disabled'}>Continuar</button>
          <button id="cb-back-intro-2" class="chatbot-btn-link">Volver</button>
        </div>
      `;

      const nameInput = document.getElementById("cb-name");
      const emailInput = document.getElementById("cb-email");
      const phoneInput = document.getElementById("cb-phone");
      const nextBtn = document.getElementById("cb-next-project");

      const handleInputChange = () => {
        updateBudget('name', nameInput.value);
        updateBudget('email', emailInput.value);
        updateBudget('phone', phoneInput.value);
        nextBtn.disabled = !isBudgetInfoValid();
      };

      nameInput.oninput = handleInputChange;
      emailInput.oninput = handleInputChange;
      phoneInput.oninput = handleInputChange;

      document.getElementById("cb-next-project").onclick = () => {
        if (!isBudgetInfoValid()) return;
        state.step = "budget-project";
        render();
      };

      document.getElementById("cb-back-intro-2").onclick = () => {
        state.step = "intro";
        render();
      };
      return;
    }

    if (s.step === "budget-project") {
      container.innerHTML = `
        <div>
          <p><strong>Contanos sobre el proyecto</strong></p>
          <label>Tipo de proyecto
            <select id="cb-project-type" class="chatbot-select">
              <option value="">Elegí una opción</option>
              <option value="Sitio web">Sitio web</option>
              <option value="Tienda online / eCommerce">Tienda online / eCommerce</option>
              <option value="App móvil">App móvil</option>
              <option value="Sistema a medida / IA">Sistema a medida / IA</option>
              <option value="Marketing y Ads">Marketing y Ads</option>
              <option value="Otro">Otro</option>
            </select>
          </label>
          <label>Detalles
            <textarea id="cb-details" class="chatbot-textarea" placeholder="Qué necesitás, plazos y objetivos">${s.budget.details}</textarea>
          </label>
          <button id="cb-next-contact" class="chatbot-btn-primary" ${isBudgetProjectValid() ? '' : 'disabled'}>Elegir cómo seguimos</button>
          <button id="cb-back-info" class="chatbot-btn-link">Volver</button>
        </div>
      `;

      const typeSelect = document.getElementById("cb-project-type");
      const detailsInput = document.getElementById("cb-details");
      const nextBtn = document.getElementById("cb-next-contact");

      typeSelect.value = s.budget.projectType;

      const handleProjectChange = () => {
        updateBudget('projectType', typeSelect.value);
        updateBudget('details', detailsInput.value);
        nextBtn.disabled = !isBudgetProjectValid();
      };

      typeSelect.onchange = handleProjectChange;
      detailsInput.oninput = handleProjectChange;

      document.getElementById("cb-next-contact").onclick = () => {
        if (!isBudgetProjectValid()) return;
        state.step = "budget-contact";
        render();
      };

      document.getElementById("cb-back-info").onclick = () => {
        state.step = "budget-info";
        render();
      };
      return;
    }

    if (s.step === "budget-contact") {
      container.innerHTML = `
        <div>
          <p><strong>Cómo querés seguir</strong></p>
          <div style="display:grid; gap:8px; margin:8px 0;">
            <label style="display:flex; align-items:center; gap:8px;">
              <input type="radio" name="cb-contact" value="whatsapp" ${s.budget.contact === 'whatsapp' ? 'checked' : ''} /> WhatsApp
            </label>
            <label style="display:flex; align-items:center; gap:8px;">
              <input type="radio" name="cb-contact" value="email" ${s.budget.contact === 'email' ? 'checked' : ''} /> Email
            </label>
            <label style="display:flex; align-items:center; gap:8px;">
              <input type="radio" name="cb-contact" value="videollamada" ${s.budget.contact === 'videollamada' ? 'checked' : ''} /> Agendar videollamada
            </label>
          </div>
          <button id="cb-submit" class="chatbot-btn-primary">Enviar solicitud</button>
          <button id="cb-back-project" class="chatbot-btn-link">Volver</button>
        </div>
      `;

      container.querySelectorAll('input[name="cb-contact"]').forEach((input) => {
        input.onchange = () => {
          updateBudget('contact', input.value);
        };
      });

      document.getElementById("cb-submit").onclick = async () => {
        const sent = await submitLeadForm();
        if (!sent) return;

        trackBudgetRequest('chatbot');
        state.step = "budget-success";
        render();
      };

      document.getElementById("cb-back-project").onclick = () => {
        state.step = "budget-project";
        render();
      };
      return;
    }

    if (s.step === "budget-success") {
      const message = encodeURIComponent(buildBudgetMessage());
      const whatsappLink = `https://wa.me/${WHATSAPP_OWNER}?text=${message}`;
      const mailtoLink = `mailto:${EMAIL_OWNER}?subject=Solicitud%20de%20presupuesto&body=${message}`;

      container.innerHTML = `
        <div>
          <p><strong>¡Listo! Enviamos tu solicitud interna.</strong></p>
          <p class="chatbot-badge">Podés elegir cómo contactarnos ahora mismo:</p>
          <a href="${whatsappLink}" target="_blank" class="chatbot-btn-primary" data-whatsapp-location="wsp_bot" style="background:#22c55e;">Hablar por WhatsApp</a>
          <a href="${mailtoLink}" class="chatbot-btn-primary" style="background:#0ea5e9;">Enviar email</a>
          <a href="${CALENDAR_LINK}" target="_blank" class="chatbot-btn-primary">Agendar videollamada</a>
          <button id="cb-new" class="chatbot-btn-link">Cargar otro presupuesto</button>
        </div>
      `;

      document.getElementById("cb-new").onclick = () => {
        state = {
          ...state,
          step: "budget-info",
          budget: { name: "", email: "", phone: "", projectType: "", details: "", contact: "whatsapp" },
        };
        render();
      };

      setupWhatsAppTracking(container);
      return;
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

