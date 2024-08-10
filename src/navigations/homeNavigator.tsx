import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TopTabNavigator from "./topTabNavigator";
import MainHeader from "../components/molecules/mainHeader";
import { LoadImage } from "../utils/loadImages";
import { TouchableIcon } from "../components/atoms/touchableIcon";
import { HomeStackParamList } from "../types/navigation";
import SettingNavigator from "./settingNavigator";
import ChatNavigator from "./chatNavigator";

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
                />
              }
              rightButton={
                <TouchableIcon
                  imageSource={LoadImage.chatIcon}
                  onPress={() => navigation.navigate("Chat")}
                />
              }
            />
          ),
        })}
      />
      <HomeStack.Screen
        name="Chat"
        component={ChatNavigator}
        options={{
          headerShown: false, 
          presentation: "fullScreenModal",
        }}
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
