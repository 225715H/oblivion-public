import React from 'react';
import { View, StyleSheet } from 'react-native';
import LanguageSwitch from '../molecules/languageSwitch';
import TranslateTextContainer from '../molecules/translateTextContainer';
import { colors } from '../../styles/colors';
import { dimensions } from '../../constants/dimensions';

type TranslationScreenContentProps = {
  handleTextPress: () => void;
};

const TranslationScreenContent: React.FC<TranslationScreenContentProps> = ({ handleTextPress }) => {
  return (
    <View style={styles.container}>
      <LanguageSwitch />
      <TranslateTextContainer handleTextPress={handleTextPress} />
    </View>
  );
};

const SCREEN_WIDTH = dimensions.SCREEN_WIDTH;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SCREEN_WIDTH * 0.05,
    backgroundColor: colors.backgroundPrimary,
  },
});

export default TranslationScreenContent;
