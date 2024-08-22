import React, { useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Alert } from "react-native";
import CardEditInputGroup from "../molecules/cardEditInputGroup";
import { colors } from "../../styles/colors";
import TestFolderSelectContainer from "../molecules/testFolderSelectContainer";
import { useFolders } from "../../context/folderContext";
import FolderModals from "./translateFolderModals";
import { dimensions } from "../../constants/dimensions";
import { useFlashcards } from "../../context/flashCardContext";
import { useCardEdit } from "../../context/cardEditContext";
import { useFocusEffect } from "@react-navigation/native";

const CardEditForm: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { folders, addFolder } = useFolders();
  const { addFlashcard, flashcards, editFlashcard } = useFlashcards();
  const [checked, setChecked] = React.useState(0);
  const [visible, setVisible] = React.useState(false);
  const [front, setFront] = React.useState("");
  const [back, setBack] = React.useState("");
  const [isFolderModalVisible, setFolderModalVisible] = React.useState(false);

  const { cardEdit, setCardEdit } = useCardEdit();

  useEffect(() => {
    console.log("CardEditForm useEffect", cardEdit);
    if (cardEdit !== null) {
      setFront(cardEdit.English);
      setBack(cardEdit.Japanese);
      setChecked(
        folders.findIndex((folder) => folder.id === cardEdit.folder_id)
      );
    }
  }, [cardEdit]);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setCardEdit(null);
      };
    }, [])
  );

  const createFolder = () => {
    setFolderModalVisible(!isFolderModalVisible);
  };

  const handleAddFlashcard = () => {
    if (front === "" || back === "") {
      Alert.alert("エラー", "カードの表と裏のテキストを入力してください。");
      return;
    }
    if (folders.length > 0) {
      console.log("card form info:", cardEdit);
      if (cardEdit !== null) {
        console.log("edit card :", folders[checked], front, back);
        editFlashcard(cardEdit.id, front, back, folders[checked].id);
      } else {
        console.log("create card :", folders[checked], front, back);
        addFlashcard(folders[checked].id, front, back);
      }
      setCardEdit(null);
      navigation.goBack();
    } else {
      Alert.alert(
        "エラー",
        "フォルダーがありません。まずフォルダーを作成してください。"
      );
      return;
    }
  };

  return (
    <View style={styles.container}>
      <CardEditInputGroup
        placeholder="テキストを入力"
        value={front}
        language="英語"
        onChangeText={setFront}
      />
      <CardEditInputGroup
        placeholder="テキストを入力"
        value={back}
        language="日本語"
        onChangeText={setBack}
      />
      {folders.length > 0 ? (
        <TestFolderSelectContainer
          checked={checked}
          setChecked={setChecked}
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
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: dimensions.SCREEN_HEIGHT * 0.05,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  backText: {
    color: colors.iconColorTertiary,
    fontSize: dimensions.SCREEN_WIDTH * 0.05,
    fontWeight: "bold",
  },
});

export default CardEditForm;
