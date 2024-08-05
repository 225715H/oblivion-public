import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface Folder {
  id: number;
  name: string;
}

interface FolderContextType {
  folders: Folder[];
  addFolder: (folderName: string) => void;
}

const defaultContextValue: FolderContextType = {
  folders: [],
  addFolder: () => {}
};

const FolderContext = createContext<FolderContextType>(defaultContextValue);

interface FolderProviderProps {
  children: ReactNode;
}

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

export const useFolders = () => useContext(FolderContext);

const fakeFetchFoldersFromDB = async (): Promise<Folder[]> => {
  return [
    { id: 1, name: 'フォルダ１' },
    { id: 2, name: 'フォルダ２' },
  ];
};

const saveFolderToDB = async (folder: Folder) => {
  console.log('Saving folder to DB:', folder);
};
