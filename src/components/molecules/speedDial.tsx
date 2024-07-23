import { SpeedDial } from "@rneui/themed";
import React from "react";
import { Image, View } from "react-native";
import { colors } from "../../styles/colors";
import { LoadImage } from "../../utils/loadImages";
import { speedDialStyles } from "./speedDialStyle";
import { ImageSourcePropType } from "react-native";

export const SpeedDialComponent = () => {
  const [open, setOpen] = React.useState(false);

  // アイコンの背景色を取得する関数（タップされると白になる）
  const getIconBackgroundColor = () => {
    return open ? colors.backgroundSecondary : colors.iconColorSecondary;
  };

  return (
    <SpeedDial
      isOpen={open}
      /** ImageだとiconContainerStyleが反映されない
       * icon={
        <Image source={LoadImage.plusIcon} style={speedDialStyles.iconImage} />
      }

      openIcon={
        <Image
          source={LoadImage.closeIcon}
          style={speedDialStyles.iconImageClose}
        />
      }
       */
      icon={{
        name: "add",
        color: colors.backgroundPrimary,
      }}
      iconContainerStyle={{ backgroundColor: getIconBackgroundColor() }}
      openIcon={{
        name: "close",
        color: colors.iconColorSecondary,
      }}
      onOpen={() => setOpen(!open)}
      onClose={() => setOpen(!open)}
    >
      <SpeedDial.Action
        /**
        * ImageだとiconContainerStyleが反映されない
        * icon={
          <Image
            source={LoadImage.listIcon}
            style={speedDialStyles.iconImage}
          />
        }
        */
        icon={{
          name: "list",
          color: colors.backgroundPrimary,
        }}
        iconContainerStyle={{ backgroundColor: colors.iconColorSecondary }}
        onPress={() => console.log("List Something")}
      />
      <SpeedDial.Action
        /**
       * ImageだとiconContainerStyleが反映されない
       * icon={
          <Image source={LoadImage.newIcon} style={speedDialStyles.iconImage} />
        }
       */
        icon={{
          name: "edit",
          color: colors.backgroundPrimary,
        }}
        iconContainerStyle={{ backgroundColor: colors.iconColorSecondary }}
        onPress={() => console.log("new Something")}
      />
    </SpeedDial>
  );
};
