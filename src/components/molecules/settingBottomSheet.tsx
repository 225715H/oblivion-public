import React, { useState } from "react";
import { BottomSheet, Button, ListItem } from "@rneui/themed";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SettingNavigationList } from "../../constants/settingConstant";
import { useNavigationScreen } from "../../hooks/navigationScreen";

type BottomSheetComponentProps = {
    isVisible: boolean;
    onClose: () => void;
};

const BottomSheetComponent: React.FunctionComponent<
  BottomSheetComponentProps
> = ({isVisible, onClose}) => {
  const list = SettingNavigationList;
  const navigateTo = useNavigationScreen();

  return (
    <BottomSheet
      modalProps={{}}
      isVisible={isVisible}
      onBackdropPress={onClose}
    >
      {list.map((l, i) => (
        <ListItem
          key={i}
          style={styles.itemContainer}
          onPress={() => {
            navigateTo(l.screenName);
          }}
        >
          <ListItem.Content>
            <ListItem.Title style={styles.titleStyle}>{l.title}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  titleStyle: {
    fontSize: 20,
  },
  itemContainer: {
    padding: 10,
  },
});

export default BottomSheetComponent;
