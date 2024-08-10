import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TestStackParamList } from "../types/navigation";
import MainHeader from "../components/molecules/mainHeader";
import { TouchableIcon } from "../components/atoms/touchableIcon";
import { LoadImage } from "../utils/loadImages";
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
                  padding={8}
                />
              }
              rightButton={
                <TouchableIcon
                  imageSource={LoadImage.chatIcon}
                  onPress={() => navigation.navigate("ChatNavigator", {
                    screen: "Chat",
                  })}
                  padding={8}
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
      </TestStack.Group>
    </TestStack.Navigator>
  );
};

export default TestNavigator;
