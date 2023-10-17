import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MyStack from './navigation/MyStack';

import FlippableCard from './components/wrappers/FlippableCard';

function App() {
  return (
    <FlippableCard frontContent={"FRONT"} backContent={"BACK"}></FlippableCard>
  );
}

export default App;
