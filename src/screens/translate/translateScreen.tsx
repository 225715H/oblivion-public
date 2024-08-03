import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import TranslateScreenContent from '../../components/organisms/translateScreenContent';
import { RootStackParamList } from '../../types/navigation';

// 翻訳画面コンポーネントの定義
type TranslateScreenProps = {
  navigation: NavigationProp<RootStackParamList>;
};

const TranslateScreen: React.FC<TranslateScreenProps> = ({ navigation }) => {
  // テキストを入力する画面に遷移する関数
  const handleTextPress = () => {
    navigation.navigate('TranslateIONavigator', { screen: 'TranslateInputScreen' });
  };

  return <TranslateScreenContent handleTextPress={handleTextPress} />;
};

export default TranslateScreen;
