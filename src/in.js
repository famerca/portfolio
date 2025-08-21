import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Archivos de traducción
import translationEN from './locales/en.json';
import translationES from './locales/es.json';

// Los recursos son los archivos de traducción que cargará i18next
const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

i18n
  .use(initReactI18next) // Pasa i18n al componente de React
  .init({
    resources,
    lng: 'es', // Establece el idioma predeterminado
    fallbackLng: 'en', // Idioma de respaldo si no se encuentra la traducción
    interpolation: {
      escapeValue: false, // No escapar HTML ya que React lo hace automáticamente
    },
  });

export default i18n;