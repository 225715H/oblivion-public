import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../../components/atoms/card";
import { dimensions } from "../../constants/dimensions";
import { colors } from "../../styles/colors";

const TestStudyScreen = ({ navigation }: { navigation: any }) => {
  // State to manage visibility of the back card and buttons
  const [isBackVisible, setIsBackVisible] = useState(false);
  const [isAnswerVisible, setIsAnswerVisible] = useState(true);

  // Function to handle answer button press
  const showAnswer = () => {
    setIsBackVisible(true);
    setIsAnswerVisible(false);
  };

  // Function to handle good and again button press
  const handleGoodAgainPress = () => {
    setIsBackVisible(false);
    setIsAnswerVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardContainer}>
        {/* Always display the front card */}
        <Card textContent="front-value" languageName="英語" cardStyle={styles.card} />
        <View style={styles.separator} />
        {/* Conditionally display the back card */}
        {isBackVisible && (
          <Card textContent="back-value" languageName="日本語" cardStyle={styles.card} />
        )}
      </View>
      {/* Conditionally display the answer button or good/again buttons */}
      {isAnswerVisible ? (
        <TouchableOpacity style={styles.answerButton} onPress={showAnswer}>
          <Text style={styles.answerButtonText}>答えを表示</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.goodButton} onPress={handleGoodAgainPress}>
            <Text style={styles.buttonText}>Good</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.againButton} onPress={handleGoodAgainPress}>
            <Text style={styles.buttonText}>Again</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  cardContainer: {
    width: "90%",
    alignItems: "center",
  },
  card: {
    width: "90%",
    height: dimensions.SCREEN_HEIGHT * 0.23,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3%",
    marginBottom: "2%",
  },
  separator: {
    width: "80%",
    height: 1,
    backgroundColor: "black",
    marginVertical: dimensions.SCREEN_HEIGHT * 0.025,
    alignSelf: "center",
  },
  answerButton: {
    alignItems: "center",
    backgroundColor: colors.backgroundTertiary,
    width: "50%",
    paddingVertical: '5%',
    paddingHorizontal: '10%',
    borderRadius: 10,
    position: "absolute",
    bottom: "10%",
  },
  answerButtonText: {
    fontSize: 18,
    color: '#fff',
  },
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

export default TestStudyScreen;
