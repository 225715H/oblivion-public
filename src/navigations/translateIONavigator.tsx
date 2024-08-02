import React from 'react'; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TranslateIONavigatorStackParamList } from "../types/navigation";
import TranslateOutputScreen from '../screens/translate/translateOutputScreen';
import { colors } from '../styles/colors';

const TranslateIONavigatorStack = createNativeStackNavigator<TranslateIONavigatorStackParamList>();

export default function TranslateIONavigator() {
    return (
        <TranslateIONavigatorStack.Navigator 
            initialRouteName="TranslateInputScreen"
            screenOptions={{ 
            }}
        >
            <TranslateIONavigatorStack.Screen 
                name="TranslateOutputScreen" 
                component={TranslateOutputScreen} 
                options={{
                    animationDuration: 150,
                    animation: 'fade',
                    headerBackTitle: '翻訳',
                    // headerShadowVisible: false,
                    headerTintColor: colors.textPrimary,
                    // headerLargeTitle: true,
                    headerTitle: '翻訳結果',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {fontSize: 24},
                }}
            />
        </TranslateIONavigatorStack.Navigator>
    );
}
