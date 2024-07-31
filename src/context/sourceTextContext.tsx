import React, {
    createContext,
    Dispatch,
    FC,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
  } from 'react';
  
  const SourceTextContext = createContext<string>('');
  const SetSourceTextContext = createContext<Dispatch<SetStateAction<string>>>(() => undefined);
  
  interface SourceTextProviderProps {
    children: ReactNode;
  }
  
  export const SourceTextProvider: FC<SourceTextProviderProps> = ({ children }) => {
    const [SourceText, setSourceText] = useState<string>('');
  
    return (
      <SourceTextContext.Provider value={SourceText}>
        <SetSourceTextContext.Provider value={setSourceText}>
          {children}
        </SetSourceTextContext.Provider>
      </SourceTextContext.Provider>
    );
  };
  
  export const useSourceText = () => useContext(SourceTextContext);
  export const useSetSourceText = () => useContext(SetSourceTextContext);