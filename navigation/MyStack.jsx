// MyStack.js
import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import StartScreen from '../screens/Start/StartScreen';
import Registration from '../screens/Registration/Registration';
import LoginScreen from '../screens/Login/LoginScreen';
import PrimaryPlaytypeScreen from '../screens/Registration/PrimaryPlaytypeScreen';
import {useUserAuth} from '../context/UserAuthContext';

const Stack = createStackNavigator();

const MyStack = () => {
  const {isUserAuth, setIsUserAuth} = useUserAuth(); // for testing purposes
  return (
    <Stack.Navigator
      initialRouteName="Start"
      screenOptions={{headerShown: false}}
      name="Root">
      {isUserAuth ? (
        <Stack.Screen name="Home" component={HomeScreen} />
      ) : (
        <Stack.Group>
          <Stack.Screen name="Start" component={StartScreen} />
          <Stack.Screen name="Registration" component={Registration} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="PrimaryPlaytype"
            component={PrimaryPlaytypeScreen}
          />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default MyStack;
