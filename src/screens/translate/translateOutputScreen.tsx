import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, Alert } from 'react-native';
import { useSourceText } from '../../context/sourceTextContext'; 
import { useTargetText } from '../../context/targetTextContext';
import { useSourceLanguage } from '../../context/sourceLanguageContext';
import { useTargetLanguage } from '../../context/targetLanguageContext';
import { useFolders } from '../../context/folderContext'; 
import { colors } from '../../styles/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { dimensions } from '../../constants/dimensions';
import { LoadImage } from '../../utils/loadImages';
import TranslateHeader from '../../components/molecules/translateHeader';
import LanguageAndCardContainer from '../../components/organisms/languageAndCardContainer'; 
import SelectFolderModal from '../../components/molecules/selectFolderModal';
import CreateFolderModal from '../../components/molecules/createFolderModal';
import { useFlashcards } from '../../context/flashCardContext';
import { useSnackbar } from '../../context/translateSnackbarContext';

const TranslateOutputScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const sourceText = useSourceText(); 
  const targetText = useTargetText();
  const sourceLanguage = useSourceLanguage();
  const targetLanguage = useTargetLanguage();
  const { folders, addFolder } = useFolders(); 
  const { addFlashcard } = useFlashcards();
  const { showSnackbar, isSnackbarVisible } = useSnackbar();

  const [isModalVisible, setModalVisible] = useState(false);
  const [isFolderModalVisible, setFolderModalVisible] = useState(false);
  const [checked, setChecked] = useState<boolean[]>([]);
  const [folderName, setFolderName] = useState('');

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
    addFolder(folderName);
    setFolderName('');
    setChecked([...checked, true]);
    toggleFolderModal();
    toggleModal();
  };

  const openFolderModal = () => {
    toggleModal();
    toggleFolderModal();
  };

  const handleAddCardToFolder = () => {
    const selectedFolders = folders.filter((_, index) => checked[index]);
    if (selectedFolders.length === 0) {
      toggleModal();
      return;
    } else {
      selectedFolders.forEach((folder) => {
        if (sourceLanguage.language === 'EN') {
          addFlashcard(folder.id, sourceText, targetText);
        } else {
          addFlashcard(folder.id, targetText, sourceText);
        }
      });
      toggleModal();
      showSnackbar('カードをフォルダに追加しました');
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TranslateHeader navigation={navigation} /> 
      <LanguageAndCardContainer
        sourceLanguageName={sourceLanguage.name}
        sourceText={sourceText}
        targetLanguageName={targetLanguage.name}
        targetText={targetText}
      />
      <View style={styles.cardActionContainer}>
        <TouchableOpacity style={styles.badFeedbackButton}>
          <Image source={LoadImage.badFeedbackIcon} style={styles.badFeedbackIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addCardButton} onPress={toggleModal}>
          <Text style={styles.addCardText}>+ カードを追加</Text>
        </TouchableOpacity>
      </View>

      <SelectFolderModal
        isVisible={isModalVisible}
        toggleModal={toggleModal}
        folders={folders}
        checked={checked}
        toggleCheck={toggleCheck}
        openFolderModal={openFolderModal}
        handleModalComplete={handleAddCardToFolder}
      />

      <CreateFolderModal
        isVisible={isFolderModalVisible}
        toggleModal={toggleFolderModal}
        folderName={folderName}
        setFolderName={setFolderName}
        handleCreateFolder={handleCreateFolder}
      />
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
});

export default TranslateOutputScreen;
