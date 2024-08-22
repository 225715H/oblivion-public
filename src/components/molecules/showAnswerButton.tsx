import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

const ShowAnswerButton = ({ onPress }: any) => {
  return (
    <TouchableOpacity style={styles.answerButton} onPress={onPress}>
      <Text style={styles.answerButtonText}>答えを表示</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  answerButton: {
    alignItems: "center",
    backgroundColor: colors.backgroundTertiary,
    width: "50%",
    paddingVertical: '5%',
    paddingHorizontal: '10%',
    borderRadius: 10,
    position: "absolute",
    bottom: "10%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  answerButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default ShowAnswerButton;
