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

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeNavigator() {
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
              // rightButton={
              //   <TouchableIcon
              //     imageSource={LoadImage.chatIcon}
              //     onPress={() =>
              //       navigation.navigate("ChatNavigator", {
              //         screen: "Chat",
              //       })
              //     }
              //     padding={8}
              //   />
              // }
            />
          ),
        })}
      />
      <HomeStack.Screen
        name="CardEditScreen"
        component={CardEditScreen}
        options={({ navigation }) => ({
          presentation: "fullScreenModal",
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
      <HomeStack.Group screenOptions={{ presentation: "modal" }}>
        <HomeStack.Screen
          name="Setting"
          component={SettingNavigator}
          options={{ headerShown: false }}
        />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
}
