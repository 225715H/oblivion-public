import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { setupDatabase, RecommendFlashcard } from "../data/recommendDB";

// コンテキストの型定義
interface RecommendFlashcardContextType {
  recommendcards: RecommendFlashcard[];
  fetchRandomFlashcards: () => void;
}

// デフォルトのコンテキスト値
const defaultContextValue: RecommendFlashcardContextType = {
  recommendcards: [],
  fetchRandomFlashcards: () => {},
};

// コンテキストの作成
const RecommendFlashcardContext =
  createContext<RecommendFlashcardContextType>(defaultContextValue);

// プロバイダーのプロパティ型定義
export interface RecommendFlashcardProviderProps {
  children: ReactNode;
}

// プロバイダーの作成
export const RecommendFlashcardProvider: React.FC<
  RecommendFlashcardProviderProps
> = ({ children }) => {
  const [recommendcards, setRecommendcards] = useState<RecommendFlashcard[]>(
    []
  );

  const fetchRandomFlashcards = () => {
    setupDatabase()
      .then((flashcards) => {
        setRecommendcards(flashcards);
      })
      .catch((error) => {
        console.error("Error fetching flashcards:", error);
      });
  };
  
  // 初回ロード時にランダムなフラッシュカードを取得
  useEffect(() => {
    fetchRandomFlashcards();
  }, []);

  return (
    <RecommendFlashcardContext.Provider
      value={{
        recommendcards,
        fetchRandomFlashcards,
      }}
    >
      {children}
    </RecommendFlashcardContext.Provider>
  );
};

// カスタムフックの作成
export const useRecommendFlashcards = () =>
  useContext(RecommendFlashcardContext);
