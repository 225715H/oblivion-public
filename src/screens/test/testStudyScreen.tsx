import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import CardPair from "../../components/molecules/cardPair";
import ActionButtons from "../../components/molecules/actionButtons";
import ShowAnswerButton from "../../components/molecules/showAnswerButton";
import { useTestSelectedId } from "../../context/testSelectedFolderIdContext";
import { Flashcard, useFlashcards } from "../../context/flashCardContext";
import { useLanguageDirection } from "../../context/testLanguageDirectionContext";
import selectFlashcardsForCycle from "../../utils/flashcardSelectionAlgorithm";

const TestStudyScreen = ({ navigation }: { navigation: any }) => {
  const selectedFolderId = useTestSelectedId(); // 選択されたフォルダIDを取得
  const {
    testSelectedFlashcards,
    fetchTestSelectedFlashcards,
    editFlashcardLevel,
  } = useFlashcards(); // 選択されたフラッシュカードと取得関数を取得
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCycleFlashcards, setCurrentCycleFlashcards] = useState<
    Flashcard[]
  >([]);
  const [isBackVisible, setIsBackVisible] = useState(false);
  const [isAnswerVisible, setIsAnswerVisible] = useState(true);
  const languageDirection = useLanguageDirection(); // 言語の方向を取得

  useEffect(() => {
    if (selectedFolderId !== null) {
      fetchTestSelectedFlashcards(selectedFolderId); // 選択されたフォルダIDに基づいてフラッシュカードを取得
    }
  }, [selectedFolderId]);

  useEffect(() => {
    const initialCycleFlashcards = selectFlashcardsForCycle(
      testSelectedFlashcards
    );
    setCurrentCycleFlashcards(initialCycleFlashcards); // 初回サイクルのフラッシュカードを設定
  }, [testSelectedFlashcards]);

  useEffect(() => {
    console.log(
      "currentIndex",
      currentIndex,
      currentCycleFlashcards[currentIndex]
    );
  }, [currentCycleFlashcards]);

  const showAnswer = () => {
    setIsBackVisible(true);
    setIsAnswerVisible(false);
  };

  const handleGoodAgainPress = (isGood: boolean) => {
    const currentFlashcard = currentCycleFlashcards[currentIndex];

    let newLevel = isGood ? Math.min(currentFlashcard.level + 1, 3) : 0;

    // Update the flashcard level in the database
    editFlashcardLevel(currentFlashcard.id, newLevel);

    if ((currentIndex + 1) % 12 === 0) {
      // 12回目のgood/againボタンが押されたら、新しいサイクルのカードを選択
      const newCycleFlashcards = selectFlashcardsForCycle(
        testSelectedFlashcards
      );
      setCurrentCycleFlashcards(newCycleFlashcards);
      setCurrentIndex(0); // サイクルの最初に戻る
      console.log("new cycle");
    } else {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % currentCycleFlashcards.length
      );
    }

    // Ensure the "Show Answer" button reappears
    setIsBackVisible(false);
    setIsAnswerVisible(true);
  };

  if (currentCycleFlashcards.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>No flashcards available.</Text>
      </SafeAreaView>
    );
  }

  const currentFlashcard = currentCycleFlashcards[currentIndex];
  const isJapaneseToEnglish = languageDirection === "JapaneseToEnglish";

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardsContainer}>
        <CardPair
          frontText={
            isJapaneseToEnglish
              ? currentFlashcard.Japanese
              : currentFlashcard.English
          }
          frontLanguage={isJapaneseToEnglish ? "日本語" : "英語"}
          backText={
            isJapaneseToEnglish
              ? currentFlashcard.English
              : currentFlashcard.Japanese
          }
          backLanguage={isJapaneseToEnglish ? "英語" : "日本語"}
          isBackVisible={isBackVisible}
        />
      </View>
      <View style={styles.buttonContainer}>
        {isAnswerVisible ? (
          <ShowAnswerButton onPress={showAnswer} />
        ) : (
          <ActionButtons
            onGoodPress={() => handleGoodAgainPress(true)}
            onAgainPress={() => handleGoodAgainPress(false)}
          />
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
