import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import RecommendScreen from "../screens/home/recommendScreen";
import LibraryScreen from "../screens/home/libraryScreen";

// タブナビゲーターを作成
const Tab = createMaterialTopTabNavigator();

// TopTabNavigatorコンポーネントの定義
export default function TopTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Recommend"
        component={RecommendScreen}
        options={{ title: "おすすめ" }}
      />
      <Tab.Screen
        name="Setting"
        component={LibraryScreen}
        options={{ title: "ライブラリ" }}
      />
    </Tab.Navigator>
  );
}
