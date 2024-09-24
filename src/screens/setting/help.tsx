import { View, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../styles/colors";
import { WebView } from "react-native-webview";

// ホームスクリーンコンポーネント
export default function HelpScreen() {
  return (
    <WebView
      source={{
        uri: "https://sites.google.com/view/oblivion-help/%E3%83%9B%E3%83%BC%E3%83%A0",
      }}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.textSecondary,
  },
  text2: {
    color: colors.textSecondary,
    textDecorationLine: "underline",
  },
});
