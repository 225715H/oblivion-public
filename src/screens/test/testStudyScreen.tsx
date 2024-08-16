import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import CardPair from "../../components/molecules/cardPair";
import ActionButtons from "../../components/molecules/actionButtons";
import ShowAnswerButton from "../../components/molecules/showAnswerButton";
import { useTestSelectedId } from "../../context/testSelectedFolderIdContext";
import { useFlashcards } from "../../context/flashCardContext";

const TestStudyScreen = ({ navigation }: { navigation: any }) => {
  const selectedFolderId = useTestSelectedId(); // 選択されたフォルダIDを取得
  const { flashcards, fetchFlashcards } = useFlashcards(); // フラッシュカードと取得関数を取得
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isBackVisible, setIsBackVisible] = useState(false);
  const [isAnswerVisible, setIsAnswerVisible] = useState(true);

  useEffect(() => {
    if (selectedFolderId !== null) {
      fetchFlashcards([selectedFolderId]); // 選択されたフォルダIDに基づいてフラッシュカードを取得
    }
  }, [selectedFolderId]);

  const showAnswer = () => {
    setIsBackVisible(true);
    setIsAnswerVisible(false);
  };

  const handleGoodAgainPress = () => {
    setIsBackVisible(false);
    setIsAnswerVisible(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  if (flashcards.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>No flashcards available.</Text>
      </SafeAreaView>
    );
  }

  const currentFlashcard = flashcards[currentIndex];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardsContainer}>
        <CardPair
          frontText={currentFlashcard.front}
          frontLanguage="英語" // 言語情報を適宜変更
          backText={currentFlashcard.back}
          backLanguage="日本語" // 言語情報を適宜変更
          isBackVisible={isBackVisible}
        />
      </View>
      <View style={styles.buttonContainer}>
        {isAnswerVisible ? (
          <ShowAnswerButton onPress={showAnswer} />
        ) : (
          <ActionButtons onPress={handleGoodAgainPress} />
        )}
      </View>
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
    marginTop: "20%",
  },
  buttonContainer: {
    width: "100%",
    position: "absolute",
    bottom: "8%",
    alignItems: "center",
  },
});

export default TestStudyScreen;
