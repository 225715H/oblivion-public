import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LoadImage } from '../../utils/loadImages';
import { dimensions } from '../../constants/dimensions';

type SwapButtonProps = {
  onPress: () => void;
};

const SwapButton: React.FC<SwapButtonProps> = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Image source={LoadImage.swapIcon} style={styles.icon} />
  </TouchableOpacity>
);

const SCREEN_WIDTH = dimensions.SCREEN_WIDTH; // 画面幅の定数

const styles = StyleSheet.create({
  button: {
    padding: SCREEN_WIDTH * 0.02, // 画面幅の2%をパディングサイズとして設定
    // backgroundColor: 'black',
    marginHorizontal: SCREEN_WIDTH * 0.02, // 画面幅の2%を左右のマージンとして設定
  },
  icon: {
    width: SCREEN_WIDTH * 0.1,  // 画面幅の10%をアイコンの幅として設定
    height: SCREEN_WIDTH * 0.1, // 画面幅の10%をアイコンの高さとして設定
  },
});

export default SwapButton;
