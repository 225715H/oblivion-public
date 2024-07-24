import React from 'react';
import { View, StyleSheet } from 'react-native';
import LanguageButton from '../atoms/languageButton'; 
import SwapButton from '../atoms/swapButton'; 
import { dimensions } from '../../constants/dimensions';

type LanguageSwitchProps = {
  isEnglishToJapanese: boolean; // 英語から日本語への切り替えフラグ
  switchLanguage: () => void; // 言語切り替え関数
};

// 言語切り替えコンポーネント
const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ isEnglishToJapanese, switchLanguage }) => (
  <View style={styles.languageSwitchContainer}>
    {/* 英語または日本語の言語ボタンを表示 */}
    <LanguageButton title={isEnglishToJapanese ? '英語' : '日本語'} disabled />
    {/* 言語切り替えボタンを表示 */}
    <SwapButton onPress={switchLanguage} />
    {/* 日本語または英語の言語ボタンを表示 */}
    <LanguageButton title={isEnglishToJapanese ? '日本語' : '英語'} disabled />
  </View>
);

const SCREEN_HEIGHT = dimensions.SCREEN_HEIGHT; // 画面高さの定数

const styles = StyleSheet.create({
  // 言語切り替えコンテナのスタイル
  languageSwitchContainer: {
    flexDirection: 'row', // 横方向に配置
    justifyContent: 'space-around', // 子要素を均等に配置
    alignItems: 'center', // 子要素を中央に配置
    marginBottom: SCREEN_HEIGHT * 0.02, // 画面高さの2%分のマージンを追加
  },
});

export default LanguageSwitch; 
