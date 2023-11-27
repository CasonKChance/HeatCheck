import React from 'react';
import HomeScreen from './HomeScreen';
import PlayerProfileScreen from '../Profile/PlayerProfileScreen';
import LeaderboardScreen from '../Leaderboard/LeaderboardScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const HomeNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={PlayerProfileScreen} />
      <Drawer.Screen name="Leaderboard" component={LeaderboardScreen} />
    </Drawer.Navigator>
  );
};

export default HomeNavigation;
