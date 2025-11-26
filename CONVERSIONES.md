# Conversiónes configuradas

Resumen de las etiquetas y eventos de conversión implementados en el sitio:

- **WhatsApp (clicks en botones o enlaces)**
  - Evento `click_whatsapp` en GA4 con `event_category: engagement` y `event_label` según `data-whatsapp-location`.
  - Conversión de Google Ads: `AW-958141767/wsp_click`.
- **Gracias por WhatsApp (tras solicitar presupuesto y elegir WhatsApp)**
  - Evento GA4 `whatsapp_lead` con `event_category: lead` y `event_label: whatsapp_gracias` en `/gracias-whatsapp`.
- **Gracias por Videollamada (presupuesto vía videollamada)**
  - Conversión de Google Ads: `AW-958141767/videollamada_agendada`.
  - Evento GA4 `videollamada_agendada` con `event_category: lead` y `event_label: videollamada_chatbot` en `/gracias-videollamada.html`.
- **Gracias por Mail (envío de presupuesto por correo)**
  - Evento GA4 `presupuesto_enviado` con `event_category: lead` y `event_label: presupuesto_web` en `/gracias-presupuesto`.

Rutas de las páginas de agradecimiento:
- Presupuesto por email: `/gracias-presupuesto`
- Presupuesto por WhatsApp: `/gracias-whatsapp`
- Presupuesto por videollamada: `/gracias-videollamada.html`
