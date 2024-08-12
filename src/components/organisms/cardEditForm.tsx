import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import CardEditInputGroup from "../molecules/cardEditInputGroup";
import { colors } from "../../styles/colors";
import TestFolderSelectContainer from "../molecules/testFolderSelectContainer";
import { useFolders } from "../../context/folderContext";
import FolderModals from "./translateFolderModals";
import { dimensions } from "../../constants/dimensions";
import { useFlashcards } from "../../context/flashCardContext";

const CardEditForm: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { folders, addFolder } = useFolders();
  const { addFlashcard } = useFlashcards();
  const [checked, setChecked] = React.useState(0);
  const [visible, setVisible] = React.useState(false);
  const [front, setFront] = React.useState("");
  const [back, setBack] = React.useState("");
  const [isFolderModalVisible, setFolderModalVisible] = React.useState(false);

  const createFolder = () => {
    setFolderModalVisible(!isFolderModalVisible);
  };

  const handleAddFlashcard = () => {
    if (folders.length > 0) {
      console.log(folders[checked], front, back);
      addFlashcard(folders[checked].id, front, back);
      navigation.goBack();
    } else {
      alert("フォルダーがありません。まずフォルダーを作成してください。");
    }
  };
  return (
    <View style={styles.container}>
      <CardEditInputGroup
        placeholder="Enter the front of the card"
        language="英語"
        onChangeText={setFront}
      />
      <CardEditInputGroup
        placeholder="Enter the back of the card"
        language="日本語"
        onChangeText={setBack}
      />
      {folders.length > 0 ? (
        <TestFolderSelectContainer
          checked={checked} // フォルダーのインデックスを渡す
          setChecked={setChecked} // 状態を更新する関数をそのまま渡す
          onPress={createFolder}
          onPressText="作成"
        />
      ) : (
        <View style={styles.createFolderContainer}>
          <Text>フォルダがひとつもありません。</Text>
          <TouchableOpacity onPress={createFolder} style={styles.createFolder}>
            <Text>Create Folder</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity onPress={handleAddFlashcard} style={styles.backButton}>
        <Text style={styles.backText}>完了</Text>
      </TouchableOpacity>
      <FolderModals
        isModalVisible={visible}
        setModalVisible={setVisible}
        folders={folders}
        addFolder={addFolder}
        navigation={navigation}
        isFolderModalVisible={isFolderModalVisible}
        setFolderModalVisible={setFolderModalVisible}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    top: "5%",
  },
  createFolderContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  createFolder: {
    backgroundColor: colors.backgroundPrimary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 1,
  },
  backButton: {
    backgroundColor: colors.backgroundTertiary,
    padding: 10,
    borderRadius: 10,

    marginTop: dimensions.SCREEN_HEIGHT * 0.05,
  },
  backText: {
    color: colors.iconColorTertiary,
    fontSize: dimensions.SCREEN_WIDTH * 0.05,
    fontWeight: "bold",
  },
});

export default CardEditForm;
