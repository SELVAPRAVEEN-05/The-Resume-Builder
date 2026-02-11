/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown';
import AppNavigator from './navigation/AppNavigator';

function App() {
  return (
    <AutocompleteDropdownContextProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AutocompleteDropdownContextProvider>
  );
}

export default App;
