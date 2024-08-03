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

const defaultSourceLanguage: Language = { language: 'EN', name: '英語' };

const SourceLanguageContext = createContext<Language>(defaultSourceLanguage);
const SetSourceLanguageContext = createContext<Dispatch<SetStateAction<Language>>>(() => undefined);

interface SourceLanguageProviderProps {
  children: ReactNode;
}

export const SourceLanguageProvider: FC<SourceLanguageProviderProps> = ({ children }) => {
  const [sourceLanguage, setSourceLanguage] = useState<Language>(defaultSourceLanguage);

  return (
    <SourceLanguageContext.Provider value={sourceLanguage}>
      <SetSourceLanguageContext.Provider value={setSourceLanguage}>
        {children}
      </SetSourceLanguageContext.Provider>
    </SourceLanguageContext.Provider>
  );
};

export const useSourceLanguage = () => useContext(SourceLanguageContext);
export const useSetSourceLanguage = () => useContext(SetSourceLanguageContext);
