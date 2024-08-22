import React from "react";
import {
  TouchableOpacity,
  Animated,
  StyleSheet,
  View,
} from "react-native";
import Card from "../atoms/card";
import { useFlipAnimation } from "../../hooks/useFlipAnimation";
import { dimensions } from "../../constants/dimensions";
import { colors } from "../../styles/colors";
import { useVisibleFolderModal } from "../../context/visibleFolderModal";
import { flashcardLabel } from "../atoms/cardLabel";
import { CardFunctionComponent } from "./cardFunctionComponent";

const Flashcard = ({ item, navigation }: { item: any; navigation: any }) => {
  const { flipCard, frontAnimatedStyle, backAnimatedStyle, flipped } =
    useFlipAnimation();
  const { isVisible } = useVisibleFolderModal();

  const labelColor =
    item.level !== undefined ? (item.level === 0 ? colors.againColor : item.level === 3 ? colors.goodColor : colors.yellowColors) : null;

  return (
    <TouchableOpacity onPress={flipCard}>
      <Animated.View style={flipped ? backAnimatedStyle : frontAnimatedStyle}>
        <View style={styles.cardContainer}>
          <Card
            textContent={flipped ? item.Japanese : item.English}
            languageName={flipped ? "日本語" : "en"}
            cardStyle={styles.card}
            nodeRight={CardFunctionComponent(isVisible, item, navigation)}
            nodeLeft={labelColor && flashcardLabel(labelColor)}
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
  cardLabel: {
    position: "absolute",
    top: "0%",
    left: "3%",
    width: "5%",
    height: "25%",
    zIndex: 1,
  },
});

export default Flashcard;
