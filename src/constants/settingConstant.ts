import { SettingStackParamList } from "../types/settingNavigation";

type SettingNavigationListType = {
    title: string;
    screenName: keyof SettingStackParamList;
}

export const SettingNavigationList: SettingNavigationListType[] = [
  {
    title: "フォルダー設定",
    screenName: "FolderSetting",
  },
  {
    title: "利用規約",
    screenName: "TermsOfService",
  },
  {
    title: "プライバシーポリシー",
    screenName: "PrivacyPolicy",
  },
  {
    title: "このアプリについて",
    screenName: "About",
  },
  {
    title: "アップグレード",
    screenName: "Upgrade",
  },
  {
    title: "ヘルプ",
    screenName: "Help",
  },
];