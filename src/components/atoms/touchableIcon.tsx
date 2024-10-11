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
  style?: any; // スタイルの追加（オプション）
  backgroundColor?: string; // 背景色（オプション、デフォルトは白）
  padding?: number; // padding（オプション、デフォルトは12）
}

/**
 * タッチ可能なアイコンコンポーネント
 * @param imageSource 画像のソース(loadImagesをimportして使用)
 * @param onPress タップ時の処理
 * @param iconSize アイコンのサイズ（オプション、デフォルトは24）
 * @param tintColor アイコンの色（オプション、デフォルトは黒）
 * @param style スタイルの追加（オプション）
 * @param backgroundColor 背景色（オプション、デフォルトは白）
 * @param padding padding（オプション、デフォルトは12）
 */
export const TouchableIcon: React.FC<TouchableIconProps> = ({
  imageSource,
  iconSize = 24,
  tintColor = "#000",
  style,
  backgroundColor = "#fff",
  padding = 0, 
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.iconContainer, 
        { backgroundColor, borderRadius: iconSize, padding }
      ]}
    >
      <Image
        source={imageSource}
        style={[
          styles.icon, 
          { width: iconSize, height: iconSize, tintColor }, 
          style
        ]}
      />
    </TouchableOpacity>
  );
};

// スタイルの定義
const styles = StyleSheet.create({
  iconContainer: {
    // デフォルトのアイコンコンテナスタイル（必要に応じて変更可能）
  },
  icon: {
    // デフォルトのアイコンスタイル（必要に応じて変更可能）
    resizeMode: "contain", // 画像を表示領域に合わせてリサイズ
  },
});
