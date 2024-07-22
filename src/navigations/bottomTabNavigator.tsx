import React from "react";
import { Image, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/homeScreen";
import TestScreen from "../screens/test/testScreen";
import TranslateScreen from "../screens/translate/translateScreen";
import { colors } from "../styles/colors";

// プラットフォームに基づくデフォルトのタブバー高さ
const DEFAULT_TABBAR_HEIGHT = Platform.OS === 'ios' ? 49 : 56;
// タブバーの高さの倍率
const CUSTOM_TABBAR_HEIGHT_MULTIPLIER = 1.8;
// アイコンのサイズの倍率
const ICON_SIZE_MULTIPLIER = 1.5;

// カスタムタブバー高さを計算
const CUSTOM_TABBAR_HEIGHT = DEFAULT_TABBAR_HEIGHT * CUSTOM_TABBAR_HEIGHT_MULTIPLIER;

// アイコンの色を設定
const ICON_COLOR_ACTIVE = colors.iconColorSecondary
const ICON_COLOR_INACTIVE = colors.iconColorPrimary

// タブナビゲーターを作成
const Tab = createBottomTabNavigator();

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
        tabBarActiveTintColor: ICON_COLOR_ACTIVE,
        // 非アクティブなタブのアイコンの色
        tabBarInactiveTintColor: ICON_COLOR_INACTIVE,
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
