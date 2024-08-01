import React, { useRef, useEffect, useState } from 'react';
import { View, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';
import { dimensions } from '../../constants/dimensions';
import { colors } from '../../styles/colors';
import { TouchableIcon } from '../atoms/touchableIcon';
import { LoadImage } from '../../utils/loadImages';

type TranslateInputFormProps = {
  onEmptyInputGoBack: () => void;
  onTranslatePress: (text: string) => void;
};

const TranslateInputForm: React.FC<TranslateInputFormProps> = ({ onEmptyInputGoBack, onTranslatePress }) => {
  const textInputRef = useRef<TextInput>(null);
  const [textInputValue, setTextInputValue] = useState('');

  useEffect(() => {
    textInputRef.current?.focus();
  }, []);

  const handleTouchablePress = () => {
    if (textInputValue.trim().length === 0) {
      onEmptyInputGoBack();
    }
  };

  return (
    <> 
      <TouchableWithoutFeedback onPress={handleTouchablePress}>
        <View style={styles.textInputContainer}>
          <TextInput
            ref={textInputRef}
            style={styles.textInput}
            multiline
            value={textInputValue}
            onChangeText={setTextInputValue}
            autoCapitalize='none'
          />
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.iconRow}>
        <View style={styles.spacer}></View>
        {textInputValue.trim().length > 0 && (
          <View style={styles.rightIconContainer}>
            <TouchableIcon
              iconSize={dimensions.SCREEN_WIDTH * 0.1}
              imageSource={LoadImage.rightIcon}
              backgroundColor={colors.backgroundQuaternary}
              onPress={() => onTranslatePress(textInputValue)}
            />
          </View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  textInput: {
    fontSize: dimensions.SCREEN_WIDTH * 0.08,
    color: colors.textPrimary,
    width: dimensions.SCREEN_WIDTH * 0.8,
    maxHeight: dimensions.SCREEN_HEIGHT * 0.3,
  },
  iconRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: dimensions.SCREEN_HEIGHT * 0.01,
  },
  spacer: {
    flex: 1,
  },
  rightIconContainer: {
    marginRight: dimensions.SCREEN_WIDTH * 0.03,
  },
});

export default TranslateInputForm;
