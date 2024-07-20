import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/homeScreen";
import TestScreen from "../screens/test/testScreen";
import TranslateScreen from "../screens/translate/translateScreen";
import {
  DEFAULT_TABBAR_HEIGHT,
  CUSTOM_TABBAR_HEIGHT_MULTIPLIER,
  ICON_SIZE_MULTIPLIER,
  TABBAR_ACTIVE_TINT_COLOR,
  TABBAR_INACTIVE_TINT_COLOR,
} from '../constants/constants';

// タブナビゲーターを作成
const Tab = createBottomTabNavigator();

// カスタムタブバー高さを計算
const CUSTOM_TABBAR_HEIGHT = DEFAULT_TABBAR_HEIGHT * CUSTOM_TABBAR_HEIGHT_MULTIPLIER;

// BottomTabNavigatorコンポーネントの定義
export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // ヘッダーを表示しない
        headerShown: false,
        // タブアイコンを設定
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          const adjustedSize = size * ICON_SIZE_MULTIPLIER; // 自動割り当てされるサイズの倍率に調整

          // ルート名に応じてアイコン画像を選択
          switch (route.name) {
            case 'Home':
              iconName = require('../../assets/logos/home.png');
              break;
            case 'Translate':
              iconName = require('../../assets/logos/translate.png');
              break;
            case 'Test':
              iconName = require('../../assets/logos/test.png');
              break;
            default:
              return null;
          }

          // アイコン画像を返す。調整されたサイズを使用
          return <Image source={iconName} style={{ width: adjustedSize, height: adjustedSize, tintColor: color }} />;
        },
        // アクティブなタブのアイコンの色
        tabBarActiveTintColor: TABBAR_ACTIVE_TINT_COLOR,
        // 非アクティブなタブのアイコンの色
        tabBarInactiveTintColor: TABBAR_INACTIVE_TINT_COLOR,
        // タブのラベルを非表示にする
        tabBarLabel: () => null,
        // タブバーのスタイルを設定（高さを調整）
        tabBarStyle: {
          height: CUSTOM_TABBAR_HEIGHT, // カスタムタブバーの高さを設定
        },
      })}
    >
      {/* Homeタブの設定 */}
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* Translateタブの設定 */}
      <Tab.Screen name="Translate" component={TranslateScreen} />
      {/* Testタブの設定 */}
      <Tab.Screen name="Test" component={TestScreen} />
    </Tab.Navigator>
  );
}
