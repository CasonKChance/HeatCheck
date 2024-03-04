import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import HomeScreen from './HomeScreen';
import PlayerProfileScreen from '../Profile/PlayerProfileScreen';
import LeaderboardScreen from '../Leaderboard/LeaderboardScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import IndividualCourtScreen from './IndividualCourtScreen';

const Drawer = createDrawerNavigator();

const HomeNavigation = () => {
  const navigation = useNavigation(); // Use the useNavigation hook to get navigation object
  
  const openDrawer = () => {
    navigation.openDrawer(); // Function to open the drawer
  };

  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: true, headerTitleAlign: 'center'}}
    >
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

// Customize the header with a hamburger icon
HomeNavigation.navigationOptions = {
  headerLeft: () => (
    <TouchableOpacity onPress={openDrawer}>
      <View style={{paddingLeft: 15}}>
        <Ionicons name="ios-menu" size={30} color="black" />
      </View>
    </TouchableOpacity>
  ),
};

export default HomeNavigation;
