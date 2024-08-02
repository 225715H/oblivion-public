import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useSourceText } from '../../context/sourceTextContext'; 
import { useTargetText } from '../../context/targetTextContext';
import { useSourceLanguage } from '../../context/sourceLanguageContext';
import { useTargetLanguage } from '../../context/targetLanguageContext';
import { colors } from '../../styles/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const TranslateOutputScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const sourceText = useSourceText(); 
  const targetText = useTargetText();
  const sourceLanguage = useSourceLanguage();
  const targetLanguage = useTargetLanguage();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>翻訳結果の画面</Text>
      <Text style={styles.text}>{sourceText}</Text> 
      <Text style={styles.text}>{targetText}</Text>
      <Text style={styles.text}>{sourceLanguage}</Text>
      <Text style={styles.text}>{targetLanguage}</Text>
      <Button title="戻る" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backgroundPrimary,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: '#666',
  },
});

export default TranslateOutputScreen;
