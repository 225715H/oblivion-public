import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import {
  openDatabase,
  insertFolder,
  getFolders,
  deleteFolder,
  updateFolder,
} from "../data/database";

// フォルダ型の定義
export interface Folder {
  id: number;
  name: string;
}

// コンテキストの型定義
interface FolderContextType {
  folders: Folder[];
  addFolder: (folderName: string) => void;
  removeFolder: (folderId: number) => void;
  editFolder: (folderId: number, folderName: string) => void;
}

// デフォルトのコンテキスト値
const defaultContextValue: FolderContextType = {
  folders: [],
  addFolder: () => {},
  removeFolder: () => {},
  editFolder: () => {},
};

// コンテキストの作成
const FolderContext = createContext<FolderContextType>(defaultContextValue);

// プロバイダーのプロパティ型定義
export interface FolderProviderProps {
  children: ReactNode;
}

// プロバイダーの作成
export const FolderProvider: React.FC<FolderProviderProps> = ({ children }) => {
  const [folders, setFolders] = useState<Folder[]>([]);

  useEffect(() => {
    const fetchFolders = async () => {
      await openDatabase(); // データベースを開く
      const fetchedFolders = await getFolders(); // データベースからフォルダーを取得
      setFolders(fetchedFolders); // ローカル状態を更新
    };
    fetchFolders();
  }, []);

  const addFolder = async (folderName: string) => {
    const folderId = await insertFolder(folderName); // データベースにフォルダーを追加
    const newFolder: Folder = { id: folderId, name: folderName };
    setFolders([...folders, newFolder]); // ローカル状態を更新
  };

  const removeFolder = async (folderId: number) => {
    await deleteFolder(folderId); // データベースからフォルダーを削除
    setFolders(folders.filter((folder) => folder.id !== folderId)); // ローカル状態を更新
  };

  const editFolder = async (folderId: number, folderName: string) => {
    await updateFolder(folderId, folderName); // データベースのフォルダーを更新
    setFolders(
      folders.map((folder) =>
        folder.id === folderId ? { ...folder, name: folderName } : folder
      )
    ); // ローカル状態を更新
  };

  return (
    <FolderContext.Provider
      value={{
        folders,
        addFolder,
        removeFolder,
        editFolder,
      }}
    >
      {children}
    </FolderContext.Provider>
  );
};

// カスタムフックの作成
export const useFolders = () => useContext(FolderContext);
