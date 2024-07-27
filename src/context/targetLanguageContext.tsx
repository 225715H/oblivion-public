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
  
  const TargetLanguageContext = createContext<string>('ja');
  const SetTargetLanguageContext = createContext<Dispatch<SetStateAction<string>>>(() => undefined);
  
  export const TargetLanguageProvider: FC<TargetLanguageProviderProps> = ({ children }) => {
    const [targetLanguage, setTargetLanguage] = useState<string>('ja');
  
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
  