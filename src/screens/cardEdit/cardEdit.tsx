import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import React from "react";
import { colors } from "../../styles/colors";
import CardEditForm from "../../components/organisms/cardEditForm";

// カード編集画面コンポーネント
const CardEditScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const handleDismissKeyboard = () => {
    Keyboard.dismiss(); // キーボードを閉じる
  };
  return (
    <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.backgroundPrimary,
        }}
      >
        <CardEditForm navigation={navigation} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CardEditScreen;
