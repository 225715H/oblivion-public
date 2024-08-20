import React from "react";
import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TestStackParamList } from "../types/navigation";
import MainHeader from "../components/molecules/mainHeader";
import { TouchableIcon } from "../components/atoms/touchableIcon";
import { LoadImage } from "../utils/loadImages";
import TestScreen from "../screens/test/testScreen";
import SettingNavigator from "./settingNavigator";
import TestStudyScreen from "../screens/test/testStudyScreen";
import { colors } from "../styles/colors";

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
                  onPress={() =>
                    navigation.navigate("ChatNavigator", {
                      screen: "Chat",
                    })
                  }
                  padding={8}
                />
              }
            />
          ),
        })}
      />
      <TestStack.Screen
        name="TestStudy"
        component={TestStudyScreen}
        options={{
          presentation: "fullScreenModal",
          header: ({ navigation }) => (
            <MainHeader
              title=""
              leftButton={
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", marginLeft: 5 }}
                >
                  暗記テスト
                </Text>
              }
              rightButton={
                <TouchableIcon
                  imageSource={LoadImage.crossIcon}
                  onPress={() => navigation.goBack()}
                  tintColor={colors.iconColorSecondary}
                />
              }
            />
          ),
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
