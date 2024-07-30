import React from 'react'; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TranslateIONavigatorStackParamList } from "../types/navigation";
import TranslateInputScreen from "../screens/translate/translateInputScreen";

const TranslateIONavigatorStack = createNativeStackNavigator<TranslateIONavigatorStackParamList>();

export default function TranslateIONavigator() {
    return (
        <TranslateIONavigatorStack.Navigator initialRouteName="TranslateInputScreen">
            <TranslateIONavigatorStack.Screen
                name="TranslateInputScreen"
                component={TranslateInputScreen}
                options={{ headerShown: false }}
            />
        </TranslateIONavigatorStack.Navigator>
    );
}
