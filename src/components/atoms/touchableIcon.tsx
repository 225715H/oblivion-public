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
}

export const TouchableIcon: React.FC<TouchableIconProps> = ({
  imageSource,
  onPress,
  iconSize = 24,
  tintColor = "#000",
}) => {
  return (
    // ボタンが押されたときに指定された画面にナビゲート
    <TouchableOpacity onPress={onPress}>
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
  icon: {
    // デフォルトのアイコンスタイル（必要に応じて変更可能）
    resizeMode: "contain", // 画像を表示領域に合わせてリサイズ
    borderRadius: 12, // 角を丸くする（アイコンサイズに依存する場合は適宜調整）
  },
});
