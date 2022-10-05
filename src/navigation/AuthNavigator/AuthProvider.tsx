import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type User = null | {
  username: string;
  email: string;
  confirmed: boolean;
  isInfluencer: boolean;
  token: string;
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
            username: 'raj',
            email: 'nraj@ruwad.ae',
            confirmed: true,
            isInfluencer: false,
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjEsImlhdCI6MTY2MjE1Mjk5NywiZXhwIjoxNjY0NzQ0OTk3fQ.Zy5DrtNoL3FzL5_ii0ka9va10biqO-G6TlE04UhpovI',
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
