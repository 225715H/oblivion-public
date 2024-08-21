import React from "react";
import { CheckBox, Dialog } from "@rneui/themed";
import { LoadImage } from "../../utils/loadImages";
import { TouchableOpacity, View, Image, StyleSheet, Text } from "react-native";
import { colors } from "../../styles/colors";
import { dimensions } from "../../constants/dimensions";
import { useFolders, type Folder } from "../../context/folderContext";

const SCREEN_HEIGHT = dimensions.SCREEN_HEIGHT;
const SCREEN_WIDTH = dimensions.SCREEN_WIDTH;

type SelectFolder = {
  onPress?: () => void;
  onPressText?: string;
  checked: number;
  setChecked: (checked: number) => void;
};

const TestFolderSelectContainer: React.FC<SelectFolder> = ({
  onPress,
  onPressText,
  checked,
  setChecked,
}) => {
  const { folders } = useFolders();
  const [visible, setVisible] = React.useState(false);
  const [tempChecked, setTempChecked] = React.useState(checked);

  const toggleDialog = () => {
    setVisible(!visible);
    if (!visible) {
      setTempChecked(checked);
    }
  };

  const handleConfirm = () => {
    setChecked(tempChecked);
    toggleDialog();
  };

  return (
    <View>
      <TouchableOpacity
        onPress={toggleDialog}
        style={styles.selectFolderContainer}
      >
        <Image source={LoadImage.checkedFolderIcon} style={styles.folderIcon} />
        <Text style={styles.folderText}>{folders[checked]?.name}</Text>
      </TouchableOpacity>

      <Dialog isVisible={visible} onBackdropPress={toggleDialog}>
        <Dialog.Title title="フォルダー選択" />
        {folders.map((l, i) => (
          <CheckBox
            checked={tempChecked === i}
            key={i}
            title={l.name}
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
            onPress={() => setTempChecked(i)}
          />
        ))}
        <Dialog.Actions>
          <View style={styles.buttonGroup}>
            {onPressText && onPress ? (
              <TouchableOpacity
                onPress={() => {
                  handleConfirm();
                  onPress();
                }}
                style={styles.onPressButton}
              >
                <Text style={styles.onPressText}>{onPressText}</Text>
              </TouchableOpacity>
            ) : (
              <View />
            )}
            <TouchableOpacity onPress={handleConfirm} style={styles.confirmButton}>
              <Text style={styles.confirmText}>確認</Text>
            </TouchableOpacity>
          </View>
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
    width: SCREEN_WIDTH * 0.75,
    height: SCREEN_HEIGHT * 0.07,
    marginVertical: 10,
    borderColor: colors.textSecondary,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
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
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  confirmButton: {
    backgroundColor: colors.backgroundPrimary,
    padding: 10,
  },
  confirmText: {
    color: colors.backgroundTertiary,
    fontSize: 16,
  },
  onPressButton: {
    backgroundColor: colors.backgroundPrimary,
    padding: 10,
  },
  onPressText: {
    color: colors.backgroundTertiary,
    fontSize: 16,
  },
});

export default TestFolderSelectContainer;
