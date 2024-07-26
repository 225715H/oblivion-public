import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { TouchableIcon } from "../atoms/touchableIcon";
import { colors } from "../../styles/colors";
import { dimensions } from "../../constants/dimensions";
import { LoadImage } from "../../utils/loadImages";
import BottomSheetComponent from "./settingBottomSheet";

// MainHeaderコンポーネントのプロパティの型定義
interface MainHeaderProps {
  title: string;
  leftButton?: React.ReactNode; // 左側のボタンコンポーネント
  rightButton?: React.ReactNode; // 右側のボタンコンポーネント
}

// MainHeaderコンポーネントの定義
export const CustomMainHeader: React.FC<MainHeaderProps> = ({
  title,
  leftButton,
  rightButton,
}) => {
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false); // ボトムシートの表示・非表示を管理するステート

  const handleSetting = () => {
    setBottomSheetVisible(true);
  };

  const handleChat = () => {};

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        {leftButton ? (
          leftButton
        ) : (
          <TouchableIcon
            onPress={handleSetting}
            imageSource={LoadImage.settingIcon}
            iconSize={32}
          />
        )}
        <Text style={styles.title}>{title}</Text>
        {rightButton ? (
          rightButton
        ) : (
          <TouchableIcon
            onPress={handleChat}
            imageSource={LoadImage.translateIcon}
            iconSize={30}
          />
        )}
      </View>
      <BottomSheetComponent 
      isVisible={isBottomSheetVisible}
      onClose={() => setBottomSheetVisible(false)}
      />
    </SafeAreaView>
  );
};

const SCREEN_WIDTH = dimensions.SCREEN_WIDTH;
const SCREEN_HEIGHT = dimensions.SCREEN_HEIGHT;

// スタイルの定義
const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.backgroundPrimary, // SafeAreaViewの背景色を設定
  },
  header: {
    flexDirection: "row", // 子要素を横方向に配置
    alignItems: "center", // 子要素を縦方向の中央に揃える
    justifyContent: "space-between", // 子要素の間にスペースを均等に配置
    backgroundColor: colors.backgroundPrimary, // ヘッダーの背景色を設定
    paddingHorizontal: SCREEN_WIDTH * 0.06, // ヘッダーの左右に画面幅の6%のパディングを追加
    height: SCREEN_HEIGHT * 0.07, // カスタムヘッダーの高さを画面高さの10%に設定
  },
  title: {
    fontSize: SCREEN_WIDTH * 0.05, // タイトルのフォントサイズを画面幅の5%に設定
    fontWeight: "bold", // タイトルのフォントウェイトを太字に設定
    color: colors.textPrimary, // タイトルの色を設定
  },
});
