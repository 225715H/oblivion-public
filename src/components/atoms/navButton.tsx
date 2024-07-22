import React from 'react';
import { TouchableOpacity, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation'; // パラメータリストのインポート

interface NavButtonProps {
  screenName: keyof RootStackParamList; // ナビゲーション先の画面名
  imageSource: ImageSourcePropType; // アイコン画像のソース
  iconSize?: number; // アイコンのサイズ（オプション、デフォルトは24）
  tintColor?: string; // アイコンの色（オプション、デフォルトは黒）
}

// NavButtonコンポーネントの定義
const NavButton: React.FC<NavButtonProps> = ({
  screenName,
  imageSource,
  iconSize = 24,
  tintColor = '#000',
}) => {
  // ナビゲーションフックに型を設定
  // 型の設定により、navigation.navigate(screenName) の使用時に型チェックが行われ、
  // RootStackParamList に含まれるキーであることが保証されます。
  // これにより、誤った画面名やパラメータを渡した場合にコンパイル時にエラーが発生し、バグを未然に防ぐことができます。
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    // ボタンが押されたときに指定された画面にナビゲート
    <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
      {/* アイコン画像を表示し、指定されたサイズに調整 */}
      <Image source={imageSource} style={[styles.icon, { width: iconSize, height: iconSize, tintColor }]} />
    </TouchableOpacity>
  );
};

// スタイルの定義
const styles = StyleSheet.create({
  icon: {
    // デフォルトのアイコンスタイル（必要に応じて変更可能）
    resizeMode: 'contain', // 画像を表示領域に合わせてリサイズ
    borderRadius: 12, // 角を丸くする（アイコンサイズに依存する場合は適宜調整）
  },
});

export default NavButton;
