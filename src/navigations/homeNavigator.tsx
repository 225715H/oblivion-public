import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TopTabNavigator from "./topTabNavigator";
import MainHeader from "../components/molecules/mainHeader";
import { LoadImage } from "../utils/loadImages";
import { TouchableIcon } from "../components/atoms/touchableIcon";
import { HomeStackParamList } from "../types/navigation";
import SettingNavigator from "./settingNavigator";
import CardEditScreen from "../screens/cardEdit/cardEdit";
import { useCardEdit } from "../context/cardEditContext";
import FolderSettingScreen from "../screens/setting/folderSettingScreen";
import { useVisibleFolderModal } from "../context/visibleFolderModal";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../styles/colors";
import { dimensions } from "../constants/dimensions";

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeNavigator() {
  const { setIsVisible } = useVisibleFolderModal();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="TopTab"
        component={TopTabNavigator}
        options={({ navigation }) => ({
          header: () => (
            <MainHeader
              title="OBLIVION"
              leftButton={
                <TouchableIcon
                  imageSource={LoadImage.settingIcon}
                  onPress={() => navigation.navigate("Setting")}
                  padding={8}
                />
              }
              rightButton={
                <TouchableIcon
                  imageSource={LoadImage.checkedFolderIcon}
                  onPress={() => navigation.navigate("FolderSetting")}
                  padding={8}
                />
              }
            />
          ),
        })}
      />

      <HomeStack.Group screenOptions={{ presentation: "fullScreenModal" }}>
        <HomeStack.Screen
          name="CardEditScreen"
          component={CardEditScreen}
          options={({ navigation }) => ({
            animation: "none",
            headerTitle: "カードの追加・編集",
            headerRight: () => (
              <TouchableIcon
                imageSource={LoadImage.crossIcon}
                onPress={() => {
                  navigation.goBack();
                }}
                backgroundColor="transparent"
              />
            ),
          })}
        />
        <HomeStack.Screen
          name="Setting"
          component={SettingNavigator}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="FolderSetting"
          component={FolderSettingScreen}
          options={({ navigation }) => ({
            animation: "none",
            headerTitle: "フォルダー設定",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Text style={styles.backText}>戻る</Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableIcon
                imageSource={LoadImage.plusIcon}
                onPress={() => {
                  setIsVisible(true);
                }}
              />
            ),
          })}
        />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
}

const styles = StyleSheet.create({
  backText: {
    color: colors.textTertiary,
    fontSize: dimensions.SCREEN_WIDTH * 0.04,
  },
});
