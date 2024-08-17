import React, { FC, ReactNode } from "react";
import { SourceLanguageProvider } from "./sourceLanguageContext";
import { TargetLanguageProvider } from "./targetLanguageContext";
import { SourceTextProvider } from "./sourceTextContext";
import { TargetTextProvider } from "./targetTextContext";
import { FolderProvider } from "./folderContext";
import { VisibleFolderModalProvider } from "./visibleFolderModal";
import { FlashcardProvider } from "./flashCardContext";
import { CardEditProvider } from "./cardEditContext";
import { RecommendFlashcardProvider } from "./recommendFlashcardContext";
import { TestSelectedFolderIdProvider } from "./testSelectedFolderIdContext";
import { TestLanguageDirectionProvider } from "./testLanguageDirectionContext";
import { TranslateSnackbarProvider } from "./translateSnackbarContext";

interface TopContextProviderProps {
  children: ReactNode;
}

export const TopContextProvider: FC<TopContextProviderProps> = ({
  children,
}) => {
  return (
    <TranslateSnackbarProvider>
      <RecommendFlashcardProvider>
        <TestLanguageDirectionProvider>
          <TestSelectedFolderIdProvider>
            <CardEditProvider>
              <FlashcardProvider>
                <VisibleFolderModalProvider>
                  <FolderProvider>
                    <TargetTextProvider>
                      <SourceTextProvider>
                        <SourceLanguageProvider>
                          <TargetLanguageProvider>
                            {children}
                          </TargetLanguageProvider>
                        </SourceLanguageProvider>
                      </SourceTextProvider>
                    </TargetTextProvider>
                  </FolderProvider>
                </VisibleFolderModalProvider>
              </FlashcardProvider>
            </CardEditProvider>
          </TestSelectedFolderIdProvider>
        </TestLanguageDirectionProvider>
      </RecommendFlashcardProvider>
    </TranslateSnackbarProvider>
  );
};
