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