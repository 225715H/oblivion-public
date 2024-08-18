import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Context type definition
interface TranslateSnackbarContextType {
  isSnackbarVisible: boolean;
  message: string;
  showSnackbar: (message: string) => void;
  hideSnackbar: () => void;
}

// Create context with initial null value
const TranslateSnackbarContext = createContext<TranslateSnackbarContextType | null>(null);

// Provider component
export const TranslateSnackbarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isSnackbarVisible, setSnackbarVisible] = useState(false);
  const [message, setMessage] = useState('');

  const showSnackbar = (message: string) => {
    setMessage(message);
    setTimeout(() => {
      setSnackbarVisible(true);
    }, 300);
  };

  useEffect(() => {
    console.log('Snackbar visibility changed:', isSnackbarVisible, message);
  }, [isSnackbarVisible]);

  const hideSnackbar = () => {
    setSnackbarVisible(false);
    setMessage('');
  };

  return (
    <TranslateSnackbarContext.Provider value={{ isSnackbarVisible, message, showSnackbar, hideSnackbar }}>
      {children}
    </TranslateSnackbarContext.Provider>
  );
};

// Custom hook for using the context
export const useSnackbar = () => {
  const context = useContext(TranslateSnackbarContext);
  if (!context) {
    throw new Error('useSnackbar must be used within a TranslateSnackbarProvider');
  }
  return context;
};
