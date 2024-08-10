import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Platform } from 'react-native';
import { colors } from '../../styles/colors';
import { dimensions } from '../../constants/dimensions';

// MainHeaderコンポーネントのプロパティの型定義
interface MainHeaderProps {
  title: string;
  leftButton?: React.ReactNode; // 左側のボタンコンポーネント（省略可能）
  rightButton?: React.ReactNode; // 右側のボタンコンポーネント（省略可能）
}

// MainHeaderコンポーネントの定義
const MainHeader: React.FC<MainHeaderProps> = ({ title, leftButton, rightButton }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.leftContainer}>
          {leftButton}
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightContainer}>
          {rightButton}
        </View>
      </View>
    </SafeAreaView>
  );
};

// スクリーンの幅と高さを取得
const SCREEN_WIDTH = dimensions.SCREEN_WIDTH;
const SCREEN_HEIGHT = dimensions.SCREEN_HEIGHT;

// スタイルの定義
const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.backgroundPrimary, // SafeAreaViewの背景色を設定
  },
  header: {
    flexDirection: 'row', // 子要素を横方向に配置
    alignItems: 'center', // 子要素を縦方向の中央に揃える
    justifyContent: 'space-between', // 子要素の間にスペースを均等に配置
    backgroundColor: colors.backgroundPrimary, // ヘッダーの背景色を設定
    paddingHorizontal: SCREEN_WIDTH * 0.04, // ヘッダーの左右に画面幅の4%のパディングを追加
    height: SCREEN_HEIGHT * 0.07, // カスタムヘッダーの高さを画面高さの7%に設定
  },
  leftContainer: {
    flex: 1, // 左コンテナが余分なスペースを占める
    alignItems: 'flex-start', // 左端に配置
  },
  titleContainer: {
    flex: 2, // タイトルコンテナがより多くのスペースを占める
    alignItems: 'center', // 中央に配置
  },
  rightContainer: {
    flex: 1, // 右コンテナが余分なスペースを占める
    alignItems: 'flex-end', // 右端に配置
  },
  title: {
    fontSize: SCREEN_WIDTH * 0.05, // タイトルのフォントサイズを画面幅の5%に設定
    fontWeight: 'bold', // タイトルのフォントウェイトを太字に設定
    color: colors.textPrimary, // タイトルの色を設定
  },
});

export default MainHeader;
