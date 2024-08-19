import { Icon, SpeedDial } from "@rneui/themed";
import React from "react";
import { colors } from "../../styles/colors";
import { LoadImage } from "../../utils/loadImages";
import SpeedDialIcon from "../atoms/speedDialIcon";
import { useVisibleFolderModal } from "../../context/visibleFolderModal";
import { useFocusEffect } from "@react-navigation/native";
import { useFolders } from "../../context/folderContext";
import { useFlashcards } from "../../context/flashCardContext";

export const SpeedDialComponent: React.FC<{ navigation: any }> = ({
  navigation,
}) => {
  const { isVisible, setIsVisible } = useVisibleFolderModal();
  const { checkedFolders } = useFolders();
  const { fetchFlashcards } = useFlashcards();
  const [open, setOpen] = React.useState(false);

  const navigateToCreateFlashCard = () => {
    navigation.navigate("CardEditScreen");
    setOpen(!open);
  };

  const handleLibraryList = () => {
    setIsVisible(!isVisible);
    setOpen(!open);
  };

  const handleReloadFlashcards = () => {
    fetchFlashcards(checkedFolders);
    setOpen(!open);
  }

  const handleOpenDial = () => {
    if (isVisible) {
      setIsVisible(false);
    } else {
      setOpen(!open);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setOpen(false);
        setIsVisible(false);
      };
    }, [])
  );

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
        onPress={() => handleReloadFlashcards()}
      />
    </SpeedDial>
  );
};
