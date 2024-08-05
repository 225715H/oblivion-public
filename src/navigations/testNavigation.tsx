import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TestStackParamList } from "../types/navigation";
import MainHeader from "../components/molecules/mainHeader";
import { TouchableIcon } from "../components/atoms/touchableIcon";
import { LoadImage } from "../utils/loadImages";
import ChatBotScreen from "../screens/chat/chatBotScreen";
import TestScreen from "../screens/test/testScreen";
import SettingNavigator from "./settingNavigator";

const TestStack = createNativeStackNavigator<TestStackParamList>();

const TestNavigator = () => {
  return (
    <TestStack.Navigator>
      <TestStack.Screen
        name="TestScreen"
        component={TestScreen}
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
      <TestStack.Group screenOptions={{ presentation: "modal" }}>
        <TestStack.Screen
          name="Setting"
          component={SettingNavigator}
          options={{ headerShown: false }}
        />
        <TestStack.Screen
          name="Chatbot"
          component={ChatBotScreen}
          options={({ navigation }) => ({
            headerTitle: "Chatbot",
            headerRight: () => (
              <TouchableIcon
                imageSource={LoadImage.crossIcon}
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
      </TestStack.Group>
    </TestStack.Navigator>
  );
};

export default TestNavigator;
