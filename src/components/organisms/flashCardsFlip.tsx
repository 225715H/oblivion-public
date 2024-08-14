import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useFolders } from "../../context/folderContext";
import { useFlashcards } from "../../context/flashCardContext";
import Flashcard from "../molecules/flashCard";
import { dimensions } from "../../constants/dimensions";
import { colors } from "../../styles/colors";

const FlashCardsFlip = () => {
  const { folders } = useFolders();
  const { flashcards, fetchFlashcards } = useFlashcards();
  const [checkedFolders, setCheckedFolders] = useState<number[]>([]);
  const [selectItems, setSelectItems] = useState<number[]>([]);
  const [isSelect, setIsSelect] = useState(false);

  useEffect(() => {
    const checkedFolderIds = folders
      .filter((folder) => folder.checked === 1)
      .map((folder) => folder.id);
    console.log("useEffect get folderIds",checkedFolderIds);
    setCheckedFolders(checkedFolderIds);
  }, [folders]);

  useEffect(() => {
    fetchFlashcards(checkedFolders);
  }, [checkedFolders]);

  useEffect(() => {
    // もし他の副作用や処理を行いたい場合は、このuseEffectに依存関係としてflashcardsを追加
  }, [flashcards]);

  return (
    <View style={styles.container}>
      <FlatList
        data={flashcards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Flashcard item={item} isSelect={true}/>}
        initialNumToRender={10} // 初回レンダリング時のアイテム数
        windowSize={10} // レンダリングするバッファのウィンドウサイズ
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  card: {
    width: dimensions.SCREEN_WIDTH * 0.8,
    height: dimensions.SCREEN_HEIGHT * 0.15,
    backgroundColor: colors.backgroundPrimary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: dimensions.SCREEN_HEIGHT * 0.015,
  },
});

export default FlashCardsFlip;
