import React, { useRef, useState } from 'react';
import { View, StyleSheet, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, Text, SafeAreaView, Keyboard } from 'react-native';
import { colors } from '../../styles/colors';
import { dimensions } from '../../constants/dimensions';
import { useSetSourceText } from '../../context/sourceTextContext'; 
import { useSourceLanguage, useSetSourceLanguage } from '../../context/sourceLanguageContext';
import { useTargetLanguage, useSetTargetLanguage } from '../../context/targetLanguageContext';
import { useSetTargetText } from '../../context/targetTextContext';
import { TouchableIcon } from '../../components/atoms/touchableIcon';
import { LoadImage } from '../../utils/loadImages';
import LanguageButton from '../../components/atoms/languageButton'; 
import SwapButton from '../../components/atoms/swapButton';
import { useFocusEffect } from '@react-navigation/native';
import translateText from '../../services/deeplService';  // 追加

const TranslateScreen: React.FC<{navigation: any}> = ({ navigation }) => {
  const setSourceText = useSetSourceText();
  const sourceLanguage = useSourceLanguage();
  const setSourceLanguage = useSetSourceLanguage();
  const targetLanguage = useTargetLanguage();
  const setTargetLanguage = useSetTargetLanguage();
  const setTargetText = useSetTargetText();

  const [isFocused, setIsFocused] = useState(false);
  const [textInputValue, setTextInputValue] = useState('');

  const textInputRef = useRef<TextInput>(null);

  const switchLanguages = () => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
  };

  const handleTranslatePress = async (text: string) => {
    try {
      setSourceText(text);
      const translatedText = await translateText(sourceLanguage.language, targetLanguage.language, text);  // 修正
      setTargetText(translatedText);

      navigation.navigate('TranslateIONavigator', { screen: 'TranslateOutput' });
    } catch (error) {
      console.error("Translation error:", error);
    }
  };

  const handleContainerPress = () => {
    if (textInputRef.current && textInputRef.current.isFocused()) {
      if (textInputValue.trim().length === 0) {
        textInputRef.current.blur();
        Keyboard.dismiss();
      }
    } else if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };

  const handleBackPress = () => {
    if (textInputRef.current) {
      textInputRef.current.blur();
      setTextInputValue('');
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      setTextInputValue('');
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {!isFocused && (
          <View style={styles.headerContainer}>
            <TouchableIcon
              imageSource={LoadImage.settingIcon}
              onPress={() => navigation.navigate('Setting')}
            />
            <Text style={styles.headerTitle}>OBLIVION</Text>
            <TouchableIcon
              imageSource={LoadImage.chatIcon}
              onPress={() => navigation.navigate('Chatbot')}
            />
          </View>
        )}
        <View style={styles.languageSwitchContainer}>
          {isFocused && (
            <View style={styles.backIconContainer}>
              <TouchableIcon
                imageSource={LoadImage.backIcon}
                onPress={handleBackPress}
              />
            </View>
          )}
          <View style={styles.languageSwitch}>
            <LanguageButton title={sourceLanguage.name} />
            <SwapButton onPress={switchLanguages} />
            <LanguageButton title={targetLanguage.name} />
          </View>
        </View>
        <TouchableWithoutFeedback onPress={handleContainerPress}>
          <View style={styles.inputActionContainer}>
            <View style={styles.textInputContainer}>
              <TextInput
                ref={textInputRef}
                style={styles.textInput}
                multiline
                value={textInputValue}
                onChangeText={setTextInputValue}
                autoCapitalize='none'
                placeholder='テキストを入力'
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </View>
            <View style={styles.actionContainer}>
              <View style={styles.actionSpacer}></View>
              {textInputValue.trim().length > 0 && (
                <View style={styles.actionRightIconContainer}>
                  <TouchableIcon
                    iconSize={dimensions.SCREEN_WIDTH * 0.1}
                    imageSource={LoadImage.rightIcon}
                    backgroundColor={colors.backgroundQuaternary}
                    onPress={() => handleTranslatePress(textInputValue)}
                  />
                </View>
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
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
  keyboardAvoidingView: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: dimensions.SCREEN_WIDTH * 0.06,
    height: dimensions.SCREEN_HEIGHT * 0.07,
    width: '100%',
  },
  headerTitle: {
    fontSize: dimensions.SCREEN_WIDTH * 0.05,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  languageSwitchContainer: {
    marginTop: dimensions.SCREEN_HEIGHT * 0.01,
    marginBottom: dimensions.SCREEN_HEIGHT * 0.03,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  backIconContainer: {
    position: 'absolute',
    left: 0,
  },
  languageSwitch: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputActionContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  textInputContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  textInput: {
    fontSize: dimensions.SCREEN_WIDTH * 0.07,
    color: 'black',
    width: dimensions.SCREEN_WIDTH * 0.8,
  },
  actionContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: dimensions.SCREEN_HEIGHT * 0.01,
  },
  actionSpacer: {
    flex: 1,
  },
  actionRightIconContainer: {
    marginRight: dimensions.SCREEN_WIDTH * 0.03,
  },
});

export default TranslateScreen;
