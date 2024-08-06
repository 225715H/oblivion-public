import React, {
    createContext,
    Dispatch,
    FC,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
  } from "react";
  
  interface VisibleFolderModalContextType {
    isVisible: boolean;
    setIsVisible: Dispatch<SetStateAction<boolean>>;
  }
  
  const defaultVisibleFolderModalContext: VisibleFolderModalContextType = {
    isVisible: false,
    setIsVisible: () => {},
  };
  
  const VisibleFolderModalContext = createContext<VisibleFolderModalContextType>(
    defaultVisibleFolderModalContext
  );
  
  interface VisibleFolderModalProviderProps {
    children: ReactNode;
  }
  
  export const VisibleFolderModalProvider: FC<VisibleFolderModalProviderProps> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
  
    return (
      <VisibleFolderModalContext.Provider value={{ isVisible, setIsVisible }}>
        {children}
      </VisibleFolderModalContext.Provider>
    );
  };
  
  export const useVisibleFolderModal = () => useContext(VisibleFolderModalContext);
  