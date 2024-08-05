import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Overlay, Divider, ListItem } from '@rneui/themed';
import { colors } from '../../styles/colors';
import { dimensions } from '../../constants/dimensions';

const SaveCardModal: React.FC<{
  isVisible: boolean;
  toggleModal: () => void;
  openFolderModal: () => void;
  checked: boolean[];
  toggleCheck: (index: number) => void;
  handleModalComplete: () => void;
}> = ({ isVisible, toggleModal, openFolderModal, checked, toggleCheck, handleModalComplete }) => {
  return (
    <Overlay
      isVisible={isVisible}
      onBackdropPress={toggleModal}
      overlayStyle={styles.overlayBottom}
    >
      <View style={styles.modalHandle} />
      <View style={styles.modalContent}>
        <View style={styles.modalHeaderRow}>
          <Text style={styles.modalTitle}>カードの保存先...</Text>
          <TouchableOpacity style={[styles.modalOption, styles.newFolderButton]} onPress={openFolderModal}>              
            <Text style={styles.modalAddFolderText}>+ 新しいフォルダ</Text>              
          </TouchableOpacity>
        </View>
        <Divider />
        <TouchableOpacity onPress={() => toggleCheck(0)}>
          <ListItem>
            <ListItem.CheckBox
              iconType="material-community"
              checkedIcon="checkbox-marked"
              uncheckedIcon="checkbox-blank-outline"
              checked={checked[0]}
              onPress={() => toggleCheck(0)}
            />
            <ListItem.Content>
              <ListItem.Title>フォルダ１</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck(1)}>
          <ListItem>
            <ListItem.CheckBox
              iconType="material-community"
              checkedIcon="checkbox-marked"
              uncheckedIcon="checkbox-blank-outline"
              checked={checked[1]}
              onPress={() => toggleCheck(1)}
            />
            <ListItem.Content>
              <ListItem.Title>フォルダ２</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity style={styles.modalOption} onPress={handleModalComplete}>            
          <Text style={styles.modalOptionText}>完了</Text>            
        </TouchableOpacity>
      </View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  overlayBottom: {
    position: 'absolute',
    bottom: dimensions.SCREEN_HEIGHT * 0.03,
    width: '95%',
    borderRadius: 20,
    backgroundColor: colors.backgroundPrimary,
  },
  modalHandle: {
    width: 70,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#ccc',
    alignSelf: 'center',
  },
  modalContent: {
    width: '100%',
    padding: 10,
  },
  modalHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalTitle: {
    fontSize: dimensions.SCREEN_WIDTH * 0.04,
  },
  modalOption: {
    paddingVertical: 10,
  },
  newFolderButton: {
    marginLeft: 'auto',
  },
  modalAddFolderText: {
    fontSize: dimensions.SCREEN_WIDTH * 0.04,
    color: colors.textTertiary,
  },
  modalOptionText: {
    fontSize: dimensions.SCREEN_WIDTH * 0.04,
    color: colors.textPrimary,
  },
});

export default SaveCardModal;
