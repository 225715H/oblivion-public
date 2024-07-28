import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopTabNavigator from './topTabNavigator';
import MainHeader from '../components/molecules/mainHeader';
import NavButton from '../components/atoms/navButton';
import { LoadImage } from '../utils/loadImages';
import { TouchableIcon } from '../components/atoms/touchableIcon';
import ChatbotScreen from '../screens/chat/chatbotScreent';
import { SettingScreen } from '../screens/setting/settingScreen';
import { Image } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';

const HomeStack = createNativeStackNavigator();

export default function HomeNavigator() {
    const navigation = useNavigation();
    return (
        <HomeStack.Navigator
            screenOptions={{
            header: () => (
                <MainHeader
                title="OBLIVION"
                leftButton={
                    <NavButton
                    screenName="Setting"
                    imageSource={LoadImage.settingIcon}
                    />
                }
                rightButton={
                    <NavButton
                    screenName="Chatbot"
                    imageSource={LoadImage.chatIcon}
                    />
                }
                />
            ),
            }}
        >
            <HomeStack.Screen
            name="TopTab"
            component={TopTabNavigator}
            />
            <HomeStack.Group screenOptions={{ presentation: "modal" }}>
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
                            onPress={() => navigation.goBack()}
                        />
                        }
                        leftButton={<Image></Image>} 
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
                            onPress={() => navigation.goBack()}
                        />
                        }
                        leftButton={<Image></Image>} 
                    />
                    ),
                }}
                />
            </HomeStack.Group>
        </HomeStack.Navigator>
    );
}
