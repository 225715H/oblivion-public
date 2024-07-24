import React from 'react';
import { Image, ImageProps, ImageStyle, View } from 'react-native';
import { ImageSourcePropType } from 'react-native';

interface IconProps extends ImageProps {
  size?: number;
  backgroundColor?: string;
  source: ImageSourcePropType;
  tintColor?: string;
}

const SpeedDialIcon: React.FC<IconProps> = ({
  size = 24,
  style,
  backgroundColor = 'transparent',
  source,
  tintColor,
  ...props
}) => {
  return (
    <View
      style={{
        backgroundColor,
        borderRadius: 50,
        padding: 30,
      }}
    >
      <Image
        source={source}
        style={[{ width: size, height: size, tintColor }, style] as ImageStyle}
        {...props}
      />
    </View>
  );
};

export default SpeedDialIcon;
