const {createStackNavigator} = require('@react-navigation/stack');

import React from 'react';

import Home from './Home';
import MoviesList from './MoviesList';
const Stack = createStackNavigator();
export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MoviesList" component={MoviesList} />
    </Stack.Navigator>
  );
};
