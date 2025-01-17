import React from "react";
import {
  TouchableOpacity,
  Animated,
  StyleSheet,
  View,
  Alert,
} from "react-native";
import Card from "../atoms/card";
import { useFlipAnimation } from "../../hooks/useFlipAnimation";
import { dimensions } from "../../constants/dimensions";
import { colors } from "../../styles/colors";
import { TouchableIcon } from "../atoms/touchableIcon";
import { LoadImage } from "../../utils/loadImages";
import * as Clipboard from "expo-clipboard";

const copyButton = (textToCopy: string) => {
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(textToCopy);
  };

  return (
    <View style={styles.copyButtonStyle}>
      <TouchableIcon
        imageSource={LoadImage.copyIcon}
        onPress={copyToClipboard}
        backgroundColor="transparent"
        padding={8}
      />
    </View>
  );
};

/**
 * おすすめのフラッシュカードを表示するコンポーネント
 * @param item おすすめのフラッシュカード
 */
const RecommendFlashcard = ({ item }: { item: any }) => {
  const { flipCard, frontAnimatedStyle, backAnimatedStyle, flipped } =
    useFlipAnimation();

  return (
    <TouchableOpacity onPress={flipCard}>
      <Animated.View style={flipped ? backAnimatedStyle : frontAnimatedStyle}>
        <View style={styles.cardContainer}>
          <Card
            textContent={flipped ? item.Japanese : item.English}
            languageName={flipped ? "日本語" : "en"}
            cardStyle={styles.card}
            nodeLeft={copyButton(flipped ? item.Japanese : item.English)}
          />
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: dimensions.SCREEN_WIDTH * 0.8,
    height: dimensions.SCREEN_HEIGHT * 0.15,
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: dimensions.SCREEN_HEIGHT * 0.015,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  cardContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  functionContainer: {
    position: "absolute",
    flexDirection: "row",
    right: "2%",
    top: "5%",
  },
  iconStyle: {
    marginHorizontal: dimensions.SCREEN_WIDTH * 0.01,
  },
  copyButtonStyle: {
    position: "absolute",
    top: "0%",
    left: "1%",
    width: "5%",
    height: "25%",
    zIndex: 1,
  },
});

export default RecommendFlashcard;
