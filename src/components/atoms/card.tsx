import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LoadImage } from '../../utils/loadImages';
import { TouchableIcon } from '../atoms/touchableIcon';
import { dimensions } from '../../constants/dimensions';
import { colors } from '../../styles/colors';
import { speakText } from '../../utils/speechUtils';

interface CardProps {
  textContent: string;
  languageName: string;
}

const Card: React.FC<CardProps> = ({ textContent, languageName }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{textContent}</Text>
      <View style={styles.soundContainer}>
        <TouchableIcon
          imageSource={LoadImage.soundIcon}
          onPress={() => speakText(textContent, languageName)}
          backgroundColor={colors.backgroundQuaternary}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  soundContainer: {
    position: 'absolute',
    right: '2%',
    bottom: '3%',
  },
});

export default Card;
