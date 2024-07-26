import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SettingScreen } from "../screens/setting/settingScreen";
import FolderSettingScreen from "../screens/setting/folderSettingScreen";

const SettingStack = createNativeStackNavigator();

export default function SettingNavigator() {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen name="Setting" component={SettingScreen} />
      <SettingStack.Screen
        name="FolderSetting"
        component={FolderSettingScreen}
      />
    </SettingStack.Navigator>
  );
}
