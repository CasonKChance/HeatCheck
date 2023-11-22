import React from 'react';
import BackgroundWrapperContainer from '../../components/wrappers/BackgroundWrapperContainer';
import FlippableCard from '../../components/wrappers/FlippableCard';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const PrimaryPlaytypeScreen = ({ navigation, route }) => {
  return (
    <BackgroundWrapperContainer style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Select your Primary Playtype</Text>
        </View>
        <View style={styles.playtypeContainer}>
          <View style={styles.sharpshooting}>
            <FlippableCard frontContent={"SHARPSHOOTING"} backContent={"You have excellent shooting skills, especially spot up shooting"}></FlippableCard>
          </View>
          <View style={styles.shotCreating}>
            <FlippableCard frontContent={"SHOT CREATING"} backContent={"You can create open shots for yourself off the dribble and get to your spots"}></FlippableCard>
          </View>
          <View style={styles.playmaking}>
            <FlippableCard frontContent={"PLAYMAKING"} backContent={"You are a great ball handler and an even better passer"}></FlippableCard>
          </View>
          <View style={styles.slashing}>
            <FlippableCard frontContent={"SLASHING"} backContent={"You are excellent at driving to the basket and finishing inside"}></FlippableCard>
          </View>
          <View style={styles.postScoring}>
            <FlippableCard frontContent={"POST SCORING"} backContent={"You are excellent playing around the basket and finishing over others"}></FlippableCard>
          </View>
          <View style={styles.defending}>
            <FlippableCard frontContent={"DEFENDING"} backContent={"You are excellent on defense and prevent the other team from scoring"}></FlippableCard>
          </View>
          <View style={styles.glassCleaning}>
            <FlippableCard frontContent={"GLASS CLEANING"} backContent={"You rebound well and are usually taller than others"}></FlippableCard>
          </View>
        </View>
      </ScrollView>
    </BackgroundWrapperContainer>
  );
};

export default PrimaryPlaytypeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
  },
  titleText: {
    color: '#FF1B1C',
    fontWeight: 'bold',
    fontSize: 26,
    fontFamily: 'BakBakOne-Regular',
  },
  playtypeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 1,
    justifyContent: 'center',
  },
  playtypeCard: {
    margin: 0,
  },
  // Define scrollViewContent if needed
  // scrollViewContent: { /* Your styles here */ },
});

