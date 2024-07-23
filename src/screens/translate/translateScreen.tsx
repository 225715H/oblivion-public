import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { Button, Icon } from '@rneui/themed';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { colors } from '../../styles/colors';
import { RootStackParamList } from '../../types/navigation';

const TranslationScreen = () => {
  const [isEnglishToJapanese, setIsEnglishToJapanese] = useState(true);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  


  const switchLanguage = () => {
    setIsEnglishToJapanese(!isEnglishToJapanese);
  };

  const handleTextPress = () => {
    navigation.navigate('TranslateInput');
  };

  return (
    <View style={styles.container}>
      <View style={styles.languageSwitchContainer}>
        <Button
          title={isEnglishToJapanese ? "英語" : "日本語"}
          type="solid"
          buttonStyle={styles.languageButton}
          onPress={() => alert('Switch to English')}
          disabled
          disabledTitleStyle={styles.languageButtonTextDisabled}
        />
        <Icon name="swap-horizontal" type="material-community" color="#000" size={30} onPress={switchLanguage} />
        <Button
          title={isEnglishToJapanese ? "日本語" : "英語"}
          type="solid"
          buttonStyle={styles.languageButton}
          onPress={() => alert('Switch to Japanese')}
          disabled
          disabledTitleStyle={styles.languageButtonTextDisabled}
        />
      </View>
      <TouchableWithoutFeedback onPress={handleTextPress}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>テキストを入力</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.backgroundPrimary,
  },
  languageSwitchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  languageButton: {
    width: 125,
    height: 50,
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 15,
  },
  textContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',  
    alignItems: 'flex-start',     
    padding: 20,                 
  },
  text: {
    fontSize: 25,
    color: colors.textSecondary,
    textAlign: 'center',
    textAlignVertical: 'top',
  },
  languageButtonTextDisabled: {
    color: colors.textPrimary,
  },
});

export default TranslationScreen;
