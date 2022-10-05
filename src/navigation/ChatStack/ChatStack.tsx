import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ChatScreen} from '../../screens/TabsScreens/ChatScreens/ChatScreen';

interface ChatStackProps {}

const Stack = createStackNavigator();

export const ChatStack: React.FC<ChatStackProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
