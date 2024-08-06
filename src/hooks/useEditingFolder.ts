import { useContext } from "react";
import { EditingFolderContext } from "../context/editingFolderContext";

export const useEditingFolder = () => useContext(EditingFolderContext);
