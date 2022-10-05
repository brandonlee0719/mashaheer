import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthParamList } from './AuthParamList';
import {
  SMSScreen,
  LoggedOutScreen,
  OTPScreen,
  LoginScreen,
  RegisterScreen,
  AccountTypeScreen,
} from '../../screens';

interface AuthStackProps {}

const Stack = createStackNavigator<AuthParamList>();

export const AuthStack: React.FC<AuthStackProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="LoggedOutScreen"
    >
      <Stack.Screen name="LoggedOutScreen" component={LoggedOutScreen} />
      <Stack.Screen name="SMSScreen" component={SMSScreen} />
      <Stack.Screen name="OTPScreen" component={OTPScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="AccountTypeScreen" component={AccountTypeScreen} />
    </Stack.Navigator>
  );
};
