import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import FolderSelectOrganismContainer from "../../components/organisms/folderSelectOrganismContainer";
import { useFolderListContext } from "../../context/folderListContext";
import { colors } from "../../styles/colors";

// ホームスクリーンコンポーネント
const FolderSettingScreen: React.FC = () => {
  const { setEditingId, updateTitle, editindId, currentTitle } =
    useFolderListContext();
  const withoutEditing = () => {
    if (editindId !== null) {
      updateTitle(editindId, currentTitle);
      console.log("withoutEditing: ", currentTitle);
    }
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
