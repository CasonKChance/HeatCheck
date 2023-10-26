// MyStack.js
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import StartScreen from '../screens/Start/StartScreen';
import Registration from '../screens/Registration/Registration';
import LoginScreen from '../screens/Login/LoginScreen';
import PrimaryPlaytypeScreen from '../screens/Registration/PrimaryPlaytypeScreen';

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
      <Stack.Screen name="PrimaryPlaytype" component={PrimaryPlaytypeScreen} />
    </Stack.Navigator>
  );
};

export default MyStack;
