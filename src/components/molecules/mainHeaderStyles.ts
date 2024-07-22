import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../styles/colors';
import { dimensions } from '../../constants/dimensions';

// カスタムヘッダー高さの倍率
const CUSTOM_HEADER_HEIGHT_MULTIPLIER = 1.25;
// スクリーンの幅に基づく左右パディングの割合
const SCREEN_PADDING_HORIZONTAL_RATIO = 0.06;
// スクリーンの高さに基づく上部マージンの割合
const HEADER_MARGIN_TOP_RATIO = 0.05;
// スクリーンの幅に基づくフォントサイズの割合
const TITLE_FONT_SIZE_RATIO = 0.05;

// プラットフォームに基づくデフォルトのヘッダー高さ
const DEFAULT_HEADER_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
// カスタムヘッダー高さを計算
const CUSTOM_HEADER_HEIGHT = DEFAULT_HEADER_HEIGHT * CUSTOM_HEADER_HEIGHT_MULTIPLIER;

// スクリーンの幅と高さを取得
const SCREEN_WIDTH = dimensions.SCREEN_WIDTH;
const SCREEN_HEIGHT = dimensions.SCREEN_HEIGHT;

// スタイルの定義
export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row', // 子要素を横方向に配置
    alignItems: 'center', // 子要素を縦方向の中央に揃える
    justifyContent: 'space-between', // 子要素の間にスペースを均等に配置
    backgroundColor: colors.backgroundPrimary, // ヘッダーの背景色を設定
    paddingHorizontal: SCREEN_WIDTH * SCREEN_PADDING_HORIZONTAL_RATIO, // ヘッダーの左右に画面幅の割合に基づくパディングを追加
    marginTop: SCREEN_HEIGHT * HEADER_MARGIN_TOP_RATIO, // ヘッダーの上に画面高さの割合に基づくマージンを追加
    height: CUSTOM_HEADER_HEIGHT, // カスタムヘッダーの高さを設定
  },
  title: {
    fontSize: SCREEN_WIDTH * TITLE_FONT_SIZE_RATIO, // タイトルのフォントサイズを画面幅の割合に基づく割合に設定
    fontWeight: 'bold', // タイトルのフォントウェイトを太字に設定
    color: colors.textPrimary, // タイトルの色を設定
  },
});
