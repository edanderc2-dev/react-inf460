import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Traducciones
const resources = {
  es: {
    translation: {
      // Barra principal
      "products": "Productos",
      "search": "Buscar...",
      "offers": "Ofertas",
      "buy": "Comprar",

      // Categorías secundarias Header
      "cotillon": "Cotillón",
      "baño": "Baño",
      "infantes": "Infantes",
      "cocina": "Cocina",
      "decoracion": "Decoración",
      "dormitorio": "Dormitorio",
      "ferreteria": "Ferretería",
      "iluminacion": "Iluminación",
      "jardin": "Jardín",
      "living": "Living, Comedor",
      "mascotas": "Mascotas",
      "oficina": "Oficina y Papelería",
      "indumentaria": "Indumentaria",
      "salud": "Salud y Belleza",

      // HomePage: bloques y secciones
      "plants": "Plantas Artificiales",
      "hardware": "Ferretería",
      "kitchen": "Cocina",
      "lighting": "Iluminación",
      "garden": "Jardín y Exterior",
      "bathroom": "Artículos de Baño",
      "kids": "Zona Infantil",
      "previous": "Anterior",
      "next": "Siguiente"
    }
  },
  en: {
    translation: {
      // Barra principal
      "products": "Products",
      "search": "Search...",
      "offers": "Offers",
      "buy": "Buy",

      // Categorías secundarias Header
      "cotillon": "Party",
      "baño": "Bathroom",
      "infantes": "Kids",
      "cocina": "Kitchen",
      "decoracion": "Decoration",
      "dormitorio": "Bedroom",
      "ferreteria": "Hardware",
      "iluminacion": "Lighting",
      "jardin": "Garden",
      "living": "Living, Dining",
      "mascotas": "Pets",
      "oficina": "Office & Stationery",
      "indumentaria": "Clothing",
      "salud": "Health & Beauty",

      // HomePage: bloques y secciones
      "plants": "Artificial Plants",
      "hardware": "Hardware",
      "kitchen": "Kitchen",
      "lighting": "Lighting",
      "garden": "Garden & Outdoor",
      "bathroom": "Bathroom Items",
      "kids": "Kids Zone",
      "previous": "Previous",
      "next": "Next"
    }
  }
};

// Inicialización
i18n
  .use(LanguageDetector) // Detecta automáticamente el idioma del navegador
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "es", // Idioma por defecto
    debug: false,
    interpolation: {
      escapeValue: false // React ya protege contra XSS
    }
  });

export default i18n;
