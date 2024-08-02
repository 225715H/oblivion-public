import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
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
    marginTop: dimensions.SCREEN_HEIGHT * 0.01,
    alignItems: 'center',
  },
  languageContainer: {
    width: '100%',
    marginTop: dimensions.SCREEN_HEIGHT * 0.02,
  },
  language: {
    fontSize: dimensions.SCREEN_WIDTH * 0.06,
    color: 'black',
  },
  card: {
    width: '90%',
    height: dimensions.SCREEN_HEIGHT * 0.23,
    backgroundColor: colors.backgroundQuaternary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: dimensions.SCREEN_HEIGHT * 0.02,
    marginBottom: dimensions.SCREEN_HEIGHT * 0.02,
  },
  cardText: {
    fontSize: dimensions.SCREEN_WIDTH * 0.05,
    color: colors.textPrimary,
  },
  separator: {
    width: '80%',
    height: 1,
    backgroundColor: 'black',
    marginVertical: dimensions.SCREEN_HEIGHT * 0.02,
    alignSelf: 'center',
  },
});

export default TranslateOutputScreen;
