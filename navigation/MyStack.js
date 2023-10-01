// MyStack.js
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import StartScreen from '../screens/Start/StartScreen';
import RegistrationScreen from '../screens/Registration/RegistrationScreen';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Start"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
    </Stack.Navigator>
  );
};

export default MyStack;
