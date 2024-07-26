import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LanguageSwitch from '../molecules/languageSwitch';
import TranslateTextContainer from '../molecules/translateTextContainer';
import { colors } from '../../styles/colors';
import { dimensions } from '../../constants/dimensions';

// プロップの型を定義
type TranslationScreenContentProps = {
  handleTextPress: () => void;
};

const TranslationScreenContent: React.FC<TranslationScreenContentProps> = ({ handleTextPress }) => {
  // 言語の方向（英語から日本語、または日本語から英語）を追跡するためのステート
  const [isEnglishToJapanese, setIsEnglishToJapanese] = useState(true);

  // 言語の方向を切り替える関数
  const switchLanguage = () => {
    setIsEnglishToJapanese(!isEnglishToJapanese);
  };

  return (
    <View style={styles.container}>
      {/* 言語を切り替えるためのLanguageSwitchコンポーネント */}
      <LanguageSwitch isEnglishToJapanese={isEnglishToJapanese} switchLanguage={switchLanguage} />
      {/* テキスト翻訳を表示および処理するためのTextContainerコンポーネント */}
      <TranslateTextContainer handleTextPress={handleTextPress} />
    </View>
  );
};

// dimensionsから画面の幅を取得
const SCREEN_WIDTH = dimensions.SCREEN_WIDTH;

// コンポーネントのスタイルを定義
const styles = StyleSheet.create({
  container: {
    flex: 1, // コンテナが利用可能なスペース全体を占めるように設定
    padding: SCREEN_WIDTH * 0.05, // 画面幅の5%をパディングとして使用
    backgroundColor: colors.backgroundPrimary, // colorsモジュールから背景色を取得
  },
});

export default TranslationScreenContent;
