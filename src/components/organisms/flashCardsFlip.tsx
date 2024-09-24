import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ListRenderItemInfo,
  SectionList,
  Image,
} from "react-native";
import { Folder, useFolders } from "../../context/folderContext";
import { Flashcard, useFlashcards } from "../../context/flashCardContext";
import FlipFlashcard from "../molecules/flashCard";
import { dimensions } from "../../constants/dimensions";
import { useFocusEffect } from "@react-navigation/native";
import { color } from "@rneui/base";
import { colors } from "../../styles/colors";
import { LoadImage } from "../../utils/loadImages";

// セクションの型定義
interface FlashcardSection {
  title: string;
  data: Flashcard[];
}

const FlashCardsFlip: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { checkedFolders, folders } = useFolders();
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

  // フラッシュカードをフォルダ名でグループ化
  const groupedFlashcards: { [key: string]: Flashcard[] } = flashcards.reduce(
    (groups, flashcard) => {
      const folder: Folder | undefined = folders.find(
        (f) => f.id === flashcard.folder_id
      );
      const folderName: string = folder?.name || "その他";

      if (!groups[folderName]) {
        groups[folderName] = [];
      }

      groups[folderName].push(flashcard);
      return groups;
    },
    {} as { [key: string]: Flashcard[] } // 初期値に型アサーションを追加
  );

  // SectionList用のデータ形式に変換
  const sections: FlashcardSection[] = Object.keys(groupedFlashcards).map(
    (folderName) => ({
      title: folderName,
      data: groupedFlashcards[folderName],
    })
  );

  useEffect(() => {
    // console.log("useEffect get flashcards", flashcards);
    // console.log("useEffect get checkedFolders", checkedFolders);
    // もし他の副作用や処理を行いたい場合は、このuseEffectに依存関係としてflashcardsを追加
  }, [checkedFolders]);

  const MemoizedFlashcard = React.memo(FlipFlashcard);

  // セクションヘッダーのレンダリング関数
  const renderSectionHeader = ({ section }: { section: FlashcardSection }) => (
    <View style={styles.sectionHeader}>
      <Image source={LoadImage.checkedFolderIcon} style={styles.icon}/>
      <Text style={styles.sectionHeaderText}>{section.title}</Text>
    </View>
  );

  // フラッシュカードアイテムのレンダリング関数
  const renderItem = ({ item }: ListRenderItemInfo<Flashcard>) => (
    <MemoizedFlashcard item={item} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item: Flashcard) => item.id.toString()}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
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
  sectionHeader: {
    padding: 10,
    backgroundColor: colors.backgroundPrimary,
    width: "100%",
    flexDirection: "row",
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default FlashCardsFlip;
