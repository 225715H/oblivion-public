import React, { useRef, useState } from "react";
import { View, StyleSheet, Animated, TouchableOpacity } from "react-native";
import FlashCard from "../molecules/flashCard";

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

  const renderCard = (text: string, animatedStyle: any) => {
    return (
      <Animated.View style={[animatedStyle]}>
        <FlashCard text={text} />
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      {cards.map((card, index) => (
        <TouchableOpacity
          key={card.id}
          onPress={() => flipCard(index)}
          style={styles.cardContainer}
        >
          {flipped[index]
            ? renderCard(card.back, backAnimatedStyle(flipAnimations[index]))
            : renderCard(card.front, frontAnimatedStyle(flipAnimations[index]))}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    width: "90%",
    alignItems: "center",
  },
});

const cards = [
  {
    id: 1,
    front: "front 1",
    back: "back 1",
  },
  {
    id: 2,
    front: "front 2",
    back: "back 2",
  },
  {
    id: 3,
    front: "front 3",
    back: "back 3",
  },
  {
    id: 4,
    front: "front 4",
    back: "back 4",
  },
  {
    id: 5,
    front: "front 5",
    back: "back 5",
  },
];

export default FlashCardsFlip;
