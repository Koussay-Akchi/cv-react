import React, {createContext, FC, ReactNode, useContext, useEffect, useState} from 'react';

import i18n from '../locales/i18n'; // Adjust the import path as needed

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

const LanguageProvider: FC<LanguageProviderProps> = React.memo(({children}) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    i18n.changeLanguage(language);
    document.documentElement.lang = language;
  }, [language]);

  return <LanguageContext.Provider value={{language, setLanguage}}>{children}</LanguageContext.Provider>;
});

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export {LanguageProvider};
