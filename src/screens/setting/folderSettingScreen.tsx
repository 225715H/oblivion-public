import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import React from "react";
import FolderSelectOrganismContainer from "../../components/organisms/folderSelectOrganismContainer";
import { colors } from "../../styles/colors";

// ホームスクリーンコンポーネント
const FolderSettingScreen: React.FC = () => {
  const withoutEditing = () => {
    Keyboard.dismiss(); // キーボードを閉じる
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
