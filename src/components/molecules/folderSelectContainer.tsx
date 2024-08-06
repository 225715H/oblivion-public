import React, { useState, useEffect } from "react";
import { ListItem, CheckBox } from "@rneui/themed";
import { useFolderListContext } from "../../context/folderListContext";
import { LoadImage } from "../../utils/loadImages";
import { View, Image, StyleSheet, TextInput } from "react-native";
import { colors } from "../../styles/colors";
import { type FolderListItem } from "../../context/folderListContext";
import { dimensions } from "../../constants/dimensions";
import { TouchableIcon } from "../atoms/touchableIcon";
import { Folder, useFolders } from "../../context/folderContext";

const FolderSelectContainer: React.FC<Folder> = (
  folder: Folder,
) => {
  const [checked, setChecked] = useState(false);
  const { removeFolder, editingId, setEditingId, editFolder } = useFolders();
  const [currentTitle, setCurrentTitle] = useState(folder.name);

  const toggleChecked = (id: number) => {
    setChecked(!checked);
  };

  const handleEditPress = () => {
    setEditingId(folder.id);
  };

  return (
    <View style={styles.container}>
      <CheckBox
        checked={checked}
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
              editFolder(folder.id, currentTitle);
              setEditingId(null);
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
      />
      <TouchableIcon
        onPress={() => removeFolder(folder.id)}
        imageSource={LoadImage.deleteIcon}
        style={styles.deleteIcon}
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
