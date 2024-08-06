import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { dimensions } from '../../constants/dimensions';
import { colors } from '../../styles/colors';

const AddCardButton: React.FC<{ onPress: () => void }> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.addCardButton} onPress={onPress}>
      <Text style={styles.addCardText}>+ カードを追加</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addCardButton: {
    width: dimensions.SCREEN_WIDTH * 0.35,
    height: dimensions.SCREEN_HEIGHT * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundQuaternary,
    borderRadius: 10,
  },
  addCardText: {
    fontSize: dimensions.SCREEN_WIDTH * 0.04,
    color: colors.textPrimary,
  },
});

export default AddCardButton;
