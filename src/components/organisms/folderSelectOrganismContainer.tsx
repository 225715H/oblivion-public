import { FolderSelectContainer } from "../molecules/folderSelectContainer";
import React from "react";
import { View, StyleSheet } from "react-native";
import { FolderNameList } from "../../test/folderTest";
import { dimensions } from "../../constants/dimensions";

export const FolderSelectOrganismContainer = () => {
  const list = FolderNameList;
  return (
      <View style={styles.container}>
        {list.map((name, id) => (
          <FolderSelectContainer key={id} folderName={name.folderName} />
        ))}
      </View>
  );
};

const SCREEN_WIDTH = dimensions.SCREEN_WIDTH;
const SCREEN_HEIGHT = dimensions.SCREEN_HEIGHT;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: SCREEN_HEIGHT * 0.03, // 一番上のアイテムを画面高さの3%に設定
  },
});
