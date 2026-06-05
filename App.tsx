import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';
import { FavoritesProvider } from './src/contexts/FavoritesContext';

export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </FavoritesProvider>
  );
}