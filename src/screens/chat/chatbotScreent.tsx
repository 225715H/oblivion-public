// ChatbotScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatbotScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.content}>
        <Text>chatbot Screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChatbotScreen;
