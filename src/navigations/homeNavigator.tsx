import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopTabNavigator from './topTabNavigator';
import MainHeader from '../components/molecules/mainHeader';
import { LoadImage } from '../utils/loadImages';
import { TouchableIcon } from '../components/atoms/touchableIcon';
import ChatbotScreen from '../screens/chat/chatbotScreent';
import { SettingScreen } from '../screens/setting/settingScreen';
import { Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { HomeStackParamList, RootStackParamList } from '../types/navigation';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeNavigator() {
    const navigation = useNavigation<NavigationProp<HomeStackParamList>>();

    return (
        <HomeStack.Navigator
            screenOptions={{
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
            }}
        >
            <HomeStack.Screen name="TopTab" component={TopTabNavigator} />
            <HomeStack.Group screenOptions={{ presentation: 'modal' }}>
                <HomeStack.Screen
                    name="Setting"
                    component={SettingScreen}
                    options={{
                        header: () => (
                            <MainHeader
                                title="Setting"
                                rightButton={
                                    <TouchableIcon
                                        imageSource={LoadImage.crossIcon}
                                        onPress={() => navigation.navigate('TopTab')}
                                    />
                                }
                                leftButton={<Image />}
                            />
                        ),
                    }}
                />
                <HomeStack.Screen
                    name="Chatbot"
                    component={ChatbotScreen}
                    options={{
                        header: () => (
                            <MainHeader
                                title="Chatbot"
                                rightButton={
                                    <TouchableIcon
                                        imageSource={LoadImage.crossIcon}
                                        onPress={() => navigation.navigate('TopTab')}
                                    />
                                }
                                leftButton={<Image />}
                            />
                        ),
                    }}
                />
            </HomeStack.Group>
        </HomeStack.Navigator>
    );
}
