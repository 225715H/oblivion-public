import React, { useState } from "react";
import SelectFolderModal from "../../components/molecules/selectFolderModal";
import CreateFolderModal from "../../components/molecules/createFolderModal";

interface FolderModalsProps {
  isModalVisible: boolean;
  setModalVisible: (isVisible: boolean) => void;
  isFolderModalVisible: boolean;
  setFolderModalVisible: (isVisible: boolean) => void;
  folders: any[];
  addFolder: (folderName: string) => void;
  navigation: any;
}

const FolderModals: React.FC<FolderModalsProps> = ({
  isModalVisible,
  setModalVisible,
  isFolderModalVisible,
  setFolderModalVisible,
  folders,
  addFolder,
  navigation,
}) => {
  const [checked, setChecked] = useState<boolean[]>([]);
  const [folderName, setFolderName] = useState("");

  const toggleFolderModal = () => {
    setFolderModalVisible(!isFolderModalVisible);
  };

  const toggleCheck = (index: number) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  const handleCreateFolder = () => {
    addFolder(folderName);
    setFolderName("");
    toggleFolderModal();
    // navigation.goBack();
  };

  const openFolderModal = () => {
    setModalVisible(false);
    toggleFolderModal();
  };

  const handleModalComplete = () => {
    setModalVisible(false);
    // navigation.goBack();
  };

  return (
    <>
      <SelectFolderModal
        isVisible={isModalVisible}
        toggleModal={() => setModalVisible(isModalVisible)}
        folders={folders}
        checked={checked}
        toggleCheck={toggleCheck}
        openFolderModal={openFolderModal}
        handleModalComplete={handleModalComplete}
      />

      <CreateFolderModal
        isVisible={isFolderModalVisible}
        toggleModal={toggleFolderModal}
        folderName={folderName}
        setFolderName={setFolderName}
        handleCreateFolder={handleCreateFolder}
      />
    </>
  );
};

export default FolderModals;
