import React from "react";
import TestFolderSelectContainer from "../molecules/testFolderSelectContainer";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearProgress } from "@rneui/themed";
import { colors } from "../../styles/colors";
import { dimensions } from "../../constants/dimensions";
import { useFolders } from "../../context/folderContext";
import { useSetTestSelectedId } from "../../context/testSelectedFolderIdContext";
import { useLanguageDirection, useSetLanguageDirection } from "../../context/testLanguageDirectionContext";

const SCREEN_HEIGHT = dimensions.SCREEN_HEIGHT;
const SCREEN_WIDTH = dimensions.SCREEN_WIDTH;

const InitTestTemplate = ({ navigation }: { navigation: any }) => {
  const { folders } = useFolders();
  const setSelectedFolderId = useSetTestSelectedId();
  const languageDirection = useLanguageDirection();
  const setLanguageDirection = useSetLanguageDirection();
  const [checked, setChecked] = React.useState(0);

  const handleTestStart = () => {
    setSelectedFolderId(folders[checked].id);
    navigation.navigate("TestStudy");
  };

  return (
    <View style={styles.container}>
      {folders.length > 0 ? (
        <>
          <TestFolderSelectContainer checked={checked} setChecked={setChecked} />
          
          <View style={styles.languageSelectionContainer}>
            <TouchableOpacity
              onPress={() => setLanguageDirection("EnglishToJapanese")}
              style={[
                styles.languageOption,
                languageDirection === "EnglishToJapanese" && styles.languageOptionSelected,
              ]}
            >
              <Text
                style={[
                  styles.languageOptionText,
                  languageDirection === "EnglishToJapanese" && styles.languageOptionTextSelected,
                ]}
              >
                英語 → 日本語
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setLanguageDirection("JapaneseToEnglish")}
              style={[
                styles.languageOption,
                languageDirection === "JapaneseToEnglish" && styles.languageOptionSelected,
              ]}
            >
              <Text
                style={[
                  styles.languageOptionText,
                  languageDirection === "JapaneseToEnglish" && styles.languageOptionTextSelected,
                ]}
              >
                日本語 → 英語
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={handleTestStart} style={styles.testStartButton}>
            <Text style={styles.testStartText}>Study Now</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text style={styles.noFolderText}>フォルダがひとつもありません。</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "95%",
    borderBlockEndColor: colors.textSecondary,
    backgroundColor: colors.backgroundPrimary,
  },
  noFolderText: {
    fontSize: 18,
    color: colors.textPrimary,
    textAlign: "center",
    marginVertical: 20,
  },
  languageSelectionContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  languageOption: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: "#D9D9D9", 
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  languageOptionSelected: {
    backgroundColor: "#3B3B3B", 
  },
  languageOptionText: {
    color: "#000000", 
    fontSize: 18,
    fontWeight: "bold",
  },
  languageOptionTextSelected: {
    color: "#FFFFFF", 
  },
  progress: {
    width: SCREEN_WIDTH * 0.7,
    marginVertical: 20,
  },
  testStartButton: {
    backgroundColor: "#0276FF",
    padding: 10,
    borderRadius: 50,
    width: "50%",
    height: "18%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderColor: colors.textSecondary,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  testStartText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

export default InitTestTemplate;
