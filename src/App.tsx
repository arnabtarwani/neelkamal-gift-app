/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationStack } from './utils/NavigationStack';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen'

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

const App = () => {

  useEffect(() => {
    SplashScreen.hide()
  }, []);

  return (
    <ApolloProvider client={client}>
      <StatusBar backgroundColor="#0a0a0a" />
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
