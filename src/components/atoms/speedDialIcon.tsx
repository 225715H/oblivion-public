import React from 'react';
import { Image, ImageProps, ImageStyle, View } from 'react-native';
import { ImageSourcePropType } from 'react-native';

interface IconProps extends ImageProps {
  backgroundColor?: string;
  source: ImageSourcePropType;
  tintColor?: string;
  size?: number;
  padding?: number;
}

// サイズはデフォルトで24px、パディングはデフォルトで16px　speedDialコンポーネントの実装上、比率でなくても、問題ない

const SpeedDialIcon: React.FC<IconProps> = ({
  source,
  backgroundColor = 'transparent',
  tintColor = 'black',
  size = 24,
  padding = 16,
  ...props
}) => {
  return (
    <View
      style={{
        backgroundColor,
        borderRadius: size / 2, // アイコンを円形にするための設定
        padding,
      }}
    >
      <Image
        source={source}
        style={{ width: size, height: size, tintColor }}
        {...props}
      />
    </View>
  );
};

export default SpeedDialIcon;
