import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TestStackParamList } from "../types/navigation";
import MainHeader from "../components/molecules/mainHeader";
import { TouchableIcon } from "../components/atoms/touchableIcon";
import { LoadImage } from "../utils/loadImages";
import TestScreen from "../screens/test/testScreen";
import SettingNavigator from "./settingNavigator";
import ChatNavigator from "./chatNavigator";

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
                  onPress={() => navigation.navigate("Chat")}
                />
              }
            />
          ),
        })}
      />
      <TestStack.Screen
          name="Chat"
          component={ChatNavigator}
          options={{
            headerShown: false, 
            presentation: "fullScreenModal",
          }}
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
