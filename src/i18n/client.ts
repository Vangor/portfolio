import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '@/messages/en.json';
import es from '@/messages/es.json';
import ru from '@/messages/ru.json';

export const locales = ['en', 'ru', 'es'] as const;
export type Locale = (typeof locales)[number];

function getInitialLocale(): Locale {
  const saved = window.localStorage.getItem('locale');
  if (saved && locales.includes(saved as Locale)) return saved as Locale;

  const browser = window.navigator.language.split('-')[0];
  return locales.includes(browser as Locale) ? (browser as Locale) : 'en';
}

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
    ru: { translation: ru },
  },
  lng: getInitialLocale(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
