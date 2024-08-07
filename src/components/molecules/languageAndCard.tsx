import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { dimensions } from '../../constants/dimensions';
import Card from '../atoms/card';

interface LanguageAndCardProps {
  languageName: string;
  textContent: string;
}

const LanguageAndCard: React.FC<LanguageAndCardProps> = ({ languageName, textContent }) => {
  return (
    <View style={styles.container}>
      <View style={styles.languageContainer}>
        <Text style={styles.language}>{languageName}</Text>
      </View>
      <Card textContent={textContent} languageName={languageName} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  languageContainer: {
    width: '100%',
    marginTop: dimensions.SCREEN_HEIGHT * 0.02,
  },
  language: {
    fontSize: dimensions.SCREEN_WIDTH * 0.055,
    color: 'black',
  },
});

export default LanguageAndCard;
