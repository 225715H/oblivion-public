import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Icon } from '@rneui/themed';
import { colors } from '../../styles/colors';

const TranslationScreen = () => {
  const [isEnglishToJapanese, setIsEnglishToJapanese] = useState(true);

  const switchLanguage = () => {
    setIsEnglishToJapanese(!isEnglishToJapanese);
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
        <Icon name="swap-horizontal" type="material-community" color="#000" size={30} onPress={switchLanguage}  />
        <Button
          title={isEnglishToJapanese ? "日本語" : "英語"}
          type="solid"
          buttonStyle={styles.languageButton}
          onPress={() => alert('Switch to Japanese')}
          disabled
          disabledTitleStyle={styles.languageButtonTextDisabled}
        />
      </View>
      <Text style={styles.text}>テキストを入力</Text>
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
  text: {
    flex: 1,
    padding: 20,
    textAlignVertical: 'top',
    fontSize: 25,
    color: colors.textScondary
  },
  languageButtonTextDisabled: {
    color: colors.textPrimary,
  },
});

export default TranslationScreen;
