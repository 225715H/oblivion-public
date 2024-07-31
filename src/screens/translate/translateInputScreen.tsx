import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';
import { colors } from '../../styles/colors';
import LanguageSwitch from '../../components/molecules/languageSwitch';
import { TouchableIcon } from '../../components/atoms/touchableIcon';
import { LoadImage } from '../../utils/loadImages';

type TranslateInputScreenProps = {
  navigation: NavigationProp<RootStackParamList>;
};

const TranslateInputScreen: React.FC<TranslateInputScreenProps> = ({ navigation }) => {
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.backIcon}>
            <TouchableIcon imageSource={LoadImage.backIcon} onPress={handleGoBack} />
          </View>
          <View style={styles.languageSwitch}>
            <LanguageSwitch />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 16, // 画面上部に表示されるようにパディングを追加
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: "blue",
    backgroundColor: colors.backgroundPrimary,
    width: '100%',
  },
  backIcon: {
    position: 'absolute',
    left: "3%",
  },
  languageSwitch: {
  },
  text: {
    fontSize: 20,
    color: colors.textPrimary,
  },
});

export default TranslateInputScreen;
