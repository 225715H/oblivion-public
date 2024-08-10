import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, KeyboardAvoidingView, Platform, SafeAreaView, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { getRandomResponse } from '../../services/chatService';
import { TouchableIcon } from '../../components/atoms/touchableIcon';
import { LoadImage } from '../../utils/loadImages';
import { colors } from '../../styles/colors';
import MainHeader from '../../components/molecules/mainHeader';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatBotScreen = ( { navigation } : { navigation: any }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false); 
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    const initialMessage: Message = { role: 'assistant', content: '質問は、ありますか？' };
    setMessages([initialMessage]);
  }, []);

  const handleSend = async () => {
    if (inputText.trim() === '') return;

    const newMessage: Message = { role: 'user', content: inputText };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    setInputText('');
    setLoading(true); 

    const reply = await getRandomResponse();
    const assistantMessage: Message = { role: 'assistant', content: reply };

    setMessages((prevMessages) => [...prevMessages, assistantMessage]);
    setLoading(false); 

    flatListRef.current?.scrollToEnd({ animated: true });
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}        
      >
        <MainHeader
              title="Chat with AI"
              leftButton={
                <TouchableIcon
                  imageSource={LoadImage.backIcon}
                  onPress={() => navigation.goBack()}
                  padding={0}
                />
              }
            />
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
                    source={LoadImage.aiIcon}
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
            onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
          />
          {loading && ( 
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="small" color={colors.iconColorPrimary} />
              <Text style={styles.loadingText}>ちょい待ち...</Text>
            </View>
          )}
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
  content: {
    flex: 1,
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
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
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  loadingText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#555',
  },
});

export default ChatBotScreen;
