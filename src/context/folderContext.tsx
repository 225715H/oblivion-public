import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
  useMemo,
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
  checked: number;
}

// コンテキストの型定義
interface FolderContextType {
  folders: Folder[];
  addFolder: (folderName: string) => void;
  removeFolder: (folderId: number) => void;
  editFolder: (folderId: number, folderName: string, checked: number) => void;
  checkedFolders: number[];
}

// デフォルトのコンテキスト値
const defaultContextValue: FolderContextType = {
  folders: [],
  addFolder: () => {},
  removeFolder: () => {},
  editFolder: () => {},
  checkedFolders: [],
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
    const newFolder: Folder = { id: folderId, name: folderName, checked: 1 };
    setFolders([...folders, newFolder]); // ローカル状態を更新
  };

  const removeFolder = async (folderId: number) => {
    setFolders(folders.filter((folder) => folder.id !== folderId)); // ローカル状態を更新
    await deleteFolder(folderId); // データベースからフォルダーを削除
  };

  const editFolder = async (
    folderId: number,
    folderName: string,
    checked: number
  ) => {
    setFolders(
      folders.map((folder) =>
        folder.id === folderId
          ? { id: folderId, name: folderName, checked: checked }
          : folder
      )
    ); // ローカル状態を更新
    await updateFolder(folderId, folderName, checked); // データベースのフォルダーを更新
  };


  const checkedFolders = folders
    .filter((folder) => folder.checked === 1)
    .map((folder) => folder.id);

  return (
    <FolderContext.Provider
      value={{
        folders,
        addFolder,
        removeFolder,
        editFolder,
        checkedFolders,
      }}
    >
      {children}
    </FolderContext.Provider>
  );
};

// カスタムフックの作成
export const useFolders = () => useContext(FolderContext);
