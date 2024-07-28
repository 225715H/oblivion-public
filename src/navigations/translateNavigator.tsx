import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TranslateScreen from '../screens/translate/translateScreen';
import TranslateInput from '../screens/translate/translateInput';
import { SourceLanguageProvider } from '../context/sourceLanguageContext';
import { TargetLanguageProvider } from '../context/targetLanguageContext';

const TranslateStack = createNativeStackNavigator();

export default function TranslateNavigator() {
  return (
    <SourceLanguageProvider>
      <TargetLanguageProvider>
        <TranslateStack.Navigator initialRouteName='TranslateScreen' >
          <TranslateStack.Screen name="TranslateScreen" component={TranslateScreen} />
          <TranslateStack.Screen name="TranslateInput" component={TranslateInput} />
        </TranslateStack.Navigator>
      </TargetLanguageProvider>
    </SourceLanguageProvider>
  );
}
