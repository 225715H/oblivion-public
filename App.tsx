// App.js
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import FooterNavigator from "./src/navigations/bottomTabNavigator";
import HeaderNavigator from "./src/navigations/stackNavigator";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// スタックナビゲーターの定義
function App() {
  return (
    <NavigationContainer>
      <HeaderNavigator />
    </NavigationContainer>
  );
}

export default App;
