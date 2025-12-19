'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import type { Locale, Dictionary } from './types';
import { getDictionary } from './dictionaries';

interface LanguageContextType {
  locale: Locale;
  dictionary: Dictionary;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');
  const [dictionary, setDictionary] = useState<Dictionary>(getDictionary('en'));

  useEffect(() => {
    // Check localStorage for saved preference on mount
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'ar')) {
      // Use setTimeout to avoid synchronous setState in effect
      setTimeout(() => {
        setLocale(savedLocale);
        setDictionary(getDictionary(savedLocale));
        document.documentElement.lang = savedLocale;
        document.documentElement.dir = savedLocale === 'ar' ? 'rtl' : 'ltr';
      }, 0);
    }
  }, []);

  const toggleLanguage = () => {
    const newLocale: Locale = locale === 'en' ? 'ar' : 'en';
    setLocale(newLocale);
    setDictionary(getDictionary(newLocale));
    localStorage.setItem('locale', newLocale);
    document.documentElement.lang = newLocale;
    document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <LanguageContext.Provider value={{ locale, dictionary, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
