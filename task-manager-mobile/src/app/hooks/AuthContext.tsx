import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Toast } from "react-native-toast-notifications";

import { env } from '../env'

interface User {
  _id: string;
  nome: string;
  email: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  token?: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }) => {

  const [data, setData] = useState<AuthState | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('@ManagerUsers:token');
        const userJSON = await AsyncStorage.getItem('@ManagerUsers:user');

        if (token && userJSON) {
          const user = JSON.parse(userJSON);
          setData({ token, user });
        }
      } catch (error) {
        console.error('Error fetching data from AsyncStorage:', error);
      }
    };

    fetchData();
  }, []);

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    try {

      const response = await fetch(`${env.baseUrl}/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          senha: password
        })
      });

      const status = await response.status;

      if (status === 201) {
        const json = await response.json();

        const { token, user } = json.result;

        await AsyncStorage.setItem('@ManagerUsers:token', token);
        await AsyncStorage.setItem('@ManagerUsers:user', JSON.stringify(user));

        setData({ token, user });
      } else {
        const json = await response.json();
        Toast.show(json.message, { type: 'danger'});
      }
    } catch (error: any) {
      Toast.show(error, { type: 'danger'});
    }
  }, []);

  const signOut = useCallback(async () => {
    try {
      await AsyncStorage.removeItem('@ManagerUsers:token');
      await AsyncStorage.removeItem('@ManagerUsers:user');
      setData(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user: data?.user || {} as User, signIn, signOut, token: data?.token}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
