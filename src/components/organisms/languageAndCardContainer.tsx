import React from "react";
import { View, StyleSheet } from "react-native";
import LanguageAndCard from "../molecules/languageAndCard";
import { dimensions } from "../../constants/dimensions";

interface LanguageAndCardContainerProps {
  sourceLanguageName: string;
  sourceText: string;
  targetLanguageName: string;
  targetText: string;
}

const LanguageAndCardContainer: React.FC<LanguageAndCardContainerProps> = ({
  sourceLanguageName,
  sourceText,
  targetLanguageName,
  targetText,
}) => {
  return (
    <View style={styles.cardContainer}>
      <LanguageAndCard
        languageName={sourceLanguageName}
        textContent={sourceText}
      />
      <View style={styles.separator} />
      <LanguageAndCard
        languageName={targetLanguageName}
        textContent={targetText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "90%",
    alignItems: "center",
  },
  separator: {
    width: "80%",
    height: 1,
    backgroundColor: "black",
    marginVertical: dimensions.SCREEN_HEIGHT * 0.025,
    alignSelf: "center",
  },
});

export default LanguageAndCardContainer;
