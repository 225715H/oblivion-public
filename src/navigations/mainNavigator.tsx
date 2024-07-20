import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import LoginScreen from "../screens/auth/loginScreen";
import SettingScreen from "../screens/setting/settingScreen";
import BottomTabNavigator from "./bottomTabNavigator";
import MainHeader from "../components/molecules/mainHeader";
import { RootStackParamList } from "../types/navigation"; // 型定義のインポート

// スタックナビゲーターを作成
const Stack = createNativeStackNavigator<RootStackParamList>();

// HeaderNavigatorコンポーネントの定義
export default function HeaderNavigator() {
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
    </Stack.Navigator>
  );
}
