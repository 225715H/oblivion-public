import React from 'react';
import { Icon } from '@rneui/themed';

type SwapButtonProps = {
  onPress: () => void;
};

const SwapButton: React.FC<SwapButtonProps> = ({ onPress }) => (
  <Icon name="swap-horizontal" type="material-community" color="#000" size={30} onPress={onPress} />
);

export default SwapButton;
