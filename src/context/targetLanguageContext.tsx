import React, {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface Language {
  language: string;
  name: string;
}

const defaultTargetLanguage: Language = { language: 'JA', name: '日本語' };

const TargetLanguageContext = createContext<Language>(defaultTargetLanguage);
const SetTargetLanguageContext = createContext<Dispatch<SetStateAction<Language>>>(() => undefined);

interface TargetLanguageProviderProps {
  children: ReactNode;
}

export const TargetLanguageProvider: FC<TargetLanguageProviderProps> = ({ children }) => {
  const [targetLanguage, setTargetLanguage] = useState<Language>(defaultTargetLanguage);

  return (
    <TargetLanguageContext.Provider value={targetLanguage}>
      <SetTargetLanguageContext.Provider value={setTargetLanguage}>
        {children}
      </SetTargetLanguageContext.Provider>
    </TargetLanguageContext.Provider>
  );
};

export const useTargetLanguage = () => useContext(TargetLanguageContext);
export const useSetTargetLanguage = () => useContext(SetTargetLanguageContext);
