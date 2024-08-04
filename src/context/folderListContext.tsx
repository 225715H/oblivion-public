import React, { createContext, useContext, useState, ReactNode } from 'react';

export type FolderListItem = {
  id: number;
  title: string;
  checked: boolean;
};

type FolderListContextType = {
  folders: FolderListItem[];
  editindId: number | null;
  setEditingId: (id: number | null) => void;
  toggleChecked: (id: number) => void;
  deleteItem: (id: number) => void;
  updateTitle: (id: number, newTitle: string) => void;
  currentTitle: string;
  setCurrentTitle: (title: string) => void;
};

const FolderListContext = createContext<FolderListContextType | undefined>(undefined);

export const FolderListProvider = ({ children }: { children: ReactNode }) => {
  const [folders, setFolders] = useState<FolderListItem[]>([
    { id: 1, title: 'Item 1', checked: false },
    { id: 2, title: 'Item 2', checked: false },
    { id: 3, title: 'Item 3', checked: false },
  ]);
  const [editindId, setEditingId] = useState<number | null>(null);
  const [currentTitle, setCurrentTitle] = useState<string>('');

  const toggleChecked = (id: number) => {
    setFolders((prevFolders) =>
      prevFolders.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const deleteItem = (id: number) => {
    setFolders((prevFolders) => prevFolders.filter((item) => item.id !== id));
  };

  const updateTitle = (id: number, newTitle: string) => {
    setFolders((prevFolders) =>
      prevFolders.map((item) =>
        item.id === id ? { ...item, title: newTitle } : item
      )
    );
  }

  return (
    <FolderListContext.Provider value={{ folders, toggleChecked, deleteItem, updateTitle, editindId, setEditingId, currentTitle, setCurrentTitle }}>
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
