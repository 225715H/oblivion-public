import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/auth/loginScreen";
import SettingScreen from "../screens/setting/settingScreen";
import BottomTabNavigator from "./bottomTabNavigator";
import MainHeader from "../components/molecules/mainHeader";
import { RootStackParamList } from "../types/navigation";
import TranslateInput from "../screens/translate/translateInput";
import TranslateNavigator from "./translateNavigator";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OBLIVION"
        component={BottomTabNavigator}
        options={{ 
          header: () => <MainHeader title="OBLIVION" />, // カスタムヘッダーを設定
        }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="TranslateInput" component={TranslateInput} />
    </Stack.Navigator>
  );
}
