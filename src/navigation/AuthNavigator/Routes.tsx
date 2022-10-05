import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Center } from '../../components/Center';
import { AuthContext, AuthStack } from '../index';
import { HomeStack } from '../';

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
  const { user, login } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the user is logged in or not
    AsyncStorage.getItem('user')
      .then((userString) => {
        if (userString) {
          // Decode it
          login();
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }
  return <NavigationContainer>{user ? <HomeStack /> : <AuthStack />}</NavigationContainer>;
};
