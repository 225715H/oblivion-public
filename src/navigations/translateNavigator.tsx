import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TranslateScreen from "../screens/translate/translateScreen";
import TranslateInput from "../screens/translate/translateInput";

const TranslateStack = createNativeStackNavigator();

export default function TranslateNavigator() {
  return (
    <TranslateStack.Navigator screenOptions={{headerShown: false}}>
      {/* <TranslateStack.Screen name="Translate" component={TranslateScreen} /> */}
      <TranslateStack.Screen name="TranslateInput" component={TranslateInput} />
    </TranslateStack.Navigator>
  );
}
