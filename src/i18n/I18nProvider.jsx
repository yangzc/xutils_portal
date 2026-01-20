'use client';

import { useEffect, useState } from 'react';
import i18n from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import zhCN from './locales/zh-CN.json';
import enUS from './locales/en-US.json';

const resources = {
  'zh-CN': { translation: zhCN },
  'en-US': { translation: enUS }
};

// Initialize i18next once
if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'zh-CN',
      lng: 'zh-CN', // Default, will be updated by detector in client
      interpolation: {
        escapeValue: false
      }
    });
}

export function I18nProvider({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // On client, we can use the detector logic if needed, 
    // but for now let's just use the current LNG
    const savedLng = localStorage.getItem('i18nextLng') || 'zh-CN';
    if (i18n.language !== savedLng) {
      i18n.changeLanguage(savedLng);
    }
  }, []);

  if (!isClient) {
    // Initial server render with placeholder or default lng
    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
