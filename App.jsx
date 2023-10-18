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
import BackgroundWrapperContainer from './components/wrappers/BackgroundWrapperContainer';

function App() {
  return (
    <BackgroundWrapperContainer>
      <View style = {styles.sharpshooting}>
      <FlippableCard frontContent={"SHARPSHOOTING"} backContent={"A player who has excellent shooting skills, especially spot up shooting, may have the Sharpshooting play type."}></FlippableCard>
      </View>
      <View style = {styles.shotCreating}>
      <FlippableCard frontContent={"SHOT CREATING"} backContent={"A player who can create open shots for himself off the dribble and get to his spots may have the Shot Creating play type."}></FlippableCard>
      </View>
      <View style = {styles.playmaking}>
      <FlippableCard frontContent={"PLAYMAKING"} backContent={"A player who creates for his teammates, is a great ball handler and an even better passer may have the Playmaking play type."}></FlippableCard>
      </View>
      <View style = {styles.slashing}>
      <FlippableCard frontContent={"SLASHING"} backContent={"A player who is excellent at driving to the basket and finishing inside may have the Slashing play type."}></FlippableCard>
      </View>
      <View style = {styles.postScoring}>
      <FlippableCard frontContent={"POST SCORING"} backContent={"A player who is excellent at moving around the basket and finishing over others may have the Post Scoring play type."}></FlippableCard>
      </View>
      <View style = {styles.defending}>
      <FlippableCard frontContent={"DEFENDING"} backContent={"A player who is excellent on defense and prevents the other team from scoring may have the Defending play type."}></FlippableCard>
      </View>
      <View style = {styles.glassCleaning}>
      <FlippableCard frontContent={"GLASS CLEANING"} backContent={"A player who rebounds well and is usually taller than others may have the Glass Cleaning play type."}></FlippableCard>
      </View>
    </BackgroundWrapperContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  sharpshooting: {
    position: 'absolute',
    top: 10,
    left: 15,
  },
  shotCreating: {
    position: 'absolute',
    top: 10,
    right: 15,
  },
  playmaking: {
    position: 'absolute',
    top: 220,
    left: 15,
  },
  slashing: {
    position: 'absolute',
    top: 220,
    right: 15,
  },
  postScoring: {
    position: 'absolute',
    top: 430,
    left: 15,
  },
  defending: {
    position: 'absolute',
    top: 430,
    right: 15,
  },
  glassCleaning: {
    position: 'absolute',
    top: 640,
    left: 15,
  },
});
