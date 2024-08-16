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
  node?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ textContent, languageName, cardStyle, node }) => {
  
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
      {node}
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
