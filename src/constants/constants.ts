import { Platform } from "react-native";


//定数が増えてきたら、ファイルを分けても良いかも
//ここまで、定数を外部ファイルに切り出すことを徹底する必要性は、あんまり分からない
//切り出す基準も決めにくいから全部切り出してもいいかも
//変更しやすい、見やすいのはメリット

// mainHeader.tsxの定数

// プラットフォームに基づくデフォルトのヘッダー高さ
export const DEFAULT_HEADER_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
// デフォルトのヘッダー高さの1.25倍を設定
export const CUSTOM_HEADER_HEIGHT_MULTIPLIER = 1.25;
// ヘッダーの上部マージン
export const HEADER_MARGIN_TOP = 50;
// スクリーンの幅に基づく左右パディングの割合
export const SCREEN_PADDING_HORIZONTAL_RATIO = 0.06;
// スクリーンの幅に基づくフォントサイズの割合
export const TITLE_FONT_SIZE_RATIO = 0.05;

// bottomTabNavigator.tsxの定数

// プラットフォームに基づくデフォルトのタブバー高さ
export const DEFAULT_TABBAR_HEIGHT = Platform.OS === 'ios' ? 49 : 56;
// タブバーの高さの倍率
export const CUSTOM_TABBAR_HEIGHT_MULTIPLIER = 1.8;
// アイコンのサイズの倍率
export const ICON_SIZE_MULTIPLIER = 1.5;
// タブバーのアクティブなアイコンの色
export const TABBAR_ACTIVE_TINT_COLOR = '#007AFF';
// タブバーの非アクティブなアイコンの色
export const TABBAR_INACTIVE_TINT_COLOR = 'black';
