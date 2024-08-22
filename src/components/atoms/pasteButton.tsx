import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, ViewStyle } from 'react-native';
import { LoadImage } from '../../utils/loadImages';
import { colors } from '../../styles/colors';

interface PasteButtonProps {
  onPress: () => void;
  style?: ViewStyle;
}

const PasteButton: React.FC<PasteButtonProps> = ({ onPress, style }) => {
    return (
      <TouchableOpacity style={[styles.pasteButton, style]} onPress={onPress}>
          <Image source={LoadImage.pasteIcon} style={styles.pasteIcon} />
          <Text style={styles.pasteButtonText}>ペースト</Text>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

  pasteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  pasteButtonText: {
    marginHorizontal: 5,
    color: colors.textPrimary,
  },
  pasteIcon: {
    marginLeft: 5,
    width: 30,
    height: 30,
  },
});

export default PasteButton;
