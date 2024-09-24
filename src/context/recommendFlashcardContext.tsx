import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { wordList } from "../constants/wordList"

// コンテキストの型定義
interface RecommendFlashcardContextType {
  recommendcards: RecommendFlashcard[];
  fetchRandomFlashcards: () => void;
}

export interface RecommendFlashcard {
  id: number;
  English: string;
  Japanese: string;
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
    // wordListからランダムに15個のフラッシュカードを選択
    const shuffled = [...wordList].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 15);
    setRecommendcards(selected);
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
