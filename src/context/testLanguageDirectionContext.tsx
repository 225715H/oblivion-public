import React, { createContext, useContext, useState } from 'react';

type LanguageDirection = 'JapaneseToEnglish' | 'EnglishToJapanese';

interface LanguageDirectionContextType {
  languageDirection: LanguageDirection;
  setLanguageDirection: (direction: LanguageDirection) => void;
}

const LanguageDirectionContext = createContext<LanguageDirectionContextType | undefined>(undefined);

export const TestLanguageDirectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [languageDirection, setLanguageDirection] = useState<LanguageDirection>('EnglishToJapanese');

  return (
    <LanguageDirectionContext.Provider value={{ languageDirection, setLanguageDirection }}>
      {children}
    </LanguageDirectionContext.Provider>
  );
};

export const useLanguageDirection = () => {
  const context = useContext(LanguageDirectionContext);
  if (!context) {
    throw new Error('useLanguageDirection must be used within a TestLanguageDirectionProvider');
  }
  return context.languageDirection;
};

export const useSetLanguageDirection = () => {
  const context = useContext(LanguageDirectionContext);
  if (!context) {
    throw new Error('useSetLanguageDirection must be used within a TestLanguageDirectionProvider');
  }
  return context.setLanguageDirection;
};
