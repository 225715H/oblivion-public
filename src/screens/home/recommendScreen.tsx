import React from "react";
import { View, Text } from "react-native";
import RecommendFlashCardsFlip from "../../components/organisms/recommendFlashcardFlip";
import { colors } from "../../styles/colors";

// ホームスクリーンコンポーネント
const RecommendScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.backgroundPrimary }}>
      <RecommendFlashCardsFlip />
    </View>
  );
};

export default RecommendScreen;
