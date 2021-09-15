/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { DarkTheme, NavigationContainer, ThemeProvider, useTheme } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationStack } from './utils/NavigationStack';
import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client'
import { Platform, StatusBar } from 'react-native';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

const App = () => {

  return (
    <ApolloProvider client={client}>
      <StatusBar backgroundColor="#1148d4" />
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
