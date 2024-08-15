import React, { FC, ReactNode } from "react";
import { SourceLanguageProvider } from "./sourceLanguageContext";
import { TargetLanguageProvider } from "./targetLanguageContext";
import { SourceTextProvider } from "./sourceTextContext";
import { TargetTextProvider } from "./targetTextContext";
import { FolderProvider } from "./folderContext";
import { VisibleFolderModalProvider } from "./visibleFolderModal";
import { FlashcardProvider } from "./flashCardContext";
import { CardEditProvider } from "./cardEditContext";

interface TopContextProviderProps {
  children: ReactNode;
}

export const TopContextProvider: FC<TopContextProviderProps> = ({
  children,
}) => {
  return (
    <CardEditProvider>
      <FlashcardProvider>
        <VisibleFolderModalProvider>
          <FolderProvider>
            <TargetTextProvider>
              <SourceTextProvider>
                <SourceLanguageProvider>
                  <TargetLanguageProvider>{children}</TargetLanguageProvider>
                </SourceLanguageProvider>
              </SourceTextProvider>
            </TargetTextProvider>
          </FolderProvider>
        </VisibleFolderModalProvider>
      </FlashcardProvider>
    </CardEditProvider>
  );
};
