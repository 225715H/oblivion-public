import React from "react";
import TestFolderSelectContainer from "../molecules/testFolderSelectContainer";
import {
  View,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import { CheckBox, ListItem, LinearProgress } from "@rneui/themed";
import { LoadImage } from "../../utils/loadImages";
import { colors } from "../../styles/colors";
import { dimensions } from "../../constants/dimensions";
import { useFolders } from "../../context/folderContext";

const SCREEN_HEIGHT = dimensions.SCREEN_HEIGHT;
const SCREEN_WIDTH = dimensions.SCREEN_WIDTH;

const InitTestTemplate = ( { navigation } : { navigation: any }) => {
  const { folders } = useFolders();
  const [checked, setChecked] = React.useState(0);

  return (
    <View style={styles.container}>
      {folders.length > 0 ? (
        <>
          {/* フォルダ選択ボタン */}
          <TestFolderSelectContainer
            checked={checked}
            setChecked={setChecked}
          />
          {/* 自信度 */}
          <LinearProgress
            style={styles.progress}
            value={0.65}
            color={colors.iconColorSecondary}
          />
          {/* テスト開始ボタン */}
          <TouchableOpacity
            onPress={() => navigation.navigate("TestStudy")}
            style={styles.testStartButton}
          >
            <Text style={styles.testStartText}>Study Now</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text style={styles.noFolderText}>フォルダがひとつもありません。</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: SCREEN_WIDTH,
    borderBlockEndColor: colors.textSecondary,
    backgroundColor: colors.backgroundPrimary,
  },
  noFolderText: {
    fontSize: 18,
    color: colors.textPrimary,
    textAlign: "center",
    marginVertical: 20,
  },
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
    height: SCREEN_HEIGHT * 0.07,
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
