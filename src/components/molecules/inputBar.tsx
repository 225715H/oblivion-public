import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { TouchableIcon } from '../../components/atoms/touchableIcon';
import { colors } from '../../styles/colors';
import { LoadImage } from '../../utils/loadImages';

interface InputBarProps {
  inputText: string;
  setInputText: (text: string) => void;
  handleSend: () => void;
}

const InputBar: React.FC<InputBarProps> = ({ inputText, setInputText, handleSend }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="メッセージ"
        value={inputText}
        multiline
        numberOfLines={4}
        onChangeText={setInputText}
      />
      <TouchableIcon 
        onPress={handleSend} 
        imageSource={LoadImage.sendIcon} 
        tintColor={colors.iconColorPrimary}  
        padding={8}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: '3%',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: colors.backgroundPrimary,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    paddingHorizontal: '3%',
    paddingVertical: '2%',
    backgroundColor: colors.backgroundPrimary,
    marginRight: '2%',
  },
});

export default InputBar;
