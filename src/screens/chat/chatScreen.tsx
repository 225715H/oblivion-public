import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, KeyboardAvoidingView, Platform, SafeAreaView, Image, ActivityIndicator } from 'react-native';
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
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}        
      >
        <MainHeader
          title="Chat AI"
          leftButton={
            <TouchableIcon
              imageSource={LoadImage.backIcon}
              onPress={() => navigation.goBack()}
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
          <TouchableIcon 
            onPress={handleSend} 
            imageSource={LoadImage.sendIcon} 
            tintColor={colors.iconColorPrimary}  
            padding={8}
          />
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
    padding: '2%',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: '3%',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: colors.backgroundPrimary,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    paddingHorizontal: '3%',
    paddingVertical: '2%',
    backgroundColor: colors.backgroundPrimary,
    marginRight: '2%',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: '1%',
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
    paddingVertical: '2%',
    paddingHorizontal: '4%',
    borderRadius: 25,
    marginVertical: '1%',
    maxWidth: '80%',
  },
  assistantMessage: {
    backgroundColor: colors.backgroundQuaternary,
    paddingVertical: '2%',
    paddingHorizontal: '4%',
    borderRadius: 25,
    maxWidth: '80%',
  },
  assistantIcon: {
    width: 24,
    height: 24,
    marginRight: '2%',
    marginTop: '2%',
  },
  userMessageText: {
    fontSize: 16,
    color: 'white',
  },
  assistantMessageText: {
    fontSize: 16,
    color: 'black',
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '2%',
  },
  loadingText: {
    marginLeft: '2%',
    fontSize: 16,
    color: '#555',
  },
});

export default ChatBotScreen;
