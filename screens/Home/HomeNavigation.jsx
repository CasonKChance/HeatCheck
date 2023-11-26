import React from 'react';
import {createTabNavigator} from '@react-navigation/stack';

const Tab = createTabNavigator();

const HomeNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Required"
      screenOptions={{headerShown: false}}
    />
  );
};

export default HomeNavigation;
