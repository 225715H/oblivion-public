import React from "react";
import { Alert, View, StyleSheet } from "react-native";
import { LoadImage } from "../../utils/loadImages";
import { TouchableIcon } from "../atoms/touchableIcon";
import { useFlashcards } from "../../context/flashCardContext";
import { useCardEdit } from "../../context/cardEditContext";
import { dimensions } from "../../constants/dimensions";

export const CardFunctionComponent = (
  isVisible: boolean,
  item: any,
  navigation: any
) => {
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
      <View style={styles.functionContainer}>
        <TouchableIcon
          imageSource={LoadImage.editIcon}
          onPress={handleEditCard}
          style={styles.iconStyle}
          backgroundColor="transparent"
        />
        <TouchableIcon
          imageSource={LoadImage.deleteIcon}
          onPress={handleDeleteCard}
          style={styles.iconStyle}
          backgroundColor="transparent"
        />
      </View>
    )
  );
};

const styles = StyleSheet.create({
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
