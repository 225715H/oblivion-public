import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { dimensions } from '../../constants/dimensions';
import { colors } from '../../styles/colors';

type TextContainerProps = {
  handleTextPress: () => void;
};

const TextContainer: React.FC<TextContainerProps> = ({ handleTextPress }) => (
  <TouchableWithoutFeedback onPress={handleTextPress}>
    <View style={styles.textContainer}>
      <Text style={styles.text}>テキストを入力</Text>
    </View>
  </TouchableWithoutFeedback>
);

const SCREEN_WIDTH = dimensions.SCREEN_WIDTH;

const styles = StyleSheet.create({
  textContainer: {
    flex: 1, // コンテナが親ビュー全体を占める.
    width: '100%', // コンテナの幅を親ビューの幅に合わせる.
    justifyContent: 'flex-start', // コンテナ内の子要素を縦方向の先頭に揃える.
    alignItems: 'flex-start', // コンテナ内の子要素を横方向の先頭に揃える.
    padding: SCREEN_WIDTH * 0.05, // コンテナにスクリーン幅の5%のパディングを適用する.
  },
  text: {
    fontSize: SCREEN_WIDTH * 0.06, // フォントサイズをスクリーン幅の6%に設定する.
    color: colors.textSecondary, // テキストの色をテーマの二次テキストカラーに設定する.
    textAlign: 'center', // テキストを中央に揃える.
    textAlignVertical: 'top', // テキストを垂直方向の上部に揃える.
  },
});

export default TextContainer;
