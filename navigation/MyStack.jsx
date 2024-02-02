// MyStack.js
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Registration from '../screens/Registration/Registration';
import LoginScreen from '../screens/Login/LoginScreen';
import PrimaryPlaytypeScreen from '../screens/Registration/PrimaryPlaytypeScreen';
import {useUserAuth} from '../context/UserAuthContext';
import HomeNavigation from '../screens/Home/HomeNavigation';

const Stack = createStackNavigator();

const MyStack = () => {
  const {isUserAuth, setIsUserAuth} = useUserAuth(); // for testing purposes
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}
      name="Root">
      {isUserAuth ? (
        <Stack.Screen name="Home" component={HomeNavigation} />
      ) : (
        <Stack.Group>
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
