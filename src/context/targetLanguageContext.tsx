import React, {
    createContext,
    Dispatch,
    FC,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
  } from 'react';

  interface TargetLanguageProviderProps {
    children: ReactNode;
  }
  
  const TargetLanguageContext = createContext<string>('日本語');
  const SetTargetLanguageContext = createContext<Dispatch<SetStateAction<string>>>(() => undefined);
  
  export const TargetLanguageProvider: FC<TargetLanguageProviderProps> = ({ children }) => {
    const [targetLanguage, setTargetLanguage] = useState<string>('日本語');
  
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
  