import React from 'react'; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TranslateIONavigatorStackParamList } from "../types/navigation";
import TranslateOutputScreen from '../screens/translate/translateOutputScreen';
import { colors } from '../styles/colors';

const TranslateIONavigatorStack = createNativeStackNavigator<TranslateIONavigatorStackParamList>();

export default function TranslateIONavigator() {
    return (
        <TranslateIONavigatorStack.Navigator 
            initialRouteName="TranslateOutputScreen"
            screenOptions={{ 
            }}
        >
            <TranslateIONavigatorStack.Screen 
                name="TranslateOutputScreen" 
                component={TranslateOutputScreen} 
                options={{
                    headerShown: false,
                }}
            />
        </TranslateIONavigatorStack.Navigator>
    );
}
