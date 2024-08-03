import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Divider, Overlay, ListItem } from '@rneui/themed';
import { useSourceText } from '../../context/sourceTextContext'; 
import { useTargetText } from '../../context/targetTextContext';
import { useSourceLanguage } from '../../context/sourceLanguageContext';
import { useTargetLanguage } from '../../context/targetLanguageContext';
import { colors } from '../../styles/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { dimensions } from '../../constants/dimensions';
import { LoadImage } from '../../utils/loadImages';

const TranslateOutputScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const sourceText = useSourceText(); 
  const targetText = useTargetText();
  const sourceLanguage = useSourceLanguage();
  const targetLanguage = useTargetLanguage();

  const [isModalVisible, setModalVisible] = useState(false);
  const [isFolderModalVisible, setFolderModalVisible] = useState(false);
  const [checked, setChecked] = useState([false, false]);
  const [folderName, setFolderName] = useState('');
  const folderInputRef = useRef<TextInput>(null);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleFolderModal = () => {
    setFolderModalVisible(!isFolderModalVisible);
  };

  const toggleCheck = (index: number) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  const handleCreateFolder = () => {
    console.log('フォルダが作成されました:', folderName);
    setFolderName('');
    toggleFolderModal();
  };

  const openFolderModal = () => {
    toggleModal();
    setTimeout(() => {
      toggleFolderModal();
    }, 200);
  };

  useEffect(() => {
    if (isFolderModalVisible && folderInputRef.current) {
      folderInputRef.current.focus();
    }
  }, [isFolderModalVisible]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.headerTouchArea} onPress={() => navigation.popToTop()}>
          <Image 
            source={LoadImage.backIcon} 
            style={styles.backIcon}
          />
          <Text style={styles.headerText}>翻訳</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.languageContainer}>
          <Text style={styles.language}>{sourceLanguage.name}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>{sourceText}</Text>
        </View>
        <View style={styles.separator} />
        <Divider />
        <View style={styles.languageContainer}>
          <Text style={styles.language}>{targetLanguage.name}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>{targetText}</Text>
        </View>
      </View>
      <View style={styles.cardActionContainer}>
        <TouchableOpacity style={styles.badFeedbackButton}>
          <Image source={LoadImage.badFeedbackIcon} style={styles.badFeedbackIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addCardButton} onPress={toggleModal}>
          <Text style={styles.addCardText}>+ カードを追加</Text>
        </TouchableOpacity>
      </View>

      <Overlay
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        overlayStyle={styles.overlayBottom}
      >
        <View style={styles.modalHandle} />
        <View style={styles.modalContent}>
          <View style={styles.modalHeaderRow}>
            <Text style={styles.modalTitle}>カードの保存先...</Text>
            <TouchableOpacity style={[styles.modalOption, styles.newFolderButton]} onPress={openFolderModal}>              
              <Text style={styles.modalOptionText}>+ 新しいフォルダ</Text>              
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
          <TouchableOpacity style={styles.modalOption} onPress={toggleModal}>            
            <Text style={styles.modalOptionText}>完了</Text>            
          </TouchableOpacity>
        </View>
      </Overlay>

      <Overlay
        isVisible={isFolderModalVisible}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
    alignItems: 'center',
    width: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: dimensions.SCREEN_HEIGHT * 0.07,
  },
  headerTouchArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    width: dimensions.SCREEN_WIDTH * 0.06,
    height: dimensions.SCREEN_WIDTH * 0.06,
    tintColor: colors.iconColorPrimary,
    marginLeft: dimensions.SCREEN_WIDTH * 0.02,
  },
  headerText: {
    fontSize: dimensions.SCREEN_WIDTH * 0.05,
    fontWeight: 'normal',
    color: colors.textPrimary,
    marginLeft: dimensions.SCREEN_WIDTH * 0.02,
  },
  cardContainer: {
    width: '90%',
    alignItems: 'center',
  },
  languageContainer: {
    width: '100%',
    marginTop: dimensions.SCREEN_HEIGHT * 0.02,
  },
  language: {
    fontSize: dimensions.SCREEN_WIDTH * 0.055,
    color: 'black',
  },
  card: {
    width: '90%',
    height: dimensions.SCREEN_HEIGHT * 0.23,
    backgroundColor: colors.backgroundQuaternary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: dimensions.SCREEN_HEIGHT * 0.03,
    marginBottom: dimensions.SCREEN_HEIGHT * 0.02,
  },
  cardText: {
    fontSize: dimensions.SCREEN_WIDTH * 0.06,
    color: colors.textPrimary,
  },
  separator: {
    width: '80%',
    height: 1,
    backgroundColor: 'black',
    marginVertical: dimensions.SCREEN_HEIGHT * 0.025,
    alignSelf: 'center',
  },
  cardActionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '85%',
    marginTop: dimensions.SCREEN_HEIGHT * 0.035,
  },
  badFeedbackButton: {
    width: dimensions.SCREEN_WIDTH * 0.1,
    height: dimensions.SCREEN_WIDTH * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundQuaternary,
    borderRadius: 50,
  },
  badFeedbackIcon: {
    width: dimensions.SCREEN_WIDTH * 0.05,
    height: dimensions.SCREEN_WIDTH * 0.05,
    tintColor: colors.iconColorPrimary,
  },
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
  overlayBottom: {
    position: 'absolute',
    bottom: dimensions.SCREEN_HEIGHT * 0.03,
    width: '95%',
    borderRadius: 20,
    backgroundColor: colors.backgroundPrimary,
  },
  overlayCenter: {
    position: 'absolute',
    top: '30%',
    width: '80%',
    borderRadius: 20,
    backgroundColor: colors.backgroundPrimary,
    padding: 20,
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
  modalOptionText: {
    fontSize: dimensions.SCREEN_WIDTH * 0.04,
    color: colors.textPrimary,
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
});

export default TranslateOutputScreen;
