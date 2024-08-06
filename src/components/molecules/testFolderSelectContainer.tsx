import React from "react";
import { ListItem, Button, CheckBox, Dialog } from "@rneui/themed";
import { useFolderListContext } from "../../context/folderListContext";
import { LoadImage } from "../../utils/loadImages";
import { TouchableOpacity, View, Image, StyleSheet, Text } from "react-native";
import { colors } from "../../styles/colors";
import { type FolderListItem } from "../../context/folderListContext";
import { dimensions } from "../../constants/dimensions";
import { TouchableIcon } from "../atoms/touchableIcon";

type FolderSelectItemProps = {
  folders: FolderListItem[];
};

const SCREEN_HEIGHT = dimensions.SCREEN_HEIGHT;
const SCREEN_WIDTH = dimensions.SCREEN_WIDTH;

const TestFolderSelectContainer: React.FC<FolderSelectItemProps> = ({
  folders,
}) => {
  const [visible, setVisible] = React.useState(false);
  const [checked, setChecked] = React.useState(0);
  const toggleDialog = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={toggleDialog}
        style={styles.selectFolderContainer}
      >
        <Image source={LoadImage.checkedFolderIcon} style={styles.folderIcon} />
        <Text style={styles.folderText}>{folders[checked].title}</Text>
      </TouchableOpacity>

      {/* ダイアログ */}
      <Dialog isVisible={visible} onBackdropPress={toggleDialog}>
        <Dialog.Title title="フォルダー選択" />
        {folders.map((l, i) => (
          <CheckBox
            checked={checked === i}
            key={i}
            title={l.title}
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
            onPress={() => setChecked(i)}
          />
        ))}
        <Dialog.Actions>
          <TouchableOpacity
            onPress={() => {
              console.log(`Option ${checked} was selected!`);
              toggleDialog();
            }}
            style={styles.confirmButton}
          >
            <Text style={styles.confirmText}>確認</Text>
          </TouchableOpacity>
        </Dialog.Actions>
      </Dialog>
    </View>
  );
};

const styles = StyleSheet.create({
  selectFolderContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.backgroundPrimary,
    borderRadius: 10,
    width: SCREEN_WIDTH * 0.7,
    height: SCREEN_HEIGHT * 0.08,
    marginVertical: 10,
    borderColor: colors.textSecondary,
    borderWidth: 1,
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
  folderIcon: {
    width: 40,
    height: 40,
    tintColor: colors.iconColorSecondary,
  },
  folderText: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  progress: {
    width: SCREEN_WIDTH * 0.7,
    marginVertical: 20,
  },
  confirmButton: {
    backgroundColor: colors.backgroundPrimary,
    padding: 10,
  },
  confirmText: {
    color: colors.iconColorSecondary,
    fontSize: 16,
  }
});

export default TestFolderSelectContainer;
