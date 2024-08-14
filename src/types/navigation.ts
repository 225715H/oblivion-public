import { NavigatorScreenParams } from "@react-navigation/native";

// トップタブのパラメータリストの型定義
export type TopTabParamList = {
  Recommend: undefined;
  Library: undefined;
};

// ホームスタックのパラメータリストの型定義
export type HomeStackParamList = {
  TopTab: undefined;
  Setting: undefined;
  Chat: undefined;
  CardEditScreen: undefined;
};

// 翻訳スタックのパラメータリストの型定義
export type TranslateStackParamList = {
  TranslateScreen: undefined;
  TranslateInput: undefined;
  TranslateOutput: undefined;
  Setting: undefined;
  Chat: undefined;
};

//  テストスタックのパラメータリストの型定義
export type TestStackParamList = {
  TestScreen: undefined;
  Setting: undefined;
  Chat: undefined;
  TestStudy: undefined;
};

// ボトムタブのパラメータリストの型定義
export type TabParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Translate: NavigatorScreenParams<TranslateStackParamList>;
  Test: undefined;
};

// ルートスタックのパラメータリストの型定義
export type RootStackParamList = {
  OBLIVION: NavigatorScreenParams<TabParamList>;
  CardEditNavigator: { screen: string };
  ChatNavigator: { screen: string };
};
