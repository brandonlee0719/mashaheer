import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';

type User = null | {
  identifier: string;
  jwtToken: string;
  email: string;
  confirmed: boolean;
  isInfluencer: boolean;
};

export const AuthContext = React.createContext<{
  user: User;
  login: () => void;
  logout: () => void;
}>({
  user: null,
  login: () => {},
  logout: () => {},
});

interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        login: () => {
          const fakeUser = {
            username: 'Raj',
            email: 'nraj@ruwad.ae',
            confirmed: true,
            isInfluencer: false,
          };
          setUser(fakeUser);
          AsyncStorage.setItem('user', JSON.stringify(fakeUser));
        },
        logout: () => {
          setUser(null);
          AsyncStorage.removeItem('user');
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
