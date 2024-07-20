// App.js
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/auth/loginScreen";
import SettingScreen from "../screens/setting/settingScreen";
import FooterNavigator from "./bottomTabNavigator";
import { ScreenMoveButton } from "../components/atoms/settingButton";

const Stack = createNativeStackNavigator();

// タブナビゲーターの定義
export default function HeaderNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OBLIVION"
        component={FooterNavigator}
        options={{ 
          headerRight: () => <ScreenMoveButton screenName="Setting" imageSource={require("../../assets/logos/setting.png")}/>,
          headerLeft: () => <ScreenMoveButton screenName="Login" imageSource={require("../../assets/logos/user.png")}/>,
          headerShown: true }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>
  );
}
