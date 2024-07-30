import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./bottomTabNavigator";
import { RootStackParamList } from "../types/navigation";
import TranslateIONavigator from "./translateIONavigator";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function MainNavigator() {
  return (
    <Stack.Navigator 
      screenOptions={{ 
          headerShown: false,
          gestureDirection: 'vertical',
          // animation: 'none',
        }}>
      <Stack.Screen name="OBLIVION" component={BottomTabNavigator} />
      <Stack.Screen 
        name="TranslateIONavigator" 
        component={TranslateIONavigator} 
        options={{animation: 'none'}}
      />
    </Stack.Navigator>
  );
}
