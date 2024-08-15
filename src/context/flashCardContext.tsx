import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import {
  openDatabase,
  insertFlashcard,
  getFlashcardsByFolder,
  deleteFlashcard,
  updateFlashcard,
} from "../data/database";

// フラッシュカード型の定義
export interface Flashcard {
  id: number;
  folder_id: number;
  front: string;
  back: string;
  level: number;
}

// コンテキストの型定義
interface FlashcardContextType {
  flashcards: Flashcard[];
  addFlashcard: (folderId: number, front: string, back: string) => void;
  removeFlashcard: (flashcardId: number) => void;
  editFlashcard: (
    flashcardId: number,
    front: string,
    back: string,
    folder_id: number
  ) => void;
  fetchFlashcards: (folderIds: number[]) => void;
}

// デフォルトのコンテキスト値
const defaultContextValue: FlashcardContextType = {
  flashcards: [],
  addFlashcard: () => {},
  removeFlashcard: () => {},
  editFlashcard: () => {},
  fetchFlashcards: () => {},
};

// コンテキストの作成
const FlashcardContext =
  createContext<FlashcardContextType>(defaultContextValue);

// プロバイダーのプロパティ型定義
export interface FlashcardProviderProps {
  children: ReactNode;
}

// プロバイダーの作成
export const FlashcardProvider: React.FC<FlashcardProviderProps> = ({
  children,
}) => {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);

  const fetchFlashcards = async (folderIds: number[]) => {
    await openDatabase(); // データベースを開く
    if (folderIds.length === 0) {
      setFlashcards([]); // ローカル状態を更新
      return;
    }
    let allFlashcards: Flashcard[] = [];
    for (const folderId of folderIds) {
      const fetchedFlashcards = await getFlashcardsByFolder(folderId); // フォルダーに属するフラッシュカードを取得
      allFlashcards = [...allFlashcards, ...fetchedFlashcards];
    }
    setFlashcards(allFlashcards); // ローカル状態を更新
  };

  const addFlashcard = async (
    folderId: number,
    front: string,
    back: string
  ) => {
    const flashcardId = await insertFlashcard(folderId, front, back); // フラッシュカードを追加
    const newFlashcard: Flashcard = {
      id: flashcardId,
      folder_id: folderId,
      front,
      back,
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
    front: string,
    back: string,
    folder_id: number
  ) => {
    setFlashcards(
      flashcards.map((flashcard) =>
        flashcard.id === flashcardId
          ? {
              id: flashcardId,
              folder_id,
              front,
              back,
              level: flashcard.level,
            }
          : flashcard
      )
    ); // ローカル状態を更新
    await updateFlashcard(flashcardId, front, back, folder_id); // フラッシュカードを更新
  };

  return (
    <FlashcardContext.Provider
      value={{
        flashcards,
        addFlashcard,
        removeFlashcard,
        editFlashcard,
        fetchFlashcards,
      }}
    >
      {children}
    </FlashcardContext.Provider>
  );
};

// カスタムフックの作成
export const useFlashcards = () => useContext(FlashcardContext);
