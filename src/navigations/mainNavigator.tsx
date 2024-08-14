import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./bottomTabNavigator";
import { RootStackParamList } from "../types/navigation";
import CardEditNavigator from "./cardEditNavigator";
import ChatNavigator from "./chatNavigator";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function MainNavigator() {
  return (
    <Stack.Navigator 
      screenOptions={{ 
          headerShown: false,
          gestureDirection: 'vertical',
        }}>
      <Stack.Screen name="OBLIVION" component={BottomTabNavigator} />
      <Stack.Screen
        name='CardEditNavigator'
        component={CardEditNavigator}
        options={{
          animationDuration: 15,
          animation: 'none',
        }}
      />
      <Stack.Screen
        name='ChatNavigator'
        component={ChatNavigator}
        options={{
          animationDuration: 150,
          animation: 'simple_push',
          gestureDirection: 'horizontal',
        }}
      />
    </Stack.Navigator>
  );
}
