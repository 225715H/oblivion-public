import React, { FC, ReactNode } from "react";
import { SourceLanguageProvider } from "./sourceLanguageContext";
import { TargetLanguageProvider } from "./targetLanguageContext";
import { SourceTextProvider } from "./sourceTextContext";
import { TargetTextProvider } from "./targetTextContext";

interface TopContextProviderProps {
    children: ReactNode;
}

export const TopContextProvider: FC<TopContextProviderProps> = ({ children }) => {
    return (
      <TargetTextProvider>
        <SourceTextProvider>
          <SourceLanguageProvider>
            <TargetLanguageProvider>
              {children}
            </TargetLanguageProvider>
          </SourceLanguageProvider>
        </SourceTextProvider>
      </TargetTextProvider>
    );
  };