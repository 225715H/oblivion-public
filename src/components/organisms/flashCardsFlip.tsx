import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useFolders } from "../../context/folderContext";
import { Flashcard, useFlashcards } from "../../context/flashCardContext";
import FlipFlashcard from "../molecules/flashCard";
import { dimensions } from "../../constants/dimensions";
import { useFocusEffect } from "@react-navigation/native";

const FlashCardsFlip: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { checkedFolders } = useFolders();
  const { flashcards, fetchFlashcards } = useFlashcards();

  // チェックされたフォルダーに含まれるフラッシュカードを事前に取得
  useEffect(() => {
    fetchFlashcards(checkedFolders);
  }, [checkedFolders]);

  // フォーカスが当たった時にフラッシュカードを取得
  useFocusEffect(
    React.useCallback(() => {
      fetchFlashcards(checkedFolders);
    }, [checkedFolders])
  );

  useEffect(() => {
    // console.log("useEffect get flashcards", flashcards);
    // console.log("useEffect get checkedFolders", checkedFolders);
    // もし他の副作用や処理を行いたい場合は、このuseEffectに依存関係としてflashcardsを追加
  }, [checkedFolders]);

  const MemoizedFlashcard = React.memo(FlipFlashcard);

  return (
    <View style={styles.container}>
      <FlatList
        data={flashcards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MemoizedFlashcard item={item} navigation={navigation} />
        )}
        initialNumToRender={10} // 初回レンダリング時のアイテム数
        windowSize={10} // レンダリングするバッファのウィンドウサイズ
        ListFooterComponent={
          <View style={{ height: dimensions.SCREEN_HEIGHT * 0.1 }} />
        }
        style={{ width: "100%" }}
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
