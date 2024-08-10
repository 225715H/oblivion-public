import React, { useState, useRef } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, KeyboardAvoidingView, Platform, SafeAreaView, Image } from 'react-native';
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
  const flatListRef = useRef<FlatList>(null);

  const handleSend = async () => {
    if (inputText.trim() === '') return;

    const newMessage: Message = { role: 'user', content: inputText };

    // 先にユーザーのメッセージを追加し、その後アシスタントの返信を取得して一緒に追加する
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    setInputText('');

    const reply = await getRandomResponse();
    const assistantMessage: Message = { role: 'assistant', content: reply };

    setMessages((prevMessages) => [...prevMessages, assistantMessage]);

    // メッセージが追加された後にスクロールを実行
    flatListRef.current?.scrollToEnd({ animated: true });
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
            ref={flatListRef}
            data={messages}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.messageContainer,
                  item.role === 'user' ? styles.userContainer : styles.assistantContainer,
                ]}
              >
                {item.role === 'assistant' && (
                  <Image
                    source={LoadImage.aiIcon} // Replace with your icon source
                    style={styles.assistantIcon}
                  />
                )}
                <View style={item.role === 'user' ? styles.userMessage : styles.assistantMessage}>
                  <Text style={item.role === 'user' ? styles.userMessageText : styles.assistantMessageText}>
                    {item.content}
                  </Text>
                </View>
              </View>
            )}
            onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })} // コンテンツが更新されたときにもスクロールを実行
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="メッセージ"
            value={inputText}
            multiline
            numberOfLines={4}
            onChangeText={setInputText}
          />
          <TouchableIcon onPress={handleSend} imageSource={LoadImage.sendIcon} tintColor={colors.iconColorPrimary} />
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
    backgroundColor: colors.backgroundPrimary,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: colors.backgroundPrimary,
    marginRight: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 5,
  },
  userContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  assistantContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  userMessage: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 25,
    marginVertical: 5,
    maxWidth: '80%',
  },
  assistantMessage: {
    backgroundColor: colors.backgroundQuaternary,
    padding: 10,
    borderRadius: 25,
    maxWidth: '80%',
  },
  assistantIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    marginTop: 10,
  },
  userMessageText: {
    fontSize: 16,
    color: '#ffffff',
  },
  assistantMessageText: {
    fontSize: 16,
    color: '#000000',
  },
});

export default ChatBotScreen;
