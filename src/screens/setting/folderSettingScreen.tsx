import { View, Text } from "react-native";
import React from "react";
import { FolderSelectOrganismContainer } from "../../components/organisms/folderSelectOrganismContainer";

// ホームスクリーンコンポーネント
export default function FolderSettingScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <FolderSelectOrganismContainer />
    </View>
  );
}
