import React, {useState} from 'react';
import BackgroundWrapperContainer from '../../components/wrappers/BackgroundWrapperContainer';
import FlippableCard from '../../components/wrappers/FlippableCard';
import {View, Text, StyleSheet} from 'react-native';

const playTypes = [
  {
    name: 'SHARPSHOOTING',
    description:
      'You have excellent shooting skills, especially spot-up shooting',
  },
  {
    name: 'SHOT CREATING',
    description:
      'You can create open shots for yourself off the dribble and get to your spots',
  },
  {
    name: 'PLAYMAKING',
    description: 'You are a great ball handler and an even better passer',
  },
  {
    name: 'SLASHING',
    description:
      'You are excellent at driving to the basket and finishing inside',
  },
  {
    name: 'POST SCORING',
    description:
      'You are excellent playing around the basket and finishing over others',
  },
  {
    name: 'DEFENDING',
    description:
      'You are excellent on defense and prevent the other team from scoring',
  },
  {
    name: 'GLASS CLEANING',
    description: 'You rebound well and are usually taller than others',
  },
];

const playTypeStyles = playTypes.map((_, index) => ({
  position: 'absolute',
  top: 90 + 135 * Math.floor(index / 2),
  left: 30 + 250 * (index % 2),
}));

const PrimaryPlaytypeScreen = ({navigation, route}) => {
  const [userData, setUserData] = useState({
    ...route.params?.userData,
    playType: undefined,
  });
  const updateUserData = newUserData => {
    setUserData({...userData, ...newUserData});
  };
  return (
    <BackgroundWrapperContainer>
      <Text style={styles.titleText}>Select your Primary Playtype</Text>
      {playTypes.map((playType, index) => (
        <View
          key={index}
          style={[styles.playTypeContainer, playTypeStyles[index]]}>
          <FlippableCard
            frontContent={playType.name}
            backContent={playType.description}
            navigation={navigation}
            handleUserData={() => updateUserData({playType: playType.name})}
            userData={userData}
          />
        </View>
      ))}
    </BackgroundWrapperContainer>
  );
};

const styles = StyleSheet.create({
  playTypeContainer: {
    // You can keep this empty for shared styles
  },
  titleText: {
    position: 'absolute',
    top: 35,
    left: 50,
    fontSize: 20,
    fontFamily: 'Georgia',
    fontWeight: 'bold',
  },
});

export default PrimaryPlaytypeScreen;
