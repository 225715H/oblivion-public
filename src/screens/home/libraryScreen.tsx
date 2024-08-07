import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SpeedDialComponent } from "../../components/molecules/speedDial";
import { colors } from "../../styles/colors";
import FlashCardsFlip from "../../components/organisms/flashCardsFlip";

// ホームスクリーンコンポーネント
export default function LibraryScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.backgroundSecondary }}>
      <ScrollView>
        <FlashCardsFlip />
      </ScrollView>
      <SpeedDialComponent />
    </View>
  );
}
