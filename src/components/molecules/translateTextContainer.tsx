import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { dimensions } from '../../constants/dimensions';
import { colors } from '../../styles/colors';

type TranslateTextInputProps = {
  handleTextPress: () => void; // テキストが押された時のハンドラ関数
};

const TranslateTextInput: React.FC<TranslateTextInputProps> = ({ handleTextPress }) => (
  <TouchableWithoutFeedback onPress={handleTextPress}>
    <View style={styles.translateTextInput}>
      <Text style={styles.text}>テキストを入力</Text>
    </View>
  </TouchableWithoutFeedback>
);

// スクリーンの幅を取得
const SCREEN_WIDTH = dimensions.SCREEN_WIDTH;

const styles = StyleSheet.create({
  translateTextInput: {
    flex: 1, // コンポーネントが可能な限りのスペースを使用
    width: '100%', // コンポーネントの幅をスクリーンの幅に設定
    justifyContent: 'flex-start', // 上端寄せ
    alignItems: 'flex-start', // 左端寄せ
    padding: SCREEN_WIDTH * 0.05, // スクリーン幅の5%をパディングとして設定
  },
  text: {
    fontSize: SCREEN_WIDTH * 0.06, // テキストサイズをスクリーン幅の6%に設定
    color: colors.textSecondary, // テキストの色を設定
    textAlign: 'center', // テキストを中央揃え
    textAlignVertical: 'top', // テキストを上端揃え
  },
});

export default TranslateTextInput; 
