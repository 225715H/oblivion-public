import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import InitTestTemplate from '../../components/organisms/initTestTemplate';
import { colors } from '../../styles/colors';

// ホームスクリーンコンポーネント
const TestScreen = ( { navigation } : { navigation: any }) => {
  return (
    <View style={styles.container}>
      <InitTestTemplate navigation={navigation} />
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
})

export default TestScreen;  