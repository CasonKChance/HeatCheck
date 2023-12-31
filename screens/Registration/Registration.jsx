import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RequiredScreen from './RequiredScreen';
import OptionalScreen from './OptionalScreen';
import PrimaryPlaytypeScreen from './PrimaryPlaytypeScreen';

const Stack = createStackNavigator();

const Registration = () => {
  return (
    <Stack.Navigator
      initialRouteName="Required"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Required" component={RequiredScreen} />
      <Stack.Screen name="Optional" component={OptionalScreen} />
      <Stack.Screen name="Playtype" component={PrimaryPlaytypeScreen} />
    </Stack.Navigator>
  );
};

export default Registration;
