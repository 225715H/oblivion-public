import React, { Children } from "react";
import { View, Text, StyleSheet } from "react-native";
import { LoadImage } from "../../utils/loadImages";
import { TouchableIcon } from "../atoms/touchableIcon";
import { dimensions } from "../../constants/dimensions";
import { colors } from "../../styles/colors";
import { speakText } from "../../utils/speechUtils";

interface CardProps {
  textContent: string;
  languageName: string;
  cardStyle?: any;
  nodeLeft?: React.ReactNode;
  nodeRight?: React.ReactNode;
}

/**
 * カードのコンポーネント
 * @param textContent カードに表示するテキスト
 * @param languageName 言語名
 * @param cardStyle カードのスタイル(オプション)
 * @param nodeLeft you can pass a node to the left of the card
 * @param nodeRight you can pass a node to the right of the card
 */
const Card: React.FC<CardProps> = ({ textContent, languageName, cardStyle, nodeLeft, nodeRight }) => {
  
  return (
    <View style={cardStyle}>
      <Text style={styles.cardText}>{textContent}</Text>
      <View style={styles.soundContainer}>
        <TouchableIcon
          imageSource={LoadImage.soundIcon}
          onPress={() => speakText(textContent, languageName)}
          backgroundColor={"transparent"}
          padding={12}
        />
      </View>
      {nodeLeft}
      {nodeRight}
    </View>
  );
};

const styles = StyleSheet.create({
  cardText: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: dimensions.SCREEN_WIDTH * 0.06,
    color: colors.textPrimary,
  },
  soundContainer: {
    position: "absolute",
    right: "2%",
    bottom: "3%",
  },
});

export default Card;
