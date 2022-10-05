import React from 'react';
import { StatusBar } from 'react-native';
import { Routes } from './Routes';
import { AuthProvider } from './AuthProvider';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = ({}) => {
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
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
