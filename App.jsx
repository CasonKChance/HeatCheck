import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MyStack from './navigation/MyStack';

import FlippableCard from './components/wrappers/FlippableCard';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';

function App() {
  return (
    <View>
      <FlippableCard frontContent={"SHARPSHOOTING"} backContent={"A player who has excellent shooting skills, especially spot up shooting, may have the Sharpshooting play type."}></FlippableCard>
      <FlippableCard frontContent={"SHOT CREATING"} backContent={"A player who can create open shots for himself off the dribble and get to his spots may have the Shot Creating play type."}></FlippableCard>
      <FlippableCard frontContent={"PLAY MAKING"} backContent={"A player who creates for his teammates, is a great ball handler and an even better passer may have the Playmaking play type."}></FlippableCard>
      <FlippableCard frontContent={"SLASHING"} backContent={"A player who is excellent at driving to the basket and finishing inside may have the Slashing play type."}></FlippableCard>
      <FlippableCard frontContent={"POST SCORING"} backContent={"A player who is excellent at moving around the basket and finishing over others may have the Post Scoring play type."}></FlippableCard>
      <FlippableCard frontContent={"DEFENDING"} backContent={"A player who is excellent on defense and prevents the other team from scoring may have the Defending play type."}></FlippableCard>
      <FlippableCard frontContent={"GLASS CLEANING"} backContent={"A player who rebounds well and is usually taller than others may have the Glass Cleaning play type."}></FlippableCard>
    </View>
  );
}

export default App;
