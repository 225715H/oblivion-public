import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Overlay } from '@rneui/themed';
import { colors } from '../../styles/colors';
import { dimensions } from '../../constants/dimensions';

const CreateFolderModal: React.FC<{
  isVisible: boolean;
  toggleFolderModal: () => void;
  folderName: string;
  setFolderName: (name: string) => void;
  handleCreateFolder: () => void;
}> = ({ isVisible, toggleFolderModal, folderName, setFolderName, handleCreateFolder }) => {
  const folderInputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (isVisible && folderInputRef.current) {
      folderInputRef.current.focus();
    }
  }, [isVisible]);

  return (
    <Overlay
      isVisible={isVisible}
      onBackdropPress={toggleFolderModal}
      overlayStyle={styles.overlayCenter}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <View style={styles.folderModalContent}>
          <Text style={styles.folderModalTitle}>新しいフォルダ</Text>
          <TextInput
            ref={folderInputRef}
            style={styles.folderInput}
            placeholder="タイトル"
            value={folderName}
            onChangeText={setFolderName}
            maxLength={150}
          />
          <View style={styles.folderModalActions}>
            <TouchableOpacity onPress={toggleFolderModal}>
              <Text style={styles.modalOptionText}>キャンセル</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCreateFolder}>
              <Text style={styles.modalOptionText}>作成</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  overlayCenter: {
    position: 'absolute',
    top: '30%',
    width: '80%',
    borderRadius: 20,
    backgroundColor: colors.backgroundPrimary,
    padding: 20,
  },
  folderModalContent: {
    width: '100%',
    padding: 20,
  },
  folderModalTitle: {
    fontSize: dimensions.SCREEN_WIDTH * 0.05,
    marginBottom: 10,
  },
  folderInput: {
    borderBottomWidth: 1,
    borderBottomColor: colors.textPrimary,
    marginBottom: 20,
    fontSize: dimensions.SCREEN_WIDTH * 0.04,
  },
  folderModalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalOptionText: {
    fontSize: dimensions.SCREEN_WIDTH * 0.04,
    color: colors.textPrimary,
  },
});

export default CreateFolderModal;
