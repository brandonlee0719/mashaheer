import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BookingsScreen} from '../../screens';

interface BookingsStackProps {}

const Stack = createStackNavigator();

export const BookingsStack: React.FC<BookingsStackProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Booking"
        component={BookingsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
