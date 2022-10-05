import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProfileScreen, MyBookingsScreen} from '../../screens';

interface ProfileStackProps {}

const Stack = createStackNavigator();

export const ProfileStack: React.FC<ProfileStackProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MyBookings"
        component={MyBookingsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
