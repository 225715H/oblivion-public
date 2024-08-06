import React, {
    createContext,
    Dispatch,
    FC,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
  } from 'react';
  
  const TargetTextContext = createContext<string>('未実装');
  const SetTargetTextContext = createContext<Dispatch<SetStateAction<string>>>(() => undefined);
  
  interface TargetTextProviderProps {
    children: ReactNode;
  }
  
  export const TargetTextProvider: FC<TargetTextProviderProps> = ({ children }) => {
    const [TargetText, setTargetText] = useState<string>('未実装');
  
    return (
      <TargetTextContext.Provider value={TargetText}>
        <SetTargetTextContext.Provider value={setTargetText}>
          {children}
        </SetTargetTextContext.Provider>
      </TargetTextContext.Provider>
    );
  };
  
  export const useTargetText = () => useContext(TargetTextContext);
  export const useSetTargetText = () => useContext(SetTargetTextContext);