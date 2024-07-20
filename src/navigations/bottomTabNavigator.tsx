import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/homeScreen";
import TestScreen from "../screens/test/testScreen";
import TranslateScreen from "../screens/translate/translateScreen";

const Tab = createBottomTabNavigator();

// タブナビゲーターの定義
export default function FooterNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../../assets/logos/home.png")}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Translate"
        component={TranslateScreen}
        options={{
          tabBarLabel: "Translate",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../../assets/logos/translate.png")}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Test"
        component={TestScreen}
        options={{
          tabBarLabel: "Test",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../../assets/logos/test.png")}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
