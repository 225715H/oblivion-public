import React, { useState } from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";
import { dimensions } from "../../constants/dimensions";
import { colors } from "../../styles/colors";

const CardEditInputGroup = ({
  value,
  placeholder,
  language,
  onChangeText,
}: {
  value: string;
  placeholder: string;
  language: string;
  onChangeText: (text: string) => void;
}) => {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.text}>{language}</Text>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#999"
        multiline={false}
        onChangeText={onChangeText}
        autoCapitalize="none"
        maxLength={20}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputGroup: {
    marginVertical: dimensions.SCREEN_HEIGHT * 0.02,
  },
  text: {
    fontSize: 20,
    color: colors.textPrimary,
    // marginBottom: dimensions.SCREEN_HEIGHT * 0.01
  },
  input: {
    borderWidth: 1,
    borderColor: colors.textSecondary,
    borderRadius: 5,
    padding: dimensions.SCREEN_HEIGHT * 0.01,
    width: dimensions.SCREEN_WIDTH * 0.8,
    height: dimensions.SCREEN_HEIGHT * 0.1,
    marginVertical: dimensions.SCREEN_HEIGHT * 0.01,
    fontSize: 20,
  },
});

export default CardEditInputGroup;
