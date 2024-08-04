import React, { useRef, useState } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    Keyboard
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { colors } from '../../styles/colors';
import { dimensions } from '../../constants/dimensions';
import { useSetSourceText } from '../../context/sourceTextContext';
import { useSourceLanguage, useSetSourceLanguage } from '../../context/sourceLanguageContext';
import { useTargetLanguage, useSetTargetLanguage } from '../../context/targetLanguageContext';
import { useSetTargetText } from '../../context/targetTextContext';
import { TouchableIcon } from '../../components/atoms/touchableIcon';
import { LoadImage } from '../../utils/loadImages';
import translateText from '../../services/deeplService';
import MainHeader from '../../components/molecules/mainHeader';
import LanguageSwitch from '../../components/molecules/languageSwitch';

const TranslateScreen: React.FC<{navigation: any}> = ({ navigation }) => {
  const setSourceText = useSetSourceText();
  const sourceLanguage = useSourceLanguage();
  const targetLanguage = useTargetLanguage();
  const setTargetText = useSetTargetText();

  const [isFocused, setIsFocused] = useState(false);
  const [textInputValue, setTextInputValue] = useState('');

  const textInputRef = useRef<TextInput>(null);

  const handleTranslatePress = async (text: string) => {
    try {
      setSourceText(text);
      const translatedText = await translateText(sourceLanguage.language, targetLanguage.language, text);
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
          <MainHeader
            title="OBLIVION"
            leftButton={
              <TouchableIcon
                imageSource={LoadImage.settingIcon}
                onPress={() => navigation.navigate('Setting')}
              />
            }
            rightButton={
              <TouchableIcon
                imageSource={LoadImage.chatIcon}
                onPress={() => navigation.navigate('Chatbot')}
              />
            }
          />
        )}
        <LanguageSwitch isFocused={isFocused} handleBackPress={handleBackPress} />
        <View style={styles.contentContainer}>
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
          </TouchableWithoutFeedback>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    backgroundColor: colors.backgroundPrimary,
  },
  keyboardAvoidingView: {
    flex: 1,
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  inputActionContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
    backgroundColor: 'white',
  },
  actionRightIconContainer: {
    // marginRight: dimensions.SCREEN_WIDTH * 0.01,
    flexDirection: 'row',
    width: '100%', 
    justifyContent: 'flex-end',
    // backgroundColor: 'red',
    paddingRight: dimensions.SCREEN_WIDTH * 0.02,
    paddingBottom: dimensions.SCREEN_HEIGHT * 0.01,
  },
});

export default TranslateScreen;
