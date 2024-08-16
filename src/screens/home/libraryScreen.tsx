import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SpeedDialComponent } from "../../components/molecules/speedDial";
import { colors } from "../../styles/colors";
import FlashCardsFlip from "../../components/organisms/flashCardsFlip";
import { dimensions } from "../../constants/dimensions";

// ホームスクリーンコンポーネント
const LibraryScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.backgroundPrimary }}>
      <FlashCardsFlip navigation={navigation} />
      <SpeedDialComponent navigation={navigation} />
    </View>
  );
};

export default LibraryScreen;
