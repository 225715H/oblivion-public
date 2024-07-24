import { StyleSheet, Platform } from "react-native";
import { colors } from "../../styles/colors";

export const speedDialStyles = StyleSheet.create({
  iconImage: {
    width: 24,
    height: 24,
    tintColor: colors.backgroundPrimary,
  },
  iconImageClose: {
    width: 24,
    height: 24,
    tintColor: colors.iconColorSecondary,
  },
});
