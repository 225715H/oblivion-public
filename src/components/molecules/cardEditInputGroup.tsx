import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { dimensions } from "../../constants/dimensions";
import { colors } from "../../styles/colors";

const CardEditInputGroup = ({
  placeholder,
  language,
}: {
  placeholder: string;
  language: string;
}) => {
  const [changeText, setChangeText] = useState("");
  return (
    <View style={styles.inputGroup}>
      <Text>{language}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#999"
        multiline={false}
        value={changeText}
        onChangeText={setChangeText}
        autoCapitalize="none"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputGroup: {
    marginVertical: dimensions.SCREEN_HEIGHT * 0.02,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.textSecondary,
    borderRadius: 5,
    padding: dimensions.SCREEN_HEIGHT * 0.01,
    width: dimensions.SCREEN_WIDTH * 0.7,
    height: dimensions.SCREEN_HEIGHT * 0.1,
    marginVertical: dimensions.SCREEN_HEIGHT * 0.01,
  },
});

export default CardEditInputGroup;
