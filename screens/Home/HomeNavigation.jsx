import React from 'react';
import HomeScreen from './HomeScreen';
import PlayerProfileScreen from '../Profile/PlayerProfileScreen';
import LeaderboardScreen from '../Leaderboard/LeaderboardScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import IndividualCourtScreen from './IndividualCourtScreen';

const Drawer = createDrawerNavigator();

const HomeNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={PlayerProfileScreen} />
      <Drawer.Screen name="Leaderboard" component={LeaderboardScreen} />
      <Drawer.Screen
        name="Individual Court"
        component={IndividualCourtScreen}
        options={{drawerLabel: () => null}}
      />
    </Drawer.Navigator>
  );
};

export default HomeNavigation;
