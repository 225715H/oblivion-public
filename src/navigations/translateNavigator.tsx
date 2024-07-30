import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TranslateStackParamList } from "../types/navigation";
import TranslateScreen from "../screens/translate/translateScreen";
import TranslateInput from "../screens/translate/translateInput";
import { SourceLanguageProvider } from "../context/sourceLanguageContext";
import { TargetLanguageProvider } from "../context/targetLanguageContext";
import MainHeader from "../components/molecules/mainHeader";
import { TouchableIcon } from "../components/atoms/touchableIcon";
import { LoadImage } from "../utils/loadImages";
import { SettingScreen } from "../screens/setting/settingScreen";
import ChatBotScreen from "../screens/chat/chatBotScreen";
import { Image } from "react-native";

const TranslateStack = createNativeStackNavigator<TranslateStackParamList>();

export default function TranslateNavigator() {
  return (
    <SourceLanguageProvider>
      <TargetLanguageProvider>
        <TranslateStack.Navigator>
          <TranslateStack.Screen
            name="TranslateScreen"
            component={TranslateScreen}
            options={({ navigation }) => ({
              header: () => (
                <MainHeader
                  title="OBLIVION"
                  leftButton={
                    <TouchableIcon
                      imageSource={LoadImage.settingIcon}
                      onPress={() => navigation.navigate("Setting")}
                    />
                  }
                  rightButton={
                    <TouchableIcon
                      imageSource={LoadImage.chatIcon}
                      onPress={() => navigation.navigate("Chatbot")}
                    />
                  }
                />
              ),
            })}
          />
          <TranslateStack.Screen
            name="TranslateInput"
            component={TranslateInput}
          />

          <TranslateStack.Group screenOptions={{ presentation: "modal" }}>
            <TranslateStack.Screen
              name="Setting"
              component={SettingScreen}
              options={({ navigation }) => ({
                header: () => (
                  <MainHeader
                    title="Setting"
                    rightButton={
                      <TouchableIcon
                        imageSource={LoadImage.crossIcon}
                        onPress={() => navigation.goBack()}
                      />
                    }
                    leftButton={<Image />}
                  />
                ),
              })}
            />
            <TranslateStack.Screen
              name="Chatbot"
              component={ChatBotScreen}
              options={({ navigation }) => ({
                header: () => (
                  <MainHeader
                    title="Chatbot"
                    rightButton={
                      <TouchableIcon
                        imageSource={LoadImage.crossIcon}
                        onPress={() => navigation.goBack()}
                      />
                    }
                    leftButton={<Image />}
                  />
                ),
              })}
            />
          </TranslateStack.Group>
        </TranslateStack.Navigator>
      </TargetLanguageProvider>
    </SourceLanguageProvider>
  );
}
