import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

const TranslateInput = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>このページは、TranslateInputです</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundPrimary,
  },
  text: {
    fontSize: 20,
    color: colors.textPrimary,
  },
});

export default TranslateInput;
