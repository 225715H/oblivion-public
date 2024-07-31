import React, {
    createContext,
    Dispatch,
    FC,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
  } from 'react';
  
  const SourceLanguageContext = createContext<string>('英語');
  const SetSourceLanguageContext = createContext<Dispatch<SetStateAction<string>>>(() => undefined);
  
  interface SourceLanguageProviderProps {
    children: ReactNode;
  }
  
  export const SourceLanguageProvider: FC<SourceLanguageProviderProps> = ({ children }) => {
    const [sourceLanguage, setSourceLanguage] = useState<string>('英語');
  
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