import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {FavoritesScreen} from '../../screens/TabsScreens/FavoritesScreens/FavoritesScreen';

interface FavoritesStackProps {}

const Stack = createStackNavigator();

export const FavoritesStack: React.FC<FavoritesStackProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
