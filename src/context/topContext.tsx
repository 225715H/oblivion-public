import React, { FC, ReactNode } from "react";
import { SourceLanguageProvider } from "./sourceLanguageContext";
import { TargetLanguageProvider } from "./targetLanguageContext";

interface TopContextProviderProps {
    children: ReactNode;
}

export const TopContextProvider: FC<TopContextProviderProps> = ({ children }) => {
    return (
      <SourceLanguageProvider>
        <TargetLanguageProvider>
          {children}
        </TargetLanguageProvider>
      </SourceLanguageProvider>
    );
  };