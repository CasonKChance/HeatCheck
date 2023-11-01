import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MyStack from './navigation/MyStack';

import PlayerProfileScreen from './screens/Profile/PlayerProfileScreen';

function App() {
  const dummy = {
    name: 'Charlie',
    skillRating: 99,
    position: 'Wing',
    height: '6ft 3in',
    weight: '185 lbs',
    playType: 'Playmaking Sharpshooter',
    age: 20,
    profileImage: { uri: 'stripes' }
  };
  return (
    <PlayerProfileScreen userInfo={dummy}></PlayerProfileScreen>
  );
}

export default App;