import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigations/mainNavigator';
import { TopContextProvider } from './src/context/topContext';

export default function App() {
  return (
    <TopContextProvider>
      <NavigationContainer
        // スタックナビゲーションの状態をコンソールに出力
        onStateChange={(state) => {
          console.log('Current navigation state:', JSON.stringify(state, null, 2));
        }}
      >
        <MainNavigator />
      </NavigationContainer>
    </TopContextProvider>
  );
}
