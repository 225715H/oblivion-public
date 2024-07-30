import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopTabNavigator from './topTabNavigator';
import MainHeader from '../components/molecules/mainHeader';
import { LoadImage } from '../utils/loadImages';
import { TouchableIcon } from '../components/atoms/touchableIcon';
import { HomeStackParamList } from '../types/navigation';
import { SettingScreen } from '../screens/setting/settingScreen';
import ChatbotScreen from '../screens/chat/chatBotScreen';
import { Image } from 'react-native';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeNavigator() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="TopTab"
                component={TopTabNavigator}
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
            <HomeStack.Group screenOptions={{ presentation: 'modal' }}>
                <HomeStack.Screen
                    name="Setting"
                    component={SettingScreen}
                    options={({ navigation }) => ({
                        header: () => (
                            <MainHeader
                                title="Setting"
                                rightButton={
                                    <TouchableIcon
                                        imageSource={LoadImage.crossIcon}
                                        onPress={() => navigation.goBack()}
                                    />
                                }
                                leftButton={<Image />}
                            />
                        ),
                    })}
                />
                <HomeStack.Screen
                    name="Chatbot"
                    component={ChatbotScreen}
                    options={({ navigation }) => ({
                        header: () => (
                            <MainHeader
                                title="Chatbot"
                                rightButton={
                                    <TouchableIcon
                                        imageSource={LoadImage.crossIcon}
                                        onPress={() => navigation.goBack()}
                                    />
                                }
                                leftButton={<Image />}
                            />
                        ),
                    })}
                />
            </HomeStack.Group>
        </HomeStack.Navigator>
    );
}
