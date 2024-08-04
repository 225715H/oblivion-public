import React, { createContext, useContext, useState, ReactNode } from 'react';

export type FolderListItem = {
  id: number;
  title: string;
  checked: boolean;
};

type FolderListContextType = {
  items: FolderListItem[];
  toggleChecked: (id: number) => void;
  deleteItem: (id: number) => void;
};

const FolderListContext = createContext<FolderListContextType | undefined>(undefined);

export const FolderListProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<FolderListItem[]>([
    { id: 1, title: 'Item 1', checked: false },
    { id: 2, title: 'Item 2', checked: false },
    { id: 3, title: 'Item 3', checked: false },
  ]);

  const toggleChecked = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const deleteItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <FolderListContext.Provider value={{ items, toggleChecked, deleteItem }}>
      {children}
    </FolderListContext.Provider>
  );
};

export const useFolderListContext = (): FolderListContextType => {
  const context = useContext(FolderListContext);
  if (!context) {
    throw new Error('useFolderListContext must be used within a ListProvider');
  }
  return context;
};
