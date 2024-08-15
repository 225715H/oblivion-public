import React, { createContext, ReactNode, useContext, useState } from "react";
import { Flashcard } from "./flashCardContext";

interface CardEditContextType {
  cardEdit: Flashcard | null;
  setCardEdit: (card: Flashcard | null) => void;
}

const defaultCardEditContext: CardEditContextType = {
  cardEdit: null,
  setCardEdit: () => {},
};

const CardEditContext = createContext<CardEditContextType>(
  defaultCardEditContext
);

interface CardEditProviderProps {
  children: ReactNode;
}

export const CardEditProvider = ({ children }: CardEditProviderProps) => {
  const [cardEdit, setCardEdit] = useState<Flashcard | null>(null);

  return (
    <CardEditContext.Provider value={{ cardEdit, setCardEdit }}>
      {children}
    </CardEditContext.Provider>
  );
};

export const useCardEdit = () => useContext(CardEditContext);
