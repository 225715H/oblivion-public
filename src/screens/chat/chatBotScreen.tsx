import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, KeyboardAvoidingView, Platform, SafeAreaView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Importing an icon library for the send button
import { getRandomResponse } from '../../services/chatService';
import { TouchableIcon } from '../../components/atoms/touchableIcon';
import { LoadImage } from '../../utils/loadImages';
import { colors } from '../../styles/colors';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatBotScreen = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');

  const handleSend = async () => {
    if (inputText.trim() === '') return;

    const newMessage: Message = { role: 'user', content: inputText };
    setMessages([...messages, newMessage]);
    setInputText('');

    const reply = await getRandomResponse();
    const assistantMessage: Message = { role: 'assistant', content: reply };
    setMessages([...messages, newMessage, assistantMessage]);
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 120 : 0}
      >
        <View style={styles.content}>
          <FlatList
            data={messages}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={item.role === 'user' ? styles.userMessage : styles.assistantMessage}>
                <Text style={styles.messageText}>{item.content}</Text>
              </View>
            )}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="メッセージ"
            value={inputText}
            onChangeText={setInputText}
          />
          <TouchableIcon onPress={handleSend} imageSource={LoadImage.sendIcon} />

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    backgroundColor: '#f7f7f8',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
    marginRight: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: colors.backgroundQuaternary,
    padding: 10,
    borderRadius: 25,
    marginVertical: 5,
    maxWidth: '80%',
  },
  assistantMessage: {
    alignSelf: 'flex-start',
    backgroundColor: colors.backgroundQuaternary,
    padding: 10,
    borderRadius: 25,
    marginVertical: 5,
    maxWidth: '80%',
  },
  messageText: {
    fontSize: 16,
  },
});

export default ChatBotScreen;
