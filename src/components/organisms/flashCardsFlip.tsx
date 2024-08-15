import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useFolders } from "../../context/folderContext";
import { useFlashcards } from "../../context/flashCardContext";
import Flashcard from "../molecules/flashCard";
import { dimensions } from "../../constants/dimensions";
import { colors } from "../../styles/colors";

const FlashCardsFlip: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { folders } = useFolders();
  const { flashcards, fetchFlashcards } = useFlashcards();
  const [checkedFolders, setCheckedFolders] = useState<number[]>([]);

  useEffect(() => {
    const checkedFolderIds = folders
      .filter((folder) => folder.checked === 1)
      .map((folder) => folder.id);
    console.log("useEffect get folderIds", checkedFolderIds);
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
        renderItem={({ item }) => <Flashcard item={item} navigation={navigation} />}
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
});

export default FlashCardsFlip;
