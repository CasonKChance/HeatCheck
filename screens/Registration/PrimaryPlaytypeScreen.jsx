import React from 'react';
import BackgroundWrapperContainer from '../../components/wrappers/BackgroundWrapperContainer';
import FlippableCard from '../../components/wrappers/FlippableCard';
import {useUserData} from '../../context/UserDataContext';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
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
      <ScrollView>
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
      </ScrollView>
    </BackgroundWrapperContainer>
  );
};

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
export default PrimaryPlaytypeScreen
