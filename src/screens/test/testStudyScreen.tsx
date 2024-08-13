import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import CardPair from "../../components/molecules/cardPair";
import ActionButtons from "../../components/molecules/actionButtons";
import ShowAnswerButton from "../../components/molecules/showAnswerButton";

// テストデータ
const wordList = [
  { front: "apple", back: "りんご", frontLanguage: "英語", backLanguage: "日本語" },
  { front: "banana", back: "バナナ", frontLanguage: "英語", backLanguage: "日本語" },
  { front: "orange", back: "オレンジ", frontLanguage: "英語", backLanguage: "日本語" },
  { front: "grape", back: "ぶどう", frontLanguage: "英語", backLanguage: "日本語" },
  { front: "strawberry", back: "いちご", frontLanguage: "英語", backLanguage: "日本語" },
  { front: "watermelon", back: "すいか", frontLanguage: "英語", backLanguage: "日本語" },
  { front: "peach", back: "もも", frontLanguage: "英語", backLanguage: "日本語" },
  { front: "cherry", back: "さくらんぼ", frontLanguage: "英語", backLanguage: "日本語" },
  { front: "pear", back: "なし", frontLanguage: "英語", backLanguage: "日本語" },
  { front: "pineapple", back: "パイナップル", frontLanguage: "英語", backLanguage: "日本語" },
];

const TestStudyScreen = ({ navigation }: { navigation: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isBackVisible, setIsBackVisible] = useState(false);
  const [isAnswerVisible, setIsAnswerVisible] = useState(true);

  const showAnswer = () => {
    setIsBackVisible(true);
    setIsAnswerVisible(false);
  };

  const handleGoodAgainPress = () => {
    setIsBackVisible(false);
    setIsAnswerVisible(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % wordList.length);
  };

  const currentWord = wordList[currentIndex];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardsContainer}>
        <CardPair
          frontText={currentWord.front}
          frontLanguage={currentWord.frontLanguage}
          backText={currentWord.back}
          backLanguage={currentWord.backLanguage}
          isBackVisible={isBackVisible}
        />
      </View>
      {isAnswerVisible ? (
        <ShowAnswerButton onPress={showAnswer} />
      ) : (
        <ActionButtons onPress={handleGoodAgainPress} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  cardsContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    width: "100%",
    marginTop: "15%",
  },
});

export default TestStudyScreen;
