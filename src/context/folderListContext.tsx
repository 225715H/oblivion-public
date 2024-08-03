import React, { createContext, useContext, useState, ReactNode } from 'react';

type Item = {
  id: number;
  title: string;
  checked: boolean;
};

type ListContextType = {
  items: Item[];
  toggleChecked: (id: number) => void;
  deleteItem: (id: number) => void;
};

const ListContext = createContext<ListContextType | undefined>(undefined);

export const ListProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Item[]>([
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
    <ListContext.Provider value={{ items, toggleChecked, deleteItem }}>
      {children}
    </ListContext.Provider>
  );
};

export const useListContext = (): ListContextType => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error('useListContext must be used within a ListProvider');
  }
  return context;
};
