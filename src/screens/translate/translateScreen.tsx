import React, { useRef, useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Keyboard,
  ActivityIndicator,
  Text,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { colors } from "../../styles/colors";
import { dimensions } from "../../constants/dimensions";
import { useSetSourceText } from "../../context/sourceTextContext";
import { useSourceLanguage } from "../../context/sourceLanguageContext";
import { useTargetLanguage } from "../../context/targetLanguageContext";
import { useSetTargetText } from "../../context/targetTextContext";
import { TouchableIcon } from "../../components/atoms/touchableIcon";
import { LoadImage } from "../../utils/loadImages";
import translateText from "../../services/deeplService";
import MainHeader from "../../components/molecules/mainHeader";
import LanguageSwitch from "../../components/molecules/languageSwitch";
import { useSnackbar } from "../../context/translateSnackbarContext";

const TranslateScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const setSourceText = useSetSourceText();
  const setTargetText = useSetTargetText();
  const sourceLanguage = useSourceLanguage();
  const targetLanguage = useTargetLanguage();

  const [isFocused, setIsFocused] = useState(false);
  const [textInputValue, setTextInputValue] = useState("");
  const { isSnackbarVisible, message, hideSnackbar, showSnackbar } = useSnackbar();

  const textInputRef = useRef<TextInput>(null);

  const [isLoading, setIsLoading] = useState(false);

  const translateTextAndNavigate = async (text: string) => {
    if (text.trim().length === 0) {
      return
    }
    try {
      setIsLoading(true);
      setSourceText(text);
      const translatedText = await translateText(
        sourceLanguage.language,
        targetLanguage.language,
        text
      );
      setTargetText(translatedText);
      navigation.navigate("TranslateOutput");
    } catch (error) {
      handleBackButtonPress();
      showSnackbar("翻訳に失敗しました");
    } finally {
      setIsLoading(false);
    }
  };

  const handleScreenPress = () => {
    if (textInputRef.current && textInputRef.current.isFocused()) {
      if (textInputValue.trim().length === 0) {
        textInputRef.current.blur();
        Keyboard.dismiss();
      }
    } else if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };

  const handleBackButtonPress = () => {
    if (textInputRef.current) {
      textInputRef.current.blur();
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      setTextInputValue("");
    }, [])
  );

  useEffect(() => {
    if (isSnackbarVisible) {
      setTimeout(() => {
        hideSnackbar();
      }, 1000);
    }
  }, [isSnackbarVisible]);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingView}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {!isFocused && (
            <MainHeader
              title="OBLIVION"
              leftButton={
                <TouchableIcon
                  imageSource={LoadImage.settingIcon}
                  onPress={() => navigation.navigate("Setting")}
                  padding={8}
                />
              }
            />
          )}

          <View style={styles.languageSwitchContainer}>
            {isFocused && (
              <View style={styles.backIconContainer}>
                <TouchableIcon
                  imageSource={LoadImage.backIcon}
                  onPress={handleBackButtonPress}
                  padding={8}
                />
              </View>
            )}
            <LanguageSwitch />
          </View>

          <View style={styles.inputContainer}>
            <TouchableWithoutFeedback onPress={handleScreenPress}>
              <View style={styles.inputActionContainer}>
                <View style={styles.textInputContainer}>
                  <TextInput
                    ref={textInputRef}
                    style={styles.textInput}
                    value={textInputValue}
                    onChangeText={setTextInputValue}
                    placeholder="テキストを入力"
                    returnKeyType="done"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => {
                      setIsFocused(false);
                      setTextInputValue("");
                    }}
                    maxLength={20}
                    blurOnSubmit={false}
                    onSubmitEditing={() => translateTextAndNavigate(textInputValue)}
                  />
                </View>
                {textInputValue.trim().length > 0 && (
                  <View style={styles.actionIconContainer}>
                    <TouchableIcon
                      iconSize={dimensions.SCREEN_WIDTH * 0.1}
                      imageSource={LoadImage.rightIcon}
                      backgroundColor={colors.backgroundQuaternary}
                      onPress={() => translateTextAndNavigate(textInputValue)}
                      padding={10}
                    />
                  </View>
                )}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>

      {isSnackbarVisible && (
        <View style={styles.snackbarContainer}>
          <Text style={styles.snackbarText}>{message}</Text>
        </View>
      )}

      {isLoading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color={colors.iconColorPrimary} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.backgroundPrimary,
  },
  safeAreaView: {
    flex: 1,
    width: "100%",
  },
  keyboardAvoidingView: {
    flex: 1,
    width: "100%",
  },
  languageSwitchContainer: {
    marginTop: dimensions.SCREEN_HEIGHT * 0.01,
    marginBottom: dimensions.SCREEN_HEIGHT * 0.03,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  backIconContainer: {
    position: "absolute",
    left: 0,
  },
  inputContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  inputActionContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textInputContainer: {
    flex: 1,
    width: "80%",
    alignItems: "flex-start",
  },
  textInput: {
    fontSize: dimensions.SCREEN_WIDTH * 0.07,
    color: "black",
    width: dimensions.SCREEN_WIDTH * 0.8,
    backgroundColor: "white",
  },
  actionIconContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
    paddingRight: dimensions.SCREEN_WIDTH * 0.02,
    paddingBottom: dimensions.SCREEN_HEIGHT * 0.01,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  loadingOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  snackbarContainer: {
    width: "95%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "black",
    borderRadius: 8,
    padding: 14,
    alignSelf: "center",
  },
  snackbarText: {
    fontSize: 16,
    color: "white",
    alignItems: "flex-start",
  },
});

export default TranslateScreen;
