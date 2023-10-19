import React, {useState} from 'react';
import BackgroundWrapperContainer from '../../components/wrappers/BackgroundWrapperContainer';
import FlippableCard from '../../components/wrappers/FlippableCard';
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

const PrimaryPlaytypeScreen = ({navigation, route}) => {
  return (
    <BackgroundWrapperContainer>
      <Text style={styles.titleText}>Select your Primary Playtype</Text>
      <View style = {styles.sharpshooting}>
      <FlippableCard frontContent={"SHARPSHOOTING"} backContent={"You have excellent shooting skills, especially spot up shooting"}></FlippableCard>
      </View>
      <View style = {styles.shotCreating}>
      <FlippableCard frontContent={"SHOT CREATING"} backContent={"You can create open shots for yourself off the dribble and get to your spots"}></FlippableCard>
      </View>
      <View style = {styles.playmaking}>
      <FlippableCard frontContent={"PLAYMAKING"} backContent={"You are a great ball handler and an even better passer"}></FlippableCard>
      </View>
      <View style = {styles.slashing}>
      <FlippableCard frontContent={"SLASHING"} backContent={"You are excellent at driving to the basket and finishing inside"}></FlippableCard>
      </View>
      <View style = {styles.postScoring}>
      <FlippableCard frontContent={"POST SCORING"} backContent={"You are excellent playing around the basket and finishing over others"}></FlippableCard>
      </View>
      <View style = {styles.defending}>
      <FlippableCard frontContent={"DEFENDING"} backContent={"You are excellent on defense and prevent the other team from scoring"}></FlippableCard>
      </View>
      <View style = {styles.glassCleaning}>
      <FlippableCard frontContent={"GLASS CLEANING"} backContent={"You rebound well and are usually taller than others"}></FlippableCard>
      </View>
    </BackgroundWrapperContainer>
  );
};

export default PrimaryPlaytypeScreen;

const styles = StyleSheet.create({
  sharpshooting: {
    position: 'absolute',
    top: 90,
    left: 30,
  },
  shotCreating: {
    position: 'absolute',
    top: 90,
    right: 30,
  },
  playmaking: {
    position: 'absolute',
    top: 225,
    left: 30,
  },
  slashing: {
    position: 'absolute',
    top: 225,
    right: 30,
  },
  postScoring: {
    position: 'absolute',
    top: 360,
    left: 30,
  },
  defending: {
    position: 'absolute',
    top: 360,
    right: 30,
  },
  glassCleaning: {
    position: 'absolute',
    top: 495,
    left: 30,
  },
  titleText: {
    position: 'absolute',
    top: 35,
    left: 50,
    fontSize: 20,
    font: 'Georgia',
    fontWeight: 'bold',
  }
});