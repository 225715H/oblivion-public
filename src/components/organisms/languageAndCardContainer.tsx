import React from "react";
import { View, StyleSheet } from "react-native";
import { Divider } from "@rneui/themed";
import LanguageAndCard from "../molecules/languageAndCard";
import { dimensions } from "../../constants/dimensions";
import * as Speech from "expo-speech";
import { TouchableIcon } from "../atoms/touchableIcon";
import { LoadImage } from "../../utils/loadImages";

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
  const speekText = (text: string, lan: string) => {
    if (lan === "日本語") {
      lan = "ja";
    } else if (lan === "英語") {
      lan = "en";
    }
    console.log("speaking", text, lan);
    Speech.speak(text, {
      language: lan,
    })
  };

  return (
    <View style={styles.cardContainer}>
      <LanguageAndCard
        languageName={sourceLanguageName}
        textContent={sourceText}
      />
      <TouchableIcon
        imageSource={LoadImage.translateIcon}
        onPress={() => speekText(sourceText, sourceLanguageName)}
      />
      <View style={styles.separator} />
      <LanguageAndCard
        languageName={targetLanguageName}
        textContent={targetText}
      />
      <TouchableIcon
        imageSource={LoadImage.translateIcon}
        onPress={() => speekText(targetText, targetLanguageName)}
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
