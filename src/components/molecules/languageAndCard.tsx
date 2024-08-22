import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { dimensions } from '../../constants/dimensions';
import Card from '../atoms/card';
import { colors } from '../../styles/colors';

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
      <Card textContent={textContent} languageName={languageName} cardStyle={styles.card} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  card: {
    width: "90%",
    height: dimensions.SCREEN_HEIGHT * 0.23,
    backgroundColor: colors.backgroundQuaternary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: dimensions.SCREEN_HEIGHT * 0.03,
    marginBottom: dimensions.SCREEN_HEIGHT * 0.02,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
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
