import React, { useState } from 'react';
import SelectFolderModal from '../../components/molecules/selectFolderModal';
import CreateFolderModal from '../../components/molecules/createFolderModal';

interface FolderModalsProps {
  folders: any[];
  addFolder: (folderName: string) => void;
  navigation: any;
}

const FolderModals: React.FC<FolderModalsProps> = ({ folders, addFolder, navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isFolderModalVisible, setFolderModalVisible] = useState(false);
  const [checked, setChecked] = useState<boolean[]>([]);
  const [folderName, setFolderName] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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
    setFolderName('');
    toggleFolderModal();
    navigation.goBack();
  };

  const openFolderModal = () => {
    toggleModal();
    toggleFolderModal();
  };

  const handleModalComplete = () => {
    toggleModal();
    navigation.goBack();
  };

  return (
    <>
      <SelectFolderModal
        isVisible={isModalVisible}
        toggleModal={toggleModal}
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
