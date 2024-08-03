import React from "react";
import { ListItem, Button, CheckBox } from "@rneui/themed";
import { useFolderListContext } from "../../context/folderListContext";
import { LoadImage } from "../../utils/loadImages";
import { TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
import { type FolderListItem } from "../../context/folderListContext";
import { dimensions } from "../../constants/dimensions";

type FolderSelectItemProps = FolderListItem;

const SCREEN_HEIGHT = dimensions.SCREEN_HEIGHT;
const SCREEN_WIDTH = dimensions.SCREEN_WIDTH;

const FolderSelectContainer: React.FC<FolderSelectItemProps> = ({
  id,
  title,
  checked,
}) => {
  const { toggleChecked, deleteItem } = useFolderListContext();

  return (
    <ListItem.Swipeable
      bottomDivider
      animation={{ type: "spring", duration: 300 }}
      rightWidth={SCREEN_WIDTH / 4}
      rightContent={
        <TouchableOpacity
          style={styles.rightContent}
          onPress={() => deleteItem(id)}
        >
          <Image source={LoadImage.deleteIcon} style={styles.deleteIcon} />
        </TouchableOpacity>
      }
    >
      <TouchableOpacity
        onPress={() => console.log("navigate edit")}
        style={styles.contentContainer}
      >
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
        <ListItem.Chevron />
      </TouchableOpacity>
    </ListItem.Swipeable>
  );
};

const styles = StyleSheet.create({
  rightContent: {
    justifyContent: "center",
    backgroundColor: colors.backgroundDenger,
    flex: 1,
    alignItems: "center",
  },
  deleteIcon: {
    width: 24,
    height: 24,
    tintColor: colors.iconColorTertiary,
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
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default FolderSelectContainer;
