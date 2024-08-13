import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

const ActionButtons = ({ onPress }: any) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.goodButton} onPress={onPress}>
        <Text style={styles.buttonText}>Good</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.againButton} onPress={onPress}>
        <Text style={styles.buttonText}>Again</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    position: "absolute",
    bottom: "10%",
    justifyContent: "center",
  },
  goodButton: {
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.goodColor,
    paddingVertical: '5%',
    paddingHorizontal: '10%',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  againButton: {
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.againColor,
    paddingVertical: '5%',
    paddingHorizontal: '10%',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default ActionButtons;
