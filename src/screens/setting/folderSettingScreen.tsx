import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import React, { useState } from "react";
import FolderSelectOrganismContainer from "../../components/organisms/folderSelectOrganismContainer";
import { colors } from "../../styles/colors";
import CreateFolderModal from "../../components/molecules/createFolderModal";
import { useFolders } from "../../context/folderContext";
import { useVisibleFolderModal } from "../../context/visibleFolderModal";

// ホームスクリーンコンポーネント
const FolderSettingScreen: React.FC = (navigation) => {
  const { isVisible, setIsVisible } = useVisibleFolderModal();
  const [folderName, setFolderName] = useState("");
  const { addFolder } = useFolders();

  const toggleFolderModal = () => {
    setIsVisible(!isVisible);
  };

  const handleCreateFolder = () => {
    addFolder(folderName);
    setFolderName("");
    toggleFolderModal();
    setIsVisible(false);
  };

  const withoutEditing = () => {
    Keyboard.dismiss(); // キーボードを閉じる
  };

  return (
    <TouchableWithoutFeedback onPress={withoutEditing}>
      <View style={{ flex: 1, backgroundColor: colors.backgroundPrimary }}>
        <FolderSelectOrganismContainer />
        {isVisible && (
          <CreateFolderModal
            isVisible={isVisible}
            toggleModal={toggleFolderModal}
            folderName={folderName}
            setFolderName={setFolderName}
            handleCreateFolder={() => handleCreateFolder()}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FolderSettingScreen;
