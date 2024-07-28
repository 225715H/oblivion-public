import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/auth/loginScreen";
import { SettingScreen } from "../screens/setting/settingScreen";
import BottomTabNavigator from "./bottomTabNavigator";
import MainHeader from "../components/molecules/mainHeader";
import { RootStackParamList } from "../types/navigation";
import TranslateInput from "../screens/translate/translateInput";
import TranslateNavigator from "./translateNavigator";
import { CustomMainHeader } from "../components/molecules/customMainHeader";
import NavButton from "../components/atoms/navButton";
import { useNavigation } from "@react-navigation/native";
import { TouchableIcon } from "../components/atoms/touchableIcon";
import { LoadImage } from "../utils/loadImages";
import { useNavigationScreen } from "../hooks/navigationScreen";
import { Text, Image } from "react-native";
import ChatbotScreen from "../screens/chat/chatbotScreent";
import TranslationScreen from "../screens/translate/translateScreen";
import RecommendScreen from "../screens/home/recommendScreen";
import LibraryScreen from "../screens/home/libraryScreen";
import { SourceLanguageProvider } from '../context/sourceLanguageContext';
import { TargetLanguageProvider } from '../context/targetLanguageContext';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function MainNavigator() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="OBLIVION"
        component={BottomTabNavigator}
        options={{
          header: () => (
            <MainHeader
              title="OBLIVION"
              leftButton={
                <NavButton
                  screenName="Setting"
                  imageSource={LoadImage.settingIcon}
                />
              }
              rightButton={
                <NavButton
                  screenName="Chatbot"
                  imageSource={LoadImage.translateIcon}
                />
              }
            />
          ), // カスタムヘッダーを設定
        }}
      />

      <Stack.Screen name="Translate" component={TranslateNavigator} options={{ headerShown: false }} />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            header: () => (
              <MainHeader
                title="Setting"
                rightButton={
                  <TouchableIcon
                    imageSource={LoadImage.crossIcon}
                    onPress={() => navigation.goBack()}
                  />
                }
                leftButton={<Image></Image>}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Chatbot"
          component={ChatbotScreen}
          options={{
            header: () => (
              <MainHeader
                title="Chatbot"
                rightButton={
                  <TouchableIcon
                    imageSource={LoadImage.crossIcon}
                    onPress={() => navigation.goBack()}
                  />
                }
                leftButton={<Image></Image>}
              />
            ),
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
