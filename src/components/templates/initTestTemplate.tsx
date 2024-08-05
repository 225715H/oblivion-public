import React from "react";
import TestFolderSelectContainer from "../molecules/testFolderSelectContainer";
import { useFolderListContext } from "../../context/folderListContext";
import {
  View,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import { Dialog, CheckBox, ListItem, LinearProgress } from "@rneui/themed";
import { LoadImage } from "../../utils/loadImages";
import { colors } from "../../styles/colors";
import { dimensions } from "../../constants/dimensions";

const SCREEN_HEIGHT = dimensions.SCREEN_HEIGHT;
const SCREEN_WIDTH = dimensions.SCREEN_WIDTH;

const InitTestTemplate = () => {
  const { folders } = useFolderListContext();
  const [visible, setVisible] = React.useState(false);
  const [checked, setChecked] = React.useState(0);

  const toggleDialog = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      {/* フォルダ選択ボタン */}
      <TouchableOpacity
        onPress={toggleDialog}
        style={styles.selectFolderContainer}
      >
        <Image source={LoadImage.checkedFolderIcon} style={styles.folderIcon} />
        <Text style={styles.folderText}>{folders[checked].title}</Text>
      </TouchableOpacity>
      <View style={styles.confidenceContainer}>
        <View style={styles.confidenceCountContainer}>
          <Text style={styles.confidenceText}>Good</Text>
          <Text style={styles.goodCount}>0</Text>
        </View>
        <View style={styles.confidenceCountContainer}>
          <Text style={styles.confidenceText}>Again</Text>
          <Text style={styles.againCount}>0</Text>
        </View>
      </View>
      {/* LinearProgress を追加 */}
      <LinearProgress
        style={styles.progress}
        value={0.65}
        color={colors.iconColorSecondary}
      />
      {/* テスト開始ボタン */}
      <TouchableOpacity
        onPress={() => console.log("Start Test")}
        style={styles.testStartButton}
      >
        <Text style={styles.testStartText}>Study Now</Text>
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
          <Dialog.Button
            title="確認"
            onPress={() => {
              console.log(`Option ${checked} was selected!`);
              toggleDialog();
            }}
          />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: -20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.6,
    borderRadius: 30,
    borderBlockEndColor: colors.textSecondary,
    backgroundColor: colors.backgroundPrimary,
  },
  selectFolderContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.backgroundPrimary,
    borderRadius: 10,
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.1,
    marginVertical: 10,
    borderColor: colors.textSecondary,
    borderWidth: 1,
  },
  confidenceContainer: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: SCREEN_HEIGHT * 0.1,
    width: SCREEN_WIDTH * 0.8,
  },
  confidenceCountContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: SCREEN_WIDTH * 0.3,
    height: SCREEN_HEIGHT * 0.07,
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 10,
  },
  confidenceText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  goodCount: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  againCount: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.backgroundDenger,
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
  testStartButton: {
    backgroundColor: colors.backgroundPrimary,
    padding: 10,
    borderRadius: 50,
    width: SCREEN_WIDTH * 0.6,
    height: SCREEN_HEIGHT * 0.1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderColor: colors.textSecondary,
    borderWidth: 1,
  },
  testStartText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
});

export default InitTestTemplate;
