import { useState, useEffect } from "react";
import { Animated } from "react-native";

export const useFlipAnimation = () => {
  const [flipped, setFlipped] = useState(false);

  const frontAnimatedValue = new Animated.Value(0);
  const backAnimatedValue = new Animated.Value(1);

  const frontAnimatedStyle = {
    transform: [
      {
        rotateX: frontAnimatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "180deg"],
        }),
      },
    ],
  };

  const backAnimatedStyle = {
    transform: [
      {
        rotateX: backAnimatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: ["180deg", "360deg"],
        }),
      },
    ],
  };

  const flipCard = () => {
    setFlipped(!flipped);
  };

  useEffect(() => {
    if (flipped) {
      Animated.timing(frontAnimatedValue, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }).start();
      Animated.timing(backAnimatedValue, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(frontAnimatedValue, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }).start();
      Animated.timing(backAnimatedValue, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }).start();
    }
  }, [flipped]);

  return { flipCard, frontAnimatedStyle, backAnimatedStyle, flipped };
};
