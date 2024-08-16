import { Icon, SpeedDial } from "@rneui/themed";
import React from "react";
import { colors } from "../../styles/colors";
import { LoadImage } from "../../utils/loadImages";
import SpeedDialIcon from "../atoms/speedDialIcon";

export const SpeedDialComponent: React.FC<{navigation: any}> = ({navigation}) => {

  const [open, setOpen] = React.useState(false);

  const navigateToCreateFlashCard = () => {
    navigation.navigate('CardEditScreen');
  }
  
  return (
    <SpeedDial
      isOpen={open}
      icon={
        <SpeedDialIcon
          source={LoadImage.plusIcon}
          backgroundColor={colors.backgroundTertiary}
          tintColor={colors.iconColorTertiary}
        />
      }
      openIcon={
        <SpeedDialIcon
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
            source={LoadImage.newIcon}
            backgroundColor={colors.backgroundTertiary}
            tintColor={colors.iconColorTertiary}
          />
        }
        onPress={() => navigateToCreateFlashCard()}
      />
      <SpeedDial.Action
        icon={
          <SpeedDialIcon
            source={LoadImage.listIcon}
            backgroundColor={colors.backgroundTertiary}
            tintColor={colors.iconColorTertiary}
          />
        }
        onPress={() => console.log('複数選択・削除')}
      />
      <SpeedDial.Action
        icon={
          <SpeedDialIcon
            source={LoadImage.reloadIcon}
            backgroundColor={colors.backgroundTertiary}
            tintColor={colors.iconColorTertiary}
          />
        }
        onPress={() => console.log('表裏反転')}
      />
    </SpeedDial>
  );
};
