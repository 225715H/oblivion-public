import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { ListItem } from "@rneui/themed";
import { SettingNavigationList } from "../../constants/settingConstant";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { SettingStackParamList } from "../../types/settingNavigation";

// ホームスクリーンコンポーネント
export const SettingScreen = ({ navigation }: { navigation: any }) => {
  const list = SettingNavigationList;

  return (
    <View>
      {list.map((l, i) => (
        <ListItem
          key={i}
          onPress={() => {
            navigation.navigate(l.screenName);
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
