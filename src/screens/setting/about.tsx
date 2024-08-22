import { View, Text, StyleSheet, Linking, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../styles/colors";

// ホームスクリーンコンポーネント
export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Version 1.0.0</Text>
      <TouchableOpacity 
        onPress={() => Linking.openURL("https://icons8.com/")} style={styles.textContainer}> 
        <Text style={styles.text}>Icons provided by </Text>
        <Text style={styles.text2}>Icons8</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.textSecondary
  },
  text2: {
    color: colors.textSecondary,
    textDecorationLine: 'underline',
  },
});