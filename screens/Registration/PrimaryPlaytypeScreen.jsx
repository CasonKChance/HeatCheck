import React from 'react';
import BackgroundWrapperContainer from '../../components/wrappers/BackgroundWrapperContainer';
import FlippableCard from '../../components/wrappers/FlippableCard';
import {useUserData} from './UserDataContext';
import {View, Text, StyleSheet} from 'react-native';
import playTypes from './playTypes';

const playTypeStyles = playTypes.map((_, index) => ({
  position: 'absolute',
  top: 90 + 135 * Math.floor(index / 2),
  left: 30 + 250 * (index % 2),
}));

const PrimaryPlaytypeScreen = ({navigation, route}) => {
  const {userData, setUserData} = useUserData();
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
