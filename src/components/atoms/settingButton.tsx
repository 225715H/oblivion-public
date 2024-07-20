// 画面遷移を行うボタンのコンポーネント
import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const ScreenMoveButton = ({ screenName, imageSource }: {screenName: string, imageSource: any}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
      <Image source={imageSource} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});