import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SettingScreen } from "../screens/setting/settingScreen";
import FolderSettingScreen from "../screens/setting/folderSettingScreen";
import { TouchableIcon } from "../components/atoms/touchableIcon";
import { LoadImage } from "../utils/loadImages";
import { SettingStackParamList } from "../types/settingNavigation";
import TermsOfServiceScreen from "../screens/setting/termsOfService";
import PrivacyPolicyScreen from "../screens/setting/privacyPolicy";
import AboutScreen from "../screens/setting/about";
import UpgradeScreen from "../screens/setting/upgrade";
import HelpScreen from "../screens/setting/help";
import { useVisibleFolderModal } from "../context/visibleFolderModal";

const SettingStack = createNativeStackNavigator<SettingStackParamList>();

export default function SettingNavigator() {
  const { setIsVisible } = useVisibleFolderModal();

  return (
    <SettingStack.Navigator>
      <SettingStack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={({ navigation }) => ({
          headerTitle: "設定",
          headerRight: () => (
            <TouchableIcon
              imageSource={LoadImage.crossIcon}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
      <SettingStack.Screen
        name="FolderSetting"
        component={FolderSettingScreen}
        options={{
          headerTitle: "フォルダー設定",
          headerRight: () => (
            <TouchableIcon
              imageSource={LoadImage.plusIcon}
              onPress={() => {
                setIsVisible(true);
              }}
            />
          ),
        }}
      />
      <SettingStack.Screen
        name="About"
        component={AboutScreen}
        options={{ headerTitle: "このアプリについて" }}
      />
      <SettingStack.Screen
        name="Upgrade"
        component={UpgradeScreen}
        options={{ headerTitle: "アップグレード" }}
      />
      <SettingStack.Screen
        name="Help"
        component={HelpScreen}
        options={{ headerTitle: "ヘルプ" }}
      />
      <SettingStack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicyScreen}
        options={{ headerTitle: "プライバシーポリシー" }}
      />
    </SettingStack.Navigator>
  );
}
