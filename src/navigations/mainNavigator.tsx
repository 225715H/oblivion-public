import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./bottomTabNavigator";
import { RootStackParamList } from "../types/navigation";
import TranslateIONavigator from "./translateIONavigator";
import CardEditNavigator from "./cardEditNavigator";

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
        name="TranslateIONavigator" 
        component={TranslateIONavigator} 
        options={{
          animationDuration: 15,
          animation: 'none',
        }}
      />
      <Stack.Screen
        name='CardEditNavigator'
        component={CardEditNavigator}
        options={{
          animationDuration: 15,
          animation: 'none',
        }}
      />
    </Stack.Navigator>
  );
}
