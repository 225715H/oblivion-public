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
          headerTitle: "Setting",
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
        name="TermsOfService"
        component={TermsOfServiceScreen}
      />
      <SettingStack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicyScreen}
      />
      <SettingStack.Screen name="About" component={AboutScreen} />
      <SettingStack.Screen name="Upgrade" component={UpgradeScreen} />
      <SettingStack.Screen name="Help" component={HelpScreen} />
    </SettingStack.Navigator>
  );
}
