import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';

import { ToastProvider } from 'react-native-toast-notifications'

import theme from './src/app/theme';
import { Routes } from './src/app/routes';
import { AuthProvider } from './src/app/hooks/AuthContext';

export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
      <ThemeProvider theme={theme}>
        <>
          <StatusBar
            style='light'
            backgroundColor="transparent"
            translucent
          />
          <ToastProvider>
            <AuthProvider>
              { fontsLoaded ? <Routes /> : <></> }
            </AuthProvider>
          </ToastProvider>

        </>
      </ThemeProvider>
  );
}
