import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Recurso de traducciones
const resources = {
  es: {
    translation: {
      "products": "Productos",
      "search": "Buscar...",
      "buy": "Comprar",
      "contact_header": "Contacto",
      "contact_info": "Contacta con nuestro equipo y en muy breve te daremos respuesta. Gracias por tu tiempo.",
      "form_header": "Formulario de contacto",
      "name": "Nombre y apellido *",
      "subject": "Asunto *",
      "message": "Mensaje *",
      "send": "Enviar",
      "offers": "Ofertas"
    }
  },
  en: {
    translation: {
      "products": "Products",
      "search": "Search...",
      "buy": "Buy",
      "contact_header": "Contact",
      "contact_info": "Contact our team, and we will reply to you shortly. Thank you for your time.",
      "form_header": "Contact Form",
      "name": "First and Last Name *",
      "subject": "Subject *",
      "message": "Message *",
      "send": "Send",
      "offers": "Offers"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "es", // Idioma de respaldo
    interpolation: {
      escapeValue: false // React ya escapa XSS
    }
  });

export default i18n;