import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import InitTestTemplate from '../../components/templates/initTestTemplate';
import { colors } from '../../styles/colors';

// ホームスクリーンコンポーネント
export default function TestScreen() {
  return (
    <View style={styles.container}>
      <InitTestTemplate />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundSecondary,
    justifyContent: "flex-start",
    alignItems: "center",
  },
})