import React from 'react';
import { Button } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../styles/colors';
import { dimensions } from '../../constants/dimensions';

type LanguageButtonProps = {
  title: string; // ボタンのタイトル
  disabled?: boolean; // ボタンの無効状態
};

// 言語選択ボタンコンポーネント
const LanguageButton: React.FC<LanguageButtonProps> = ({ title, disabled = true }) => (
  <View style={styles.container}>
    <Button
      title={title} // ボタンに表示されるテキスト
      type="solid" // ボタンのスタイルタイプ
      buttonStyle={styles.languageButton} 
      disabled={disabled} // ボタンの無効状態
      disabledTitleStyle={styles.languageButtonTextDisabled} // 無効状態のボタンテキストスタイル
    />
  </View>
);

const SCREEN_WIDTH = dimensions.SCREEN_WIDTH; // 画面幅の定数
const SCREEN_HEIGHT = dimensions.SCREEN_HEIGHT; // 画面高さの定数

const styles = StyleSheet.create({
  // コンテナスタイル
  container: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  // 言語選択ボタンのスタイル
  languageButton: {
    width: SCREEN_WIDTH * 0.3, // ボタンの幅は画面幅の30%
    height: SCREEN_HEIGHT * 0.06, // ボタンの高さは画面高さの6%
    borderRadius: SCREEN_WIDTH * 0.04, 
  },
  // 無効状態のボタンテキストスタイル
  languageButtonTextDisabled: {
    color: colors.textPrimary,
  },
});

export default LanguageButton;
