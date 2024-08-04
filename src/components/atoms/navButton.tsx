import React from 'react';
import { TouchableOpacity, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation'; // パラメータリストのインポート

// NavButtonコンポーネントの定義
const NavButton = ({
  imageSource,
  navigation
}: {
  imageSource: ImageSourcePropType;
  navigation: any;
}) => {

  return (
    // ボタンが押されたときに指定された画面にナビゲート
    <TouchableOpacity onPress={() => navigation.goBack()}>
      {/* アイコン画像を表示し、指定されたサイズに調整 */}
      <Image source={imageSource} />
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
