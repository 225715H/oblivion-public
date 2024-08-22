import React from "react";
import { View, StyleSheet } from "react-native";
import Card from "../../components/atoms/card";
import { dimensions } from "../../constants/dimensions";

const CardPair = ({ frontText, frontLanguage, backText, backLanguage, isBackVisible }: any) => {
  return (
    <View style={styles.cardContainer}>
      <Card textContent={frontText} languageName={frontLanguage} cardStyle={styles.card} />
      <View style={styles.separator} />
      {isBackVisible && (
        <Card textContent={backText} languageName={backLanguage} cardStyle={styles.card} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "90%",
    alignItems: "center",
  },
  card: {
    width: "90%",
    height: dimensions.SCREEN_HEIGHT * 0.23,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3%",
    marginBottom: "2%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  separator: {
    width: "80%",
    height: 1,
    backgroundColor: "black",
    marginVertical: dimensions.SCREEN_HEIGHT * 0.025,
    alignSelf: "center",
  },
});

export default CardPair;
