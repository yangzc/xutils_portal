import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import zhCN from './locales/zh-CN.json';
import enUS from './locales/en-US.json';

import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  'zh-CN': {
    translation: zhCN
  },
  'en-US': {
    translation: enUS
  }
};

const detectionOptions = {
  order: ['querystring', 'cookie', 'localStorage', 'navigator'],
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  caches: ['localStorage', 'cookie'],
  cookieOptions: {
    path: '/',
    domain: window.location.hostname.includes('xutils.cn') ? '.xutils.cn' : window.location.hostname,
    expirationDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'zh-CN',
    detection: detectionOptions,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
