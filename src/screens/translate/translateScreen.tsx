import React from 'react'; 
import { NavigationProp, useNavigation } from '@react-navigation/native'; 
import TranslationScreenContent from '../../components/organisms/translateScreenContent';
import { RootStackParamList } from '../../types/navigation';

// 翻訳画面コンポーネントの定義
const TranslationScreen = () => {
  // ナビゲーションフックを使用して画面遷移を管理
  const navigation = useNavigation(); 

  // テキストを入力する画面に遷移する関数
  const handleTextPress = () => {
    navigation.navigate('TranslateInput');
  };

  return <TranslationScreenContent handleTextPress={handleTextPress} />;
};

export default TranslationScreen;
