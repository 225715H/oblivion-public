import React, { useState, useRef, useEffect } from 'react';
import { View, FlatList, SafeAreaView, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { getRandomResponse } from '../../services/chatService';
import MainHeader from '../../components/molecules/mainHeader';
import BotMessageItem from '../../components/molecules/botMessageItem';
import BotLoadingIndicator from '../../components/molecules/botLoadingIndicator';
import InputBar from '../../components/molecules/inputBar';
import { TouchableIcon } from '../../components/atoms/touchableIcon';
import { LoadImage } from '../../utils/loadImages';
import { colors } from '../../styles/colors';

export interface Message {
  role: 'user' | 'bot'; 
  content: string;
}

const ChatBotScreen = ({ navigation }: { navigation: any }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false); 
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    const initialMessage: Message = { role: 'bot', content: '質問は、ありますか？' };
    setMessages([initialMessage]);
  }, []);

  const handleSend = async () => {
    if (inputText.trim() === '') return;

    const newMessage: Message = { role: 'user', content: inputText };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    setInputText('');
    setLoading(true); 

    const reply = await getRandomResponse();
    const botMessage: Message = { role: 'bot', content: reply };

    setMessages((prevMessages) => [...prevMessages, botMessage]);
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
            renderItem={({ item }) => <BotMessageItem message={item} />}
            onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
          />
          {loading && <BotLoadingIndicator />}
        </View>
        <InputBar
          inputText={inputText}
          setInputText={setInputText}
          handleSend={handleSend}
        />
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
});

export default ChatBotScreen;
