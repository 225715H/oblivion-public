import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { useSourceText } from '../../context/sourceTextContext'; 
import { useTargetText } from '../../context/targetTextContext';
import { useSourceLanguage } from '../../context/sourceLanguageContext';
import { useTargetLanguage } from '../../context/targetLanguageContext';
import { colors } from '../../styles/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { dimensions } from '../../constants/dimensions';
import { LoadImage } from '../../utils/loadImages';

const TranslateOutputScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const sourceText = useSourceText(); 
  const targetText = useTargetText();
  const sourceLanguage = useSourceLanguage();
  const targetLanguage = useTargetLanguage();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.headerTouchArea} onPress={() => navigation.popToTop()}>
          <Image 
            source={LoadImage.backIcon} 
            style={styles.backIcon}
          />
          <Text style={styles.headerText}>翻訳</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.languageContainer}>
          <Text style={styles.language}>{sourceLanguage}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>{sourceText}</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.languageContainer}>
          <Text style={styles.language}>{targetLanguage}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>{targetText}</Text>
        </View>
      </View>
      <View style={styles.cardActionContainer}>
        <TouchableOpacity style={styles.badFeedbackButton}>
          <Image source={LoadImage.badFeedbackIcon} style={styles.badFeedbackIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addCardButton}>
          <Text style={styles.addCardText}>+ カードに追加</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
    alignItems: 'center',
    width: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: dimensions.SCREEN_HEIGHT * 0.07,
  },
  headerTouchArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    width: dimensions.SCREEN_WIDTH * 0.06,
    height: dimensions.SCREEN_WIDTH * 0.06,
    tintColor: colors.iconColorPrimary,
    marginLeft: dimensions.SCREEN_WIDTH * 0.02,
  },
  headerText: {
    fontSize: dimensions.SCREEN_WIDTH * 0.05,
    fontWeight: 'normal',
    color: colors.textPrimary,
    marginLeft: dimensions.SCREEN_WIDTH * 0.02,
  },
  cardContainer: {
    width: '90%',
    alignItems: 'center',
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
  separator: {
    width: '80%',
    height: 1,
    backgroundColor: 'black',
    marginVertical: dimensions.SCREEN_HEIGHT * 0.025,
    alignSelf: 'center',
  },
  cardActionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '85%',
    marginTop: dimensions.SCREEN_HEIGHT * 0.035,
  },
  badFeedbackButton: {
    width: dimensions.SCREEN_WIDTH * 0.1,
    height: dimensions.SCREEN_WIDTH * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundQuaternary,
    borderRadius: 50,
  },
  badFeedbackIcon: {
    width: dimensions.SCREEN_WIDTH * 0.05,
    height: dimensions.SCREEN_WIDTH * 0.05,
    tintColor: colors.iconColorPrimary,
  },
  addCardButton: {
    width: dimensions.SCREEN_WIDTH * 0.35,
    height: dimensions.SCREEN_HEIGHT * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundQuaternary,
    borderRadius: 10,
  },
  addCardText: {
    fontSize: dimensions.SCREEN_WIDTH * 0.04,
    color: colors.textPrimary,
  },
});

export default TranslateOutputScreen;
