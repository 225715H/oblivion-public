import React, { createContext, useState } from "react";
import { type FolderProviderProps } from "./folderContext";

interface EditingFolderContextType {
  editingId: number | null;
  setEditingId: (id: number | null) => void;
}

const defaultEditingContext: EditingFolderContextType = {
  editingId: null,
  setEditingId: () => {},
};

export const EditingFolderContext = createContext<EditingFolderContextType>(
  defaultEditingContext
);

export const EditingFolderProvider: React.FC<FolderProviderProps> = ({
  children,
}) => {
  const [editingId, setEditingId] = useState<number | null>(null);

  return (
    <EditingFolderContext.Provider value={{ editingId, setEditingId }}>
      {children}
    </EditingFolderContext.Provider>
  );
};
