import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSourceLanguage, useSetSourceLanguage } from '../../context/sourceLanguageContext';
import { useTargetLanguage, useSetTargetLanguage } from '../../context/targetLanguageContext';
import LanguageButton from '../../components/atoms/languageButton';
import SwapButton from '../../components/atoms/swapButton';

const LanguageSwitch: React.FC = () => {
    const sourceLanguage = useSourceLanguage();
    const setSourceLanguage = useSetSourceLanguage();
    const targetLanguage = useTargetLanguage();
    const setTargetLanguage = useSetTargetLanguage();

    const switchLanguages = () => {
        setSourceLanguage(targetLanguage);
        setTargetLanguage(sourceLanguage);
    };

    return (
      <View style={styles.languageSwitch}>
          <LanguageButton title={sourceLanguage.name} />
          <SwapButton onPress={switchLanguages} />
          <LanguageButton title={targetLanguage.name} />
      </View>
    );
};

const styles = StyleSheet.create({
    languageSwitch: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LanguageSwitch;
