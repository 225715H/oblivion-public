import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatScreen from "../screens/chat/chatScreen";



const ChatStack = createNativeStackNavigator();

const ChatNavigator = () => {
  return (
    <ChatStack.Navigator screenOptions={{}}>
      <ChatStack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          headerShown: false,
        }}
      />
    </ChatStack.Navigator>
  );
}

export default ChatNavigator;