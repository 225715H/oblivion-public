import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { dimensions } from '../../constants/dimensions';
import { colors } from '../../styles/colors';
import * as Speech from 'expo-speech';
import { TouchableIcon } from '../atoms/touchableIcon';
import { LoadImage } from '../../utils/loadImages';

interface LanguageAndCardProps {
  languageName: string;
  textContent: string;
}

const LanguageAndCard: React.FC<LanguageAndCardProps> = ({ languageName, textContent }) => {

  const speakText = (text: string, lan: string) => {
    const languageCode = lan === '日本語' ? 'ja' : 'en'
    console.log('speaking', text, languageCode);
    Speech.speak(text, {language: languageCode});
  };


  return (
    <View style={styles.container}>
      <View style={styles.languageContainer}>
        <Text style={styles.language}>{languageName}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardText}>{textContent}</Text>
        <TouchableIcon
          imageSource={LoadImage.soundIcon}
          onPress={() => speakText(textContent, languageName)}
        />
      </View>
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
  card: {
    width: '90%',
    height: dimensions.SCREEN_HEIGHT * 0.23,
    backgroundColor: colors.backgroundQuaternary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: dimensions.SCREEN_HEIGHT * 0.03,
    marginBottom: dimensions.SCREEN_HEIGHT * 0.02,
  },
  cardText: {
    fontSize: dimensions.SCREEN_WIDTH * 0.06,
    color: colors.textPrimary,
  },
});

export default LanguageAndCard;
