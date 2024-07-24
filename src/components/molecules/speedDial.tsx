import { Icon, SpeedDial } from "@rneui/themed";
import React from "react";
import { Image, View } from "react-native";
import { colors } from "../../styles/colors";
import { LoadImage } from "../../utils/loadImages";
import { ImageSourcePropType } from "react-native";
import SpeedDialIcon from "../atoms/speedDialIcon";

export const SpeedDialComponent = () => {

  const [open, setOpen] = React.useState(false);
  return (
    <SpeedDial
      isOpen={open}
      icon={
        <SpeedDialIcon
          size={20}
          source={LoadImage.plusIcon}
          backgroundColor={colors.backgroundQuaternary}
          tintColor={colors.iconColorTertiary}
        />
      }
      openIcon={
        <SpeedDialIcon
          size={20}
          source={LoadImage.crossIcon}
          backgroundColor={colors.backgroundPrimary}
          tintColor={colors.iconColorSecondary}
        />
      }
      onOpen={() => setOpen(!open)}
      onClose={() => setOpen(!open)}
      overlayColor="rgba(0, 0, 0, 0.2)"
      transitionDuration={80}
    >
      <SpeedDial.Action
        icon={
          <SpeedDialIcon
            size={20}
            source={LoadImage.newIcon}
            backgroundColor={colors.backgroundQuaternary}
            tintColor={colors.iconColorTertiary}
          />
        }
        onPress={() => console.log('Add Something')}
      />
      <SpeedDial.Action
        icon={
          <SpeedDialIcon
            size={20}
            source={LoadImage.listIcon}
            backgroundColor={colors.backgroundQuaternary}
            tintColor={colors.iconColorTertiary}
          />
        }
        onPress={() => console.log('Delete Something')}
      />
      <SpeedDial.Action
        icon={
          <SpeedDialIcon
            size={20}
            source={LoadImage.reloadIcon}
            backgroundColor={colors.backgroundQuaternary}
            tintColor={colors.iconColorTertiary}
          />
        }
        onPress={() => console.log('Delete Something')}
      />
    </SpeedDial>
  );
};
