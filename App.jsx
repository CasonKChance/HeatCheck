import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MyStack from './navigation/MyStack';

import LeaderboardScreen from './screens/Leaderboard/LeaderboardScreen.jsx'
import dummy from './screens/Leaderboard/LeaderboardDummy.jsx';

function App() {
  return (
    <LeaderboardScreen leaderInfo={dummy}></LeaderboardScreen>
  );
}

export default App;
