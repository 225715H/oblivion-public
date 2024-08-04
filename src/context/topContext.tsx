import React, { FC, ReactNode } from "react";
import { SourceLanguageProvider } from "./sourceLanguageContext";
import { TargetLanguageProvider } from "./targetLanguageContext";
import { SourceTextProvider } from "./sourceTextContext";
import { TargetTextProvider } from "./targetTextContext";
import { FolderListProvider } from "./folderListContext";

interface TopContextProviderProps {
  children: ReactNode;
}

export const TopContextProvider: FC<TopContextProviderProps> = ({
  children,
}) => {
  return (
    <FolderListProvider>
      <TargetTextProvider>
        <SourceTextProvider>
          <SourceLanguageProvider>
            <TargetLanguageProvider>{children}</TargetLanguageProvider>
          </SourceLanguageProvider>
        </SourceTextProvider>
      </TargetTextProvider>
    </FolderListProvider>
  );
};
