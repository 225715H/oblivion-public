import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import TranslateScreenContent from '../../components/organisms/translateScreenContent';
import { RootStackParamList, TranslateStackParamList } from '../../types/navigation';

// 翻訳画面コンポーネントの定義
const TranslateScreen: React.FC = () => {
  // ナビゲーションフックを使用して画面遷移を管理
  const navigation = useNavigation<NavigationProp<TranslateStackParamList>>();

  // テキストを入力する画面に遷移する関数
  const handleTextPress = () => {
    navigation.navigate('TranslateInput');
  };

  return <TranslateScreenContent handleTextPress={handleTextPress} />;
};

export default TranslateScreen;
