import React, { FC, ReactNode } from "react";
import { SourceLanguageProvider } from "./sourceLanguageContext";
import { TargetLanguageProvider } from "./targetLanguageContext";
import { SourceTextProvider } from "./sourceTextContext";
import { TargetTextProvider } from "./targetTextContext";
import { FolderListProvider } from "./folderListContext";
import { FolderProvider } from "./folderContext";

interface TopContextProviderProps {
  children: ReactNode;
}

export const TopContextProvider: FC<TopContextProviderProps> = ({
  children,
}) => {
  return (
    <FolderProvider>
      <FolderListProvider>
        <TargetTextProvider>
          <SourceTextProvider>
            <SourceLanguageProvider>
              <TargetLanguageProvider>{children}</TargetLanguageProvider>
            </SourceLanguageProvider>
          </SourceTextProvider>
        </TargetTextProvider>
      </FolderListProvider>
    </FolderProvider>
  );
};
