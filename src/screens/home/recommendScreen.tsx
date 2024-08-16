import React from "react";
import { View, Text } from "react-native";
import RecommendFlashCardsFlip from "../../components/organisms/recommendFlashcard";
import { colors } from "../../styles/colors";

// ホームスクリーンコンポーネント
const RecommendScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.backgroundPrimary }}>
      <RecommendFlashCardsFlip navigation={navigation} />
    </View>
  );
};

export default RecommendScreen;
