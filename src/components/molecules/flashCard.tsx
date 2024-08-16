import React, { useEffect } from "react";
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
import { CheckBox } from "@rneui/themed";
import { useVisibleFolderModal } from "../../context/visibleFolderModal";
import { useFlashcards } from "../../context/flashCardContext";
import { useCardEdit } from "../../context/cardEditContext";

const functionComponent = (isVisible: boolean, item: any, navigation: any) => {
  const { removeFlashcard } = useFlashcards();
  const { setCardEdit } = useCardEdit();

  const handleDeleteCard = () => {
    Alert.alert("Delete Card", "Are you sure you want to delete this card?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      { text: "OK", onPress: () => removeFlashcard(item.id) },
    ]);
  };

  const handleEditCard = () => {
    setCardEdit(item);
    navigation.navigate("CardEditScreen");
  };

  return (
    isVisible && (
      <View style={styles.functionConteiner}>
        <TouchableIcon
          imageSource={LoadImage.editIcon}
          onPress={() => handleEditCard()}
          style={styles.iconStyle}
          backgroundColor="transparent"
        />
        <TouchableIcon
          imageSource={LoadImage.deleteIcon}
          onPress={() => handleDeleteCard()}
          style={styles.iconStyle}
          backgroundColor="transparent"
        />
      </View>
    )
  );
};

const Flashcard = ({ item, navigation }: { item: any; navigation: any }) => {
  const { flipCard, frontAnimatedStyle, backAnimatedStyle, flipped } =
    useFlipAnimation();
  const { isVisible } = useVisibleFolderModal();
  return (
    <TouchableOpacity onPress={flipCard}>
      <Animated.View style={flipped ? backAnimatedStyle : frontAnimatedStyle}>
        <View style={styles.cardContainer}>
          <Card
            textContent={flipped ? item.Japanese : item.English}
            languageName={flipped ? "日本語" : "en"}
            cardStyle={styles.card}
            node={functionComponent(isVisible, item, navigation)}
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
