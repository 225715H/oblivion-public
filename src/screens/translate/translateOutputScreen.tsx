import { View, Text } from 'react-native';
import React from 'react';
import { useSourceText } from '../../context/sourceTextContext'; 
import { useTargetText } from '../../context/targetTextContext';
import { useSourceLanguage } from '../../context/sourceLanguageContext';
import { useTargetLanguage } from '../../context/targetLanguageContext';

export default function TranslateOutputScreen() {
  const sourceText = useSourceText(); 
  const targetText = useTargetText();
  const sourceLanguage = useSourceLanguage();
  const targetLanguage = useTargetLanguage();


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>翻訳結果の画面</Text>
        <Text>{sourceText}</Text> 
        <Text>{targetText}</Text>
        <Text>{sourceLanguage}</Text>
        <Text>{targetLanguage}</Text>
    </View>
  );
}
