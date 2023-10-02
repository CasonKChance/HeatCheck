// MyStack.js
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import StartScreen from '../screens/Start/StartScreen';
import RegistrationScreen from '../screens/Registration/RegistrationScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import BackgroundWrapperContainer from '../components/wrappers/BackgroundWrapperContainer';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Start"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default MyStack;
