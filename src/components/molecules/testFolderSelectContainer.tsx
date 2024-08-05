import React from "react";
import { ListItem, Button, CheckBox } from "@rneui/themed";
import { useFolderListContext } from "../../context/folderListContext";
import { LoadImage } from "../../utils/loadImages";
import { TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
import { type FolderListItem } from "../../context/folderListContext";
import { dimensions } from "../../constants/dimensions";
import { TouchableIcon } from "../atoms/touchableIcon";

type FolderSelectItemProps = FolderListItem;

const SCREEN_HEIGHT = dimensions.SCREEN_HEIGHT;
const SCREEN_WIDTH = dimensions.SCREEN_WIDTH;

const TestFolderSelectContainer: React.FC<FolderSelectItemProps> = ({
  id,
  title,
  checked,
}) => {
  const { toggleChecked, deleteItem } = useFolderListContext();

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
        onPress={() => toggleChecked(id)}
      />
      <ListItem.Content>
        <ListItem.Title>{title}</ListItem.Title>
      </ListItem.Content>
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

export default TestFolderSelectContainer;
