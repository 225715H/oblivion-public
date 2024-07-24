import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../styles/colors';
import { dimensions } from '../../constants/dimensions';

// スクリーンの幅と高さを取得
const SCREEN_WIDTH = dimensions.SCREEN_WIDTH;
const SCREEN_HEIGHT = dimensions.SCREEN_HEIGHT;

// スタイルの定義
export const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.backgroundPrimary, // SafeAreaViewの背景色を設定
  },
  header: {
    flexDirection: 'row', // 子要素を横方向に配置
    alignItems: 'center', // 子要素を縦方向の中央に揃える
    justifyContent: 'space-between', // 子要素の間にスペースを均等に配置
    backgroundColor: colors.backgroundPrimary, // ヘッダーの背景色を設定
    paddingHorizontal: SCREEN_WIDTH * 0.06, // ヘッダーの左右に画面幅の6%のパディングを追加
    height: SCREEN_HEIGHT * 0.07, // カスタムヘッダーの高さを画面高さの10%に設定
  },
  title: {
    fontSize: SCREEN_WIDTH * 0.05, // タイトルのフォントサイズを画面幅の5%に設定
    fontWeight: 'bold', // タイトルのフォントウェイトを太字に設定
    color: colors.textPrimary, // タイトルの色を設定
  },
});
