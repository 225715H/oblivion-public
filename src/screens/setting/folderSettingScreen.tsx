import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import React from "react";
import FolderSelectOrganismContainer from "../../components/organisms/folderSelectOrganismContainer";
import { colors } from "../../styles/colors";
import { useFolders } from "../../context/folderContext";
import { useEditingFolder } from "../../hooks/useEditingFolder";

// ホームスクリーンコンポーネント
const FolderSettingScreen: React.FC = () => {
  const { setEditingId } = useEditingFolder();
  const withoutEditing = () => {
    Keyboard.dismiss(); // キーボードを閉じる
    setEditingId(null);
  };

  return (
    <TouchableWithoutFeedback onPress={withoutEditing}>
      <View style={{ flex: 1, backgroundColor: colors.backgroundPrimary }}>
        <FolderSelectOrganismContainer />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FolderSettingScreen;
