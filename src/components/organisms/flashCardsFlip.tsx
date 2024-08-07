import React, { useRef, useState } from "react";
import { View, StyleSheet, Animated, TouchableOpacity } from "react-native";
import FlashCard from "../molecules/flashCard";
import Card from "../atoms/card";
import { dimensions } from "../../constants/dimensions";
import { colors } from "../../styles/colors";

const FlashCardsFlip = () => {
  const flipAnimations = useRef(cards.map(() => new Animated.Value(0))).current;
  const [flipped, setFlipped] = useState(cards.map(() => false));

  const flipCard = (index: number) => {
    setFlipped((prevFlipped) => {
      const newFlipped = [...prevFlipped];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });

    Animated.spring(flipAnimations[index], {
      toValue: flipped[index] ? 0 : 180,
      friction: 8,
      tension: 10,
      useNativeDriver: true,
    }).start();
  };

  const frontInterpolate = (animation: Animated.Value) =>
    animation.interpolate({
      inputRange: [0, 180],
      outputRange: ["0deg", "180deg"],
    });

  const backInterpolate = (animation: Animated.Value) =>
    animation.interpolate({
      inputRange: [0, 180],
      outputRange: ["180deg", "360deg"],
    });

  const frontAnimatedStyle = (animation: Animated.Value) => ({
    transform: [{ rotateX: frontInterpolate(animation) }],
  });

  const backAnimatedStyle = (animation: Animated.Value) => ({
    transform: [{ rotateX: backInterpolate(animation) }],
  });

  const renderCard = (text: string, lan: string, animatedStyle: any) => {
    return (
      <Animated.View style={[animatedStyle]}>
        <Card
          textContent={text}
          languageName={lan}
          cardStyle={styles.cardContainer}
        />
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      {cards.map((card, index) => (
        <TouchableOpacity key={card.id} onPress={() => flipCard(index)}>
          {flipped[index]
            ? renderCard(
                card.back,
                card.backLan,
                backAnimatedStyle(flipAnimations[index])
              )
            : renderCard(
                card.front,
                card.frontLan,
                frontAnimatedStyle(flipAnimations[index])
              )}
        </TouchableOpacity>
      ))}
      {/* 発音ボタンとダイアルボタンが被るのを防ぐためにスペースを追加 */}
      <View style={styles.spaceBottom} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    width: dimensions.SCREEN_WIDTH * 0.8,
    height: dimensions.SCREEN_HEIGHT * 0.15,
    marginVertical: dimensions.SCREEN_HEIGHT * 0.015,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backgroundPrimary,
    borderRadius: 10,
  },
  spaceBottom: {
    marginBottom: dimensions.SCREEN_HEIGHT * 0.1,
  },
});

const cards = [
  {
    id: 1,
    front: "front 1",
    back: "back 1",
    frontLan: "en",
    backLan: "ja",
  },
  {
    id: 2,
    front: "front 2",
    back: "back 2",
    frontLan: "en",
    backLan: "ja",
  },
  {
    id: 3,
    front: "front 3",
    back: "back 3",
    frontLan: "en",
    backLan: "ja",
  },
  {
    id: 4,
    front: "front 4",
    back: "back 4",
    frontLan: "en",
    backLan: "ja",
  },
  {
    id: 5,
    front: "front 5",
    back: "back 5",
    frontLan: "en",
    backLan: "ja",
  },
];

export default FlashCardsFlip;
