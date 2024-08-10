import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TranslateStackParamList } from '../types/navigation';
import TranslateScreen from '../screens/translate/translateScreen';
import SettingNavigator from './settingNavigator';
import ChatNavigator from './chatNavigator';

const TranslateStack = createNativeStackNavigator<TranslateStackParamList>();

export default function TranslateNavigator() {
    return (
        <TranslateStack.Navigator>
            <TranslateStack.Screen
                name="TranslateScreen"
                component={TranslateScreen}
                options={{
                    headerShown: false,
                }}
            />            
            <TranslateStack.Screen
                name="Chat"
                component={ChatNavigator}
                options={{
                    headerShown: false, 
                    presentation: "fullScreenModal",
                }}
            />
            <TranslateStack.Group screenOptions={{ presentation: 'modal' }}>
                <TranslateStack.Screen
                    name="Setting"
                    component={SettingNavigator}
                    options={{ headerShown: false }}
                />
            </TranslateStack.Group>
        </TranslateStack.Navigator>
    );
}
