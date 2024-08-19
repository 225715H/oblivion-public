import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import RecommendFlashcard from "../molecules/recommedFlashcard";
import { dimensions } from "../../constants/dimensions";
import { useRecommendFlashcards } from "../../context/recommendFlashcardContext";

const RecommendFlashCardsFlip: React.FC = () => {
  const { recommendcards } = useRecommendFlashcards();
  return (
    <View style={styles.container}>
      <FlatList
        data={recommendcards}
        renderItem={({ item }) => <RecommendFlashcard item={item} />}
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

export default RecommendFlashCardsFlip;
