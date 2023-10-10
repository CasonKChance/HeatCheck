// MyStack.js
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import StartScreen from '../screens/Start/StartScreen';
import Registration from '../screens/Registration/Registration';
import LoginScreen from '../screens/Login/LoginScreen';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Start"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default MyStack;
