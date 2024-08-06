import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TranslateStackParamList } from '../types/navigation';
import TranslateScreen from '../screens/translate/translateScreen';
import { SourceLanguageProvider } from '../context/sourceLanguageContext';
import { TargetLanguageProvider } from '../context/targetLanguageContext';
import MainHeader from '../components/molecules/mainHeader';
import { TouchableIcon } from '../components/atoms/touchableIcon';
import { LoadImage } from '../utils/loadImages';
import ChatBotScreen from '../screens/chat/chatBotScreen';
import { Image } from 'react-native';
import SettingNavigator from './settingNavigator';

const TranslateStack = createNativeStackNavigator<TranslateStackParamList>();

export default function TranslateNavigator() {
    return (
        <TranslateStack.Navigator>
            <TranslateStack.Screen
                name="TranslateScreen"
                component={TranslateScreen}
                options={({ navigation }) => ({
                    header: () => (
                        <MainHeader
                            title="OBLIVION"
                            leftButton={
                                <TouchableIcon
                                    imageSource={LoadImage.settingIcon}
                                    onPress={() => navigation.navigate('Setting')}
                                />
                            }
                            rightButton={
                                <TouchableIcon
                                    imageSource={LoadImage.chatIcon}
                                    onPress={() => navigation.navigate('Chatbot')}
                                />
                            }
                        />
                    ),
                })}
            />
            {/* <TranslateStack.Screen name="TranslateInput" component={TranslateInput} /> */}

            <TranslateStack.Group screenOptions={{ presentation: 'modal' }}>
                <TranslateStack.Screen
                    name="Setting"
                    component={SettingNavigator}
                    options={{ headerShown: false }}
                />
                <TranslateStack.Screen
                    name="Chatbot"
                    component={ChatBotScreen}
                    options={({ navigation }) => ({
                      headerTitle: "Chatbot",
                      headerRight: () => (
                        <TouchableIcon
                          imageSource={LoadImage.crossIcon}
                          onPress={() => navigation.goBack()}
                        />
                      ),
                    })}
                />
            </TranslateStack.Group>
        </TranslateStack.Navigator>
    );
}
