import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";
import { SettingStackParamList } from "../types/settingNavigation";
import { RootStackParamList } from "../types/navigation";

type CombinedStackParamList = SettingStackParamList & RootStackParamList;

export const useNavigationScreen = () => {
  const navigation = useNavigation<NavigationProp<CombinedStackParamList>>();

  // 画面遷移を行う関数を返す
  const navigateToScreen = (screenName: keyof CombinedStackParamList) => {
    navigation.navigate(screenName as any);
  };

  return navigateToScreen;
};
