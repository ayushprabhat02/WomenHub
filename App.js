import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Splash from './src/screens/Splash';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;
