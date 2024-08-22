import React from "react";
import { View, StyleSheet } from "react-native";

export const flashcardLabel = (color: string) => {
  return <View style={[styles.cardLabel, { backgroundColor: color }]} />;
};

const styles = StyleSheet.create({
  cardLabel: {
    position: "absolute",
    top: "0%",
    left: "3%",
    width: "5%",
    height: "22%",
    zIndex: 1,
  },
});
