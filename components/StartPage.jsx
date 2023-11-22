import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import BackgroundContainer from './BackgroundContainer';

const StartPage = () => {
  return (
    <BackgroundContainer>
      <Text style={styles.heatCheck}>Heat Check</Text>
      <Text style={styles.turnUpTheHeat}>Turn Up The Heat</Text>
      <View style={styles.rect2} />
    </BackgroundContainer>
  );
};

const styles = StyleSheet.create({
  heatCheck: {
    top: 128,
    left: 64,
    position: 'absolute',
    fontFamily: 'bakbak-one-regular',
    color: 'rgba(239,35,60,1)',
    fontSize: 48,
  },
  turnUpTheHeat: {
    top: 224,
    left: 106,
    position: 'absolute',
    fontFamily: 'bakbak-one-regular',
    color: 'rgba(50,50,50,1)',
    fontSize: 20,
  },
  rect2: {
    top: 339,
    left: 98,
    width: 180,
    height: 40,
    position: 'absolute',
    backgroundColor: 'rgba(237,242,244,1)',
    borderRadius: 40,
    shadowColor: 'rgba(43,45,66,1)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 60,
    shadowOpacity: 1,
    shadowRadius: 20,
  },
  imageStack: {
    width: 375,
    height: 812,
  },
});

export default StartPage;
