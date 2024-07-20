import React from 'react';
import { View, Text, StyleSheet, Platform, Dimensions } from 'react-native';
import NavButton from '../atoms/navButton';
import {
  DEFAULT_HEADER_HEIGHT,
  CUSTOM_HEADER_HEIGHT_MULTIPLIER,
  HEADER_MARGIN_TOP,
  SCREEN_PADDING_HORIZONTAL_RATIO,
  TITLE_FONT_SIZE_RATIO,
} from '../../constants/constants';

// カスタムヘッダー高さを計算
const CUSTOM_HEADER_HEIGHT = DEFAULT_HEADER_HEIGHT * CUSTOM_HEADER_HEIGHT_MULTIPLIER;

// スクリーンの幅を取得
const SCREEN_WIDTH = Dimensions.get('window').width;

// MainHeaderコンポーネントのプロパティの型定義
interface MainHeaderProps {
  title: string;
  leftButton?: React.ReactNode; // 左側のボタンコンポーネント
  rightButton?: React.ReactNode; // 右側のボタンコンポーネント
}

// MainHeaderコンポーネントの定義
const MainHeader: React.FC<MainHeaderProps> = ({ title, leftButton, rightButton }) => {
  return (
    <View style={[styles.header, { height: CUSTOM_HEADER_HEIGHT }]}>
      {leftButton ? leftButton : <NavButton screenName="Login" imageSource={require("../../../assets/logos/user.png")} iconSize={32} />}
      <Text style={styles.title}>{title}</Text>
      {rightButton ? rightButton : <NavButton screenName="Setting" imageSource={require("../../../assets/logos/setting.png")} iconSize={30} />}
    </View>
  );
};

// スタイルの定義
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row', // 子要素を横方向に配置
    alignItems: 'center', // 子要素を縦方向の中央に揃える
    justifyContent: 'space-between', // 子要素の間にスペースを均等に配置
    backgroundColor: '#fff', // ヘッダーの背景色を白に設定
    paddingHorizontal: SCREEN_WIDTH * SCREEN_PADDING_HORIZONTAL_RATIO, // ヘッダーの左右に画面幅の割合に基づくパディングを追加
    marginTop: HEADER_MARGIN_TOP, // ヘッダーの上に定数で定義したマージンを追加
  },
  title: {
    fontSize: SCREEN_WIDTH * TITLE_FONT_SIZE_RATIO, // タイトルのフォントサイズを画面幅の割合に基づく割合に設定
    fontWeight: 'bold', // タイトルのフォントウェイトを太字に設定
  },
});

export default MainHeader;
