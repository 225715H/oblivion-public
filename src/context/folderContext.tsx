import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// フォルダ型の定義
export interface Folder {
  id: number;
  name: string;
}

// コンテキストの型定義
interface FolderContextType {
  folders: Folder[];
  addFolder: (folderName: string) => void;
}

// デフォルトのコンテキスト値
const defaultContextValue: FolderContextType = {
  folders: [],
  addFolder: () => {}
};

// コンテキストの作成
const FolderContext = createContext<FolderContextType>(defaultContextValue);

// プロバイダーのプロパティ型定義
interface FolderProviderProps {
  children: ReactNode;
}

// プロバイダーの作成
export const FolderProvider: React.FC<FolderProviderProps> = ({ children }) => {
  const [folders, setFolders] = useState<Folder[]>([]);

  useEffect(() => {
    const fetchFolders = async () => {
      const fetchedFolders = await fakeFetchFoldersFromDB();
      setFolders(fetchedFolders);
    };
    fetchFolders();
  }, []);

  const addFolder = (folderName: string) => {
    const newFolder: Folder = { id: folders.length + 1, name: folderName };
    setFolders([...folders, newFolder]);
    saveFolderToDB(newFolder);
  };

  return (
    <FolderContext.Provider value={{ folders, addFolder }}>
      {children}
    </FolderContext.Provider>
  );
};

// カスタムフックの作成
export const useFolders = () => useContext(FolderContext);

// 擬似的なデータベース関数
const fakeFetchFoldersFromDB = async (): Promise<Folder[]> => {
  return [
    { id: 1, name: 'フォルダ１' },
    { id: 2, name: 'フォルダ２' },
  ];
};

const saveFolderToDB = async (folder: Folder) => {
  console.log('Saving folder to DB:', folder);
  // 実際のデータベースへの保存ロジックをここに実装
};
