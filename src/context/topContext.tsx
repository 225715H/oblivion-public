import React, { FC, ReactNode } from "react";
import { SourceLanguageProvider } from "./sourceLanguageContext";
import { TargetLanguageProvider } from "./targetLanguageContext";
import { SourceTextProvider } from "./sourceTextContext";
import { TargetTextProvider } from "./targetTextContext";
import { FolderProvider } from "./folderContext";
import { EditingFolderProvider } from "./editingFolderContext";

interface TopContextProviderProps {
  children: ReactNode;
}

export const TopContextProvider: FC<TopContextProviderProps> = ({
  children,
}) => {
  return (
    <EditingFolderProvider>
      <FolderProvider>
        <TargetTextProvider>
          <SourceTextProvider>
            <SourceLanguageProvider>
              <TargetLanguageProvider>{children}</TargetLanguageProvider>
            </SourceLanguageProvider>
          </SourceTextProvider>
        </TargetTextProvider>
      </FolderProvider>
    </EditingFolderProvider>
  );
};
