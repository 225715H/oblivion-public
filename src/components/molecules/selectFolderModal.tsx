import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Divider, Overlay, ListItem } from "@rneui/themed";
import { Folder } from "../../context/folderContext";
import { colors } from "../../styles/colors";
import { dimensions } from "../../constants/dimensions";

interface SaveCardModalProps {
  isVisible: boolean;
  toggleModal: () => void;
  folders: Folder[];
  checked: boolean[];
  toggleCheck: (index: number) => void;
  openFolderModal: () => void;
  handleModalComplete: () => void;
}

const SaveCardModal: React.FC<SaveCardModalProps> = ({
  isVisible,
  toggleModal,
  folders,
  checked,
  toggleCheck,
  openFolderModal,
  handleModalComplete,
}) => {
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
          <TouchableOpacity
            style={[styles.modalOption, styles.newFolderButton]}
            onPress={openFolderModal}
          >
            <Text style={styles.modalAddFolderText}>+ 新しいフォルダ</Text>
          </TouchableOpacity>
        </View>
        <Divider />
        {folders.map((folder, index) => (
          <TouchableOpacity key={folder.id} onPress={() => toggleCheck(index)}>
            <ListItem>
              <ListItem.CheckBox
                iconType="material-community"
                checkedIcon="checkbox-marked"
                uncheckedIcon="checkbox-blank-outline"
                checked={checked[index]}
                onPress={() => toggleCheck(index)}
              />
              <ListItem.Content>
                <ListItem.Title>{folder.name}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          </TouchableOpacity>
        ))}
        <Divider />
        <TouchableOpacity
          style={styles.modalOption}
          onPress={handleModalComplete}
        >
          <Text style={styles.modalOptionText}>完了</Text>
        </TouchableOpacity>
      </View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  overlayBottom: {
    position: "absolute",
    bottom: dimensions.SCREEN_HEIGHT * 0.03,
    width: "95%",
    borderRadius: 20,
    backgroundColor: colors.backgroundPrimary,
  },
  modalHandle: {
    width: 70,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#ccc",
    alignSelf: "center",
    marginBottom: 5,
  },
  modalContent: {
    width: "100%",
    paddingHorizontal: 10,
  },
  modalHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalTitle: {
    fontSize: dimensions.SCREEN_WIDTH * 0.04,
  },
  modalOption: {
    paddingVertical: 10,
  },
  newFolderButton: {
    marginLeft: "auto",
  },
  modalOptionText: {
    fontSize: dimensions.SCREEN_WIDTH * 0.04,
    color: colors.textPrimary,
  },
  modalAddFolderText: {
    fontSize: dimensions.SCREEN_WIDTH * 0.04,
    color: colors.textTertiary,
  },
});

export default SaveCardModal;
