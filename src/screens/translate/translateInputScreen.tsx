import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';
import { dimensions } from '../../constants/dimensions';
import { useSetSourceText } from '../../context/sourceTextContext'; 
import LanguageSwitch from '../../components/molecules/languageSwitch';
import TranslateInputTemplate from '../../components/templates/translateInputTemplate';
import TranslateInputForm from '../../components/organisms/translateInputForm';
import { TouchableIcon } from '../../components/atoms/touchableIcon';
import { LoadImage } from '../../utils/loadImages';

type TranslateInputScreenProps = {
  navigation: NavigationProp<RootStackParamList>;
};

const TranslateInputScreen: React.FC<TranslateInputScreenProps> = ({ navigation }) => {
  const setSourceText = useSetSourceText();

  const handleTranslatePress = (text: string) => { 
    setSourceText(text); 
    navigation.navigate('TranslateIONavigator', { screen: 'TranslateOutputScreen' });
  };

  return (
    <TranslateInputTemplate>
      <View style={styles.row}>
        <View style={styles.backIcon}>
          <TouchableIcon imageSource={LoadImage.backIcon} onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.languageSwitch}>
          <LanguageSwitch />
        </View>
      </View>
      <TranslateInputForm onEmptyInputGoBack={() => navigation.goBack()} onTranslatePress={handleTranslatePress} />
    </TranslateInputTemplate>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: dimensions.SCREEN_HEIGHT * 0.02,
  },
  backIcon: {
    position: 'absolute',
    left: '0%',
  },
  languageSwitch: {},
});

export default TranslateInputScreen;
