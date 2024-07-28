import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TranslateStackParamList } from '../types/navigation';
import TranslateScreen from '../screens/translate/translateScreen';
import TranslateInput from '../screens/translate/translateInput';
import { SourceLanguageProvider } from '../context/sourceLanguageContext';
import { TargetLanguageProvider } from '../context/targetLanguageContext';
import MainHeader from '../components/molecules/mainHeader';
import { TouchableIcon } from '../components/atoms/touchableIcon';
import ChatbotScreen from '../screens/chat/chatbotScreent';
import { SettingScreen } from '../screens/setting/settingScreen';
import { Image } from 'react-native';
import { LoadImage } from '../utils/loadImages';

const TranslateStack = createNativeStackNavigator<TranslateStackParamList>();

export default function TranslateNavigator() {
  const navigation = useNavigation<NavigationProp<TranslateStackParamList>>();

  return (
    <SourceLanguageProvider>
      <TargetLanguageProvider>
        <TranslateStack.Navigator>
          <TranslateStack.Screen 
            name="TranslateScreen"  
            component={TranslateScreen}
            options={{
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
          />
          <TranslateStack.Screen name="TranslateInput" component={TranslateInput} />

          <TranslateStack.Group screenOptions={{ presentation: "modal" }}>
            <TranslateStack.Screen
              name="Setting"
              component={SettingScreen}
              options={{
                header: () => (
                  <MainHeader
                    title="Setting"
                    rightButton={
                      <TouchableIcon
                        imageSource={LoadImage.crossIcon}
                        onPress={() => navigation.navigate('TranslateScreen')}
                      />
                    }
                    leftButton={<Image></Image>} 
                  />
                ),
              }}
            />
            <TranslateStack.Screen
              name="Chatbot"
              component={ChatbotScreen}
              options={{
                header: () => (
                  <MainHeader
                    title="Chatbot"
                    rightButton={
                      <TouchableIcon
                        imageSource={LoadImage.crossIcon}
                        onPress={() => navigation.navigate('TranslateScreen')}
                      />
                    }
                    leftButton={<Image></Image>} 
                  />
                ),
              }}
            />
          </TranslateStack.Group>
        </TranslateStack.Navigator>
      </TargetLanguageProvider>
    </SourceLanguageProvider>
  );
}
