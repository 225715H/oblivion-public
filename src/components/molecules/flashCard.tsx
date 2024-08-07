import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { dimensions } from "../../constants/dimensions";
import { colors } from "../../styles/colors";

interface FlashCardProps {
  text: string;
}

const FlashCard: React.FC<FlashCardProps> = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardText}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
  },
  card: {
    width: dimensions.SCREEN_WIDTH * 0.8,
    height: dimensions.SCREEN_HEIGHT * 0.15,
    backgroundColor: colors.backgroundPrimary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: dimensions.SCREEN_HEIGHT * 0.015,
  },
  cardText: {
    fontSize: dimensions.SCREEN_WIDTH * 0.06,
    color: colors.textPrimary,
  },
});

export default FlashCard;
