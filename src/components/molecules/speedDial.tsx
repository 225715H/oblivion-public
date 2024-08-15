import { Icon, SpeedDial } from "@rneui/themed";
import React from "react";
import { colors } from "../../styles/colors";
import { LoadImage } from "../../utils/loadImages";
import SpeedDialIcon from "../atoms/speedDialIcon";
import { useVisibleFolderModal } from "../../context/visibleFolderModal";

export const SpeedDialComponent: React.FC<{ navigation: any }> = ({
  navigation,
}) => {
  const { isVisible, setIsVisible } = useVisibleFolderModal();
  const [open, setOpen] = React.useState(false);

  const navigateToCreateFlashCard = () => {
    navigation.navigate("CardEditNavigator", {
      screen: "cardEdit",
    });
    setOpen(!open);
  };

  const handleLibraryList = () => {
    setIsVisible(!isVisible);
    setOpen(!open);
    console.log("handleLibraryList", isVisible);
  };

  const handleOpenDial = () => {
    if (isVisible) {
      setIsVisible(false);
    } else {
      setOpen(!open);
    }
  };

  return (
    <SpeedDial
      isOpen={open}
      icon={
        !isVisible ? (
          <SpeedDialIcon
            source={LoadImage.plusIcon}
            backgroundColor={colors.backgroundTertiary}
            tintColor={colors.iconColorTertiary}
          />
        ) : (
          <SpeedDialIcon
            source={LoadImage.backIcon}
            // backgroundColor={colors.backgroundTertiary}
            tintColor={colors.iconColorTertiary}
          />
        )
      }
      openIcon={
        <SpeedDialIcon
          source={LoadImage.crossIcon}
          backgroundColor={colors.backgroundPrimary}
          tintColor={colors.iconColorSecondary}
        />
      }
      onOpen={() => handleOpenDial()}
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
        onPress={() => handleLibraryList()}
      />
      <SpeedDial.Action
        icon={
          <SpeedDialIcon
            source={LoadImage.reloadIcon}
            backgroundColor={colors.backgroundTertiary}
            tintColor={colors.iconColorTertiary}
          />
        }
        onPress={() => console.log("表裏反転")}
      />
    </SpeedDial>
  );
};
