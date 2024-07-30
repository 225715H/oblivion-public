import React, { useEffect, useCallback } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LanguageButton from '../atoms/languageButton'; 
import SwapButton from '../atoms/swapButton'; 
import { dimensions } from '../../constants/dimensions';
import { useSourceLanguage, useSetSourceLanguage } from '../../context/sourceLanguageContext';
import { useTargetLanguage, useSetTargetLanguage } from '../../context/targetLanguageContext';

const LanguageSwitch: React.FC = () => {
  const sourceLanguage = useSourceLanguage();
  const setSourceLanguage = useSetSourceLanguage();
  const targetLanguage = useTargetLanguage();
  const setTargetLanguage = useSetTargetLanguage();

  const switchLanguage = () => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
  }

  useEffect(() => {
    console.log('sourceLanguage updated:', sourceLanguage);
  }, [sourceLanguage]);

  useEffect(() => {
    console.log('targetLanguage updated:', targetLanguage);
  }, [targetLanguage]);

  return (
    <View style={styles.languageSwitchContainer}>
      <LanguageButton title={sourceLanguage} disabled />
      <SwapButton onPress={switchLanguage} />
      <LanguageButton title={targetLanguage} disabled />
    </View>
  );
};

const SCREEN_HEIGHT = dimensions.SCREEN_HEIGHT;

const styles = StyleSheet.create({
  languageSwitchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // marginBottom: SCREEN_HEIGHT * 0.02,
  },
});

export default LanguageSwitch;
