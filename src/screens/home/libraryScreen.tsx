import { View, Text } from "react-native";
import React from "react";
import { SpeedDialComponent } from "../../components/molecules/speedDial";

// ホームスクリーンコンポーネント
export default function LibraryScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Library Screen</Text>
      <SpeedDialComponent />
    </View>
  );
}
