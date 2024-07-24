import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import NavButton from '../atoms/navButton';
import { styles } from './mainHeaderStyles';

// MainHeaderコンポーネントのプロパティの型定義
interface MainHeaderProps {
  title: string;
  leftButton?: React.ReactNode; // 左側のボタンコンポーネント
  rightButton?: React.ReactNode; // 右側のボタンコンポーネント
}

// MainHeaderコンポーネントの定義
const MainHeader: React.FC<MainHeaderProps> = ({ title, leftButton, rightButton }) => {
  return (
    <View style={styles.header}>
      {leftButton ? leftButton : <NavButton screenName="Login" imageSource={require("../../../assets/logos/user.png")} iconSize={32} />}
      <Text style={styles.title}>{title}</Text>
      {rightButton ? rightButton : <NavButton screenName="Setting" imageSource={require("../../../assets/logos/setting.png")} iconSize={30} />}
    </View>
  );
};

export default MainHeader;
