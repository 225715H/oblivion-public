import React, { useEffect } from "react";
import { TouchableOpacity, Animated, StyleSheet, View } from "react-native";
import Card from "../atoms/card";
import { useFlipAnimation } from "../../hooks/useFlipAnimation";
import { dimensions } from "../../constants/dimensions";
import { colors } from "../../styles/colors";
import { TouchableIcon } from "../atoms/touchableIcon";
import { LoadImage } from "../../utils/loadImages";
import { CheckBox } from "@rneui/themed";
import { useVisibleFolderModal } from "../../context/visibleFolderModal";

const functionComponent = (isVisible: boolean) => {
  return (
    isVisible && (
      <View style={styles.functionConteiner}>
        <TouchableIcon
          imageSource={LoadImage.editIcon}
          onPress={() => console.log("edit")}
          style={styles.iconStyle}
          backgroundColor="transparent"
        />
        <TouchableIcon
          imageSource={LoadImage.deleteIcon}
          onPress={() => console.log("delete")}
          style={styles.iconStyle}
          backgroundColor="transparent"
        />
      </View>
    )
  );
};

const Flashcard = ({ item }: { item: any }) => {
  const { flipCard, frontAnimatedStyle, backAnimatedStyle, flipped } =
    useFlipAnimation();
  const { isVisible } = useVisibleFolderModal();

  return (
    <TouchableOpacity onPress={flipCard}>
      <Animated.View style={flipped ? backAnimatedStyle : frontAnimatedStyle}>
        <View style={styles.cardContainer}>
          <Card
            textContent={flipped ? item.back : item.front}
            languageName={flipped ? "日本語" : "en"}
            cardStyle={styles.card}
            node={functionComponent(isVisible)}
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
  },
  checkBoxContainer: {
    margin: 0,
    padding: 0,
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  functionConteiner: {
    position: "absolute",
    flexDirection: "row",
    right: "2%",
    top: "5%",
  },
  iconStyle: {
    marginHorizontal: dimensions.SCREEN_WIDTH * 0.01,
  },
});

export default Flashcard;
