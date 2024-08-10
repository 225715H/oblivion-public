import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { LoadImage } from '../../utils/loadImages';
import { colors } from '../../styles/colors';
import { Message } from '../../types/chatTypes';

interface MessageItemProps {
  message: Message;
}

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  return (
    <View
      style={[
        styles.messageContainer,
        message.role === 'user' ? styles.userContainer : styles.botContainer,
      ]}
    >
      {message.role === 'bot' && (
        <Image
          source={LoadImage.aiIcon}
          style={styles.botIcon}
        />
      )}
      <View style={message.role === 'user' ? styles.userMessage : styles.botMessage}>
        <Text style={message.role === 'user' ? styles.userMessageText : styles.botMessageText}>
          {message.content}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: '1%',
  },
  userContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  botContainer: {
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
  botMessage: {
    backgroundColor: colors.backgroundQuaternary,
    paddingVertical: '2%',
    paddingHorizontal: '4%',
    borderRadius: 25,
    maxWidth: '80%',
  },
  botIcon: {
    width: 24,
    height: 24,
    marginRight: '2%',
    marginTop: '2%',
  },
  userMessageText: {
    fontSize: 16,
    color: 'white',
  },
  botMessageText: {
    fontSize: 16,
    color: 'black',
  },
});

export default MessageItem;
