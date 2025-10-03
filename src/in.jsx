import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './locales/en.json';
import translationES from './locales/es.json';

const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

i18n
  .use(LanguageDetector) // Utiliza el detector de idioma
  .use(initReactI18next)
  .init({
    resources,
    // Este es el idioma predeterminado si no se detecta ninguno
    fallbackLng: 'es', 
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // Orden en el que i18n busca el idioma
      // 'path' debe ser el primero para que lea la URL
      order: ['path', 'cookie', 'localStorage', 'navigator'],
      // Esto le dice al detector que busque en el primer segmento de la ruta (por ejemplo, `/es/`).
      lookupFromPathIndex: 0, 
    },
  });

export default i18n;