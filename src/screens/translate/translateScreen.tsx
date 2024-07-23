import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomSheet, ListItem } from '@rneui/themed';

const LanguageSelector = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('日本語');
  const languages = [
    '英語', '日本語', 'アイスランド語', 'アイマラ語', 'アイルランド語', 'アゼルバイジャン語',
    'アッサム語', 'アフリカーンス語', 'アムハラ語', 'アラビア語', 'アルバニア語', 'アルメニア語',
    'イタリア語', 'イディッシュ語', // その他の言語を追加
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsVisible(true)}>
        <View style={styles.selector}>
          <Text style={styles.languageText}>{selectedLanguage}</Text>
        </View>
      </TouchableOpacity>

      <BottomSheet isVisible={isVisible} onBackdropPress={() => setIsVisible(false)}>
        <View style={styles.bottomSheet}>
          <Text style={styles.sheetTitle}>訳文の言語</Text>
          <FlatList
            data={languages}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <ListItem
                onPress={() => {
                  setSelectedLanguage(item);
                  setIsVisible(false);
                }}
                containerStyle={styles.listItem}
              >
                <ListItem.Content>
                  <ListItem.Title>{item}</ListItem.Title>
                </ListItem.Content>
                {item === selectedLanguage && <Text>✓</Text>}
              </ListItem>
            )}
          />
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selector: {
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  languageText: {
    fontSize: 16,
  },
  bottomSheet: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  sheetTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  listItem: {
    padding: 15,
  },
});

export default LanguageSelector;
