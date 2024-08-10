import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TranslateStackParamList } from '../types/navigation';
import TranslateScreen from '../screens/translate/translateScreen';
import SettingNavigator from './settingNavigator';

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
