import { View, Text } from "react-native";
import React from "react";
import { ListItem } from "@rneui/themed";
import { SettingNavigationList } from "../../constants/settingConstant";
import { useNavigationScreen } from "../../hooks/navigationScreen";

// ホームスクリーンコンポーネント
export const SettingScreen = () => {
  const list = SettingNavigationList;
  const navigateTo = useNavigationScreen();
  return (
    <View>
      {list.map((l, i) => (
        <ListItem
          key={i}
          onPress={() => {
            navigateTo(l.screenName);
          }}
        >
          <ListItem.Content>
            <ListItem.Title>{l.title}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
};
