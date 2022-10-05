import React from 'react';
import { StatusBar } from 'react-native';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { Routes } from './Routes';
import { AuthProvider } from './AuthProvider';

interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = ({}) => {
  const client = new ApolloClient({
    uri: 'https://dashboard.mashaheer.online/graphql',
    cache: new InMemoryCache(),
    
  });

  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <StatusBar barStyle={'light-content'} />
        <Routes />
      </AuthProvider>
    </ApolloProvider>
  );
};
