import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./bottomTabNavigator";
import { RootStackParamList } from "../types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function MainNavigator() {
  return (
    <Stack.Navigator 
      screenOptions={{ 
          headerShown: false,
          gestureDirection: 'vertical',
        }}>
      <Stack.Screen name="OBLIVION" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}
