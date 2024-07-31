import React from "react";
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";

interface TouchableIconProps {
  imageSource: ImageSourcePropType; // アイコン画像のソース
  onPress: () => void; // タップ時の処理
  iconSize?: number; // アイコンのサイズ（オプション、デフォルトは24）
  tintColor?: string; // アイコンの色（オプション、デフォルトは黒）
  backgroundColor?: string; // 背景色（オプション、デフォルトは白）
}

export const TouchableIcon: React.FC<TouchableIconProps> = ({
  imageSource,
  iconSize = 24,
  tintColor = "#000",
  backgroundColor = "#fff",
  onPress,
}) => {
  return (
    // ボタンが押されたときに指定された画面にナビゲート
    <TouchableOpacity
      onPress={onPress}
      style={[styles.iconContainer, { backgroundColor, borderRadius: iconSize }]}
    >
      {/* アイコン画像を表示し、指定されたサイズに調整 */}
      <Image
        source={imageSource}
        style={[styles.icon, { width: iconSize, height: iconSize, tintColor }]}
      />
    </TouchableOpacity>
  );
};

// スタイルの定義
const styles = StyleSheet.create({
  iconContainer: {
    // デフォルトのアイコンコンテナスタイル（必要に応じて変更可能）
    padding: 12, //
  },
  icon: {
    // デフォルトのアイコンスタイル（必要に応じて変更可能）
    resizeMode: "contain", // 画像を表示領域に合わせてリサイズ
  },
});
