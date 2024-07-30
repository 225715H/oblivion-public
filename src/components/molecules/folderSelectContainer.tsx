import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { colors } from "../../styles/colors";
import { dimensions } from "../../constants/dimensions";
import { LoadImage } from "../../utils/loadImages";
import { Switch } from "@rneui/themed";
import { TouchableIcon } from "../atoms/touchableIcon";

const MENU_POSITION_THRESHOLD = 0.7;

export const FolderSelectContainer = ({
  folderName,
}: {
  folderName: string;
}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState<"top" | "bottom">("bottom");
  const cardRef = useRef<View>(null);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const openMenu = () => {
    if (cardRef.current) {
      cardRef.current.measure((x, y, width, height, pageX, pageY) => {
        const screenHeight = Dimensions.get("window").height;
        const cardBottom = pageY + height;
        setMenuPosition(cardBottom > screenHeight * MENU_POSITION_THRESHOLD ? "top" : "bottom");
      });
    }
    setVisible(true);
  };
  const closeMenu = () => setVisible(false);

  const renderOptionsMenu = () => (
    <View
      style={[
        styles.optionsMenu,
        menuPosition === "top" ? styles.optionsMenuTop : styles.optionsMenuBottom,
      ]}
    >
      <TouchableOpacity
        onPress={() => {
          console.log("名前の変更");
          closeMenu();
        }}
        style={styles.optionButton}
      >
        <Text style={styles.optionText}>名前の変更</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("削除");
          closeMenu();
        }}
        style={styles.optionButton}
      >
        <Text style={styles.optionText}>削除</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container} ref={cardRef}>
      <Text>{folderName}</Text>
      <Switch
        trackColor={{ true: colors.iconColorSecondary }}
        thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <TouchableIcon imageSource={LoadImage.plusIcon} onPress={openMenu} />
      {visible && renderOptionsMenu()}
    </View>
  );
};

const SCREEN_WIDTH = dimensions.SCREEN_WIDTH;
const SCREEN_HEIGHT = dimensions.SCREEN_HEIGHT;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.backgroundPrimary,
    width: SCREEN_WIDTH * 0.8, // 80% of screen width
    height: SCREEN_HEIGHT * 0.08, // 8% of screen height
    borderRadius: 10,
    paddingHorizontal: SCREEN_WIDTH * 0.05, // 5% of screen width
    marginVertical: SCREEN_HEIGHT * 0.005, // smaller margin for closer spacing
  },
  text: {
    flex: 1, // take up the remaining space
    fontSize: 16, // adjust as needed
    color: colors.textPrimary, // adjust as needed
  },
  optionsMenu: {
    position: "absolute",
    right: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    zIndex: 3,
    width: SCREEN_WIDTH * 0.4, // Adjust the width as needed
  },
  optionsMenuTop: {
    bottom: 60, // Adjust this value as needed
  },
  optionsMenuBottom: {
    top: 60, // Adjust this value as needed
  },
  optionButton: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  optionText: {
    fontSize: 16,
  },
});

