import React, { useRef, useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, Platform } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';
import { colors } from '../../styles/colors';
import LanguageSwitch from '../../components/molecules/languageSwitch';
import { TouchableIcon } from '../../components/atoms/touchableIcon';
import { LoadImage } from '../../utils/loadImages';
import { dimensions } from '../../constants/dimensions';

type TranslateInputScreenProps = {
  navigation: NavigationProp<RootStackParamList>;
};

const TranslateInputScreen: React.FC<TranslateInputScreenProps> = ({ navigation }) => {
  const textInputRef = useRef<TextInput>(null);
  const [textInputValue, setTextInputValue] = useState('');

  useEffect(() => {
    textInputRef.current?.focus();
  }, []);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleTouchablePress = () => {
    if (textInputValue.trim().length === 0) {
      handleGoBack();
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.row}>
          <View style={styles.backIcon}>
            <TouchableIcon imageSource={LoadImage.backIcon} onPress={handleGoBack} />
          </View>
          <View style={styles.languageSwitch}>
            <LanguageSwitch />
          </View>
        </View>
        <TouchableWithoutFeedback onPress={handleTouchablePress}>
          <View style={styles.textInputContainer}>
            <TextInput
              ref={textInputRef}
              style={styles.textInput}
              multiline={true}
              value={textInputValue}
              onChangeText={setTextInputValue}
              autoCapitalize='none'
            />
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.iconRow}>
          <View style={styles.spacer}></View>
          {textInputValue.trim().length > 0 && (
            <View style={styles.rightIconContainer}>
              <TouchableIcon
                iconSize={SCREEN_WIDTH * 0.1}
                imageSource={LoadImage.rightIcon}
                backgroundColor={colors.backgroundQuaternary}
                onPress={() => {}}
              />
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const SCREEN_WIDTH = dimensions.SCREEN_WIDTH;
const SCREEN_HEIGHT = dimensions.SCREEN_HEIGHT;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.backgroundPrimary,
    marginTop: SCREEN_HEIGHT * 0.02,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: SCREEN_HEIGHT * 0.02,
  },
  backIcon: {
    position: 'absolute',
    left: '1%',
  },
  languageSwitch: {},
  textInputContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  textInput: {
    fontSize: SCREEN_WIDTH * 0.08,
    color: colors.textPrimary,
    width: SCREEN_WIDTH * 0.8,
    maxHeight: SCREEN_HEIGHT * 0.3,
  },
  iconRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  spacer: {
    flex: 1,
  },
  rightIconContainer: {
    marginRight: 10,
  },
});

export default TranslateInputScreen;
