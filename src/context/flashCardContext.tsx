import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
} from "react";
import {
  openDatabase,
  insertFlashcard,
  getFlashcardsByFolder,
  deleteFlashcard,
  updateFlashcard,
  updateFlashcardLevel,
} from "../data/database";

// フラッシュカード型の定義
export interface Flashcard {
  id: number;
  folder_id: number;
  English: string;
  Japanese: string;
  level: number;
}

// コンテキストの型定義
interface FlashcardContextType {
  flashcards: Flashcard[];
  testSelectedFlashcards: Flashcard[];
  addFlashcard: (folderId: number, English: string, Japanese: string) => void;
  removeFlashcard: (flashcardId: number) => void;
  editFlashcard: (
    flashcardId: number,
    English: string,
    Japanese: string,
    folder_id: number
  ) => void;
  fetchFlashcards: (folderIds: number[]) => void;
  fetchTestSelectedFlashcards: (folderId: number) => void;
  editFlashcardLevel: (flashcardId: number, level: number) => void;
}

// デフォルトのコンテキスト値
const defaultContextValue: FlashcardContextType = {
  flashcards: [],
  testSelectedFlashcards: [],
  addFlashcard: () => {},
  removeFlashcard: () => {},
  editFlashcard: () => {},
  fetchFlashcards: () => {},
  fetchTestSelectedFlashcards: () => {},
  editFlashcardLevel: () => {},
};

// コンテキストの作成
const FlashcardContext = createContext<FlashcardContextType>(defaultContextValue);

// プロバイダーのプロパティ型定義
export interface FlashcardProviderProps {
  children: ReactNode;
}

// プロバイダーの作成
export const FlashcardProvider: React.FC<FlashcardProviderProps> = ({
  children,
}) => {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [testSelectedFlashcards, setTestSelectedFlashcards] = useState<Flashcard[]>([]);

  const fetchFlashcards = async (folderIds: number[]) => {
    await openDatabase(); // データベースを開く
    if (folderIds.length === 0) {
      setFlashcards([]); // ローカル状態を更新
    }
    let allFlashcards: Flashcard[] = [];
    for (const folderId of folderIds) {
      const fetchedFlashcards = await getFlashcardsByFolder(folderId); // フォルダーに属するフラッシュカードを取得
      allFlashcards = [...allFlashcards, ...fetchedFlashcards];
    }
    setFlashcards(allFlashcards); // ローカル状態を更新
  };

  const fetchTestSelectedFlashcards = async (folderId: number) => {
    await openDatabase(); // データベースを開く
    const fetchedFlashcards = await getFlashcardsByFolder(folderId); // フォルダーに属するフラッシュカードを取得
    setTestSelectedFlashcards(fetchedFlashcards); // ローカル状態を更新
  };

  const addFlashcard = async (
    folderId: number,
    English: string,
    Japanese: string
  ) => {
    const flashcardId = await insertFlashcard(folderId, English, Japanese); // フラッシュカードを追加
    const newFlashcard: Flashcard = {
      id: flashcardId,
      folder_id: folderId,
      English,
      Japanese,
      level: 0,
    };
    setFlashcards([...flashcards, newFlashcard]); // ローカル状態を更新
  };

  const removeFlashcard = async (flashcardId: number) => {
    setFlashcards(
      flashcards.filter((flashcard) => flashcard.id !== flashcardId)
    ); // ローカル状態を更新
    await deleteFlashcard(flashcardId); // フラッシュカードを削除
  };

  const editFlashcard = async (
    flashcardId: number,
    English: string,
    Japanese: string,
    folder_id: number
  ) => {
    setFlashcards(
      flashcards.map((flashcard) =>
        flashcard.id === flashcardId
          ? {
              id: flashcardId,
              folder_id,
              English,
              Japanese,
              level: flashcard.level,
            }
          : flashcard
      )
    ); // ローカル状態を更新
    await updateFlashcard(flashcardId, English, Japanese, folder_id); // フラッシュカードを更新
  };

  const editFlashcardLevel = async (flashcardId: number, level: number) => {
    setTestSelectedFlashcards(
      testSelectedFlashcards.map((flashcard) =>
        flashcard.id === flashcardId
          ? {
              id: flashcardId,
              folder_id: flashcard.folder_id,
              English: flashcard.English,
              Japanese: flashcard.Japanese,
              level,
            }
          : flashcard
      )
    ); // ローカル状態を更新
    await updateFlashcardLevel(flashcardId, level); // フラッシュカードのレベルを更新
  };

  return (
    <FlashcardContext.Provider
      value={{
        flashcards,
        testSelectedFlashcards,
        addFlashcard,
        removeFlashcard,
        editFlashcard,
        fetchFlashcards,
        fetchTestSelectedFlashcards,
        editFlashcardLevel,
      }}
    >
      {children}
    </FlashcardContext.Provider>
  );
};

// カスタムフックの作成
export const useFlashcards = () => useContext(FlashcardContext);
