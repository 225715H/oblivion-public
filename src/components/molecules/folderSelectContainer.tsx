import React, { useState } from "react";
import { View, Image, StyleSheet, TextInput, Alert } from "react-native";
import { CheckBox } from "@rneui/themed";
import { useFolders, Folder } from "../../context/folderContext";
import { LoadImage } from "../../utils/loadImages";
import { ListItem } from "@rneui/themed";
import { TouchableIcon } from "../atoms/touchableIcon";
import { colors } from "../../styles/colors";

const FolderSelectContainer: React.FC<Folder> = (folder: Folder) => {
  const { removeFolder, editFolder } = useFolders();
  const [currentTitle, setCurrentTitle] = useState(folder.name);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [originalTitle, setOriginalTitle] = useState(folder.name); // 元のタイトルを保存

  const handleEditPress = () => {
    setOriginalTitle(currentTitle); // 編集開始時に元のタイトルを保存
    setEditingId(folder.id);
  };

  const toggleChecked = (id: number) => {
    editFolder(id, currentTitle, folder.checked === 1 ? 0 : 1);
  };

  const handleDeletePress = (id: number) => {
    Alert.alert(
      "Delete Folder",
      `Are you sure you want to delete ${folder.name}?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "OK", onPress: () => removeFolder(id) },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <CheckBox
        checked={folder.checked === 1}
        checkedIcon={
          <Image
            source={LoadImage.uncheckedFolderIcon}
            style={styles.checkedIcon}
          />
        }
        uncheckedIcon={
          <Image
            source={LoadImage.checkedFolderIcon}
            style={styles.uncheckedIcon}
          />
        }
        onPress={() => toggleChecked(folder.id)}
      />
      <ListItem.Content>
        {editingId === folder.id ? (
          <TextInput
            style={styles.textInput}
            value={currentTitle}
            onChangeText={setCurrentTitle}
            autoFocus
            onSubmitEditing={() => {
              editFolder(folder.id, currentTitle, folder.checked);
              setEditingId(null);
            }}
            onBlur={() => {
              if (editingId === folder.id) {
                setCurrentTitle(originalTitle); // 編集キャンセル時に元のタイトルに戻す
                setEditingId(null);
              }
            }}
          />
        ) : (
          <ListItem.Title>{folder.name}</ListItem.Title>
        )}
      </ListItem.Content>
      <TouchableIcon
        onPress={handleEditPress}
        imageSource={LoadImage.editIcon}
        style={styles.checkedIcon}
        padding={8}
      />
      <TouchableIcon
        onPress={() => handleDeletePress(folder.id)}
        imageSource={LoadImage.deleteIcon}
        style={styles.deleteIcon}
        padding={8}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: colors.backgroundPrimary,
  },
  textInput: {
    borderWidth: 1,
    borderColor: colors.textSecondary,
    padding: 10,
    borderRadius: 5,
  },
  deleteIcon: {
    width: 24,
    height: 24,
    tintColor: colors.backgroundDenger,
  },
  checkedIcon: {
    width: 24,
    height: 24,
    tintColor: colors.iconColorSecondary,
  },
  uncheckedIcon: {
    width: 24,
    height: 24,
    tintColor: colors.textSecondary,
  },
});

export default FolderSelectContainer;
