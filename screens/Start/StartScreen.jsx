import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import BackgroundWrapperContainer from '../../components/wrappers/BackgroundWrapperContainer';
import LoginButton from '../../components/buttons/LoginButton';
import GetStartedButton from '../../components/buttons/GetStartedButton';

const StartScreen = ({navigation}) => {
  return (
    <BackgroundWrapperContainer>
      <Text style={styles.heatCheckR}>Heat Check</Text>
      <Text style={styles.heatCheckB}>Heat Check</Text>
      <Text style={styles.turnUpTheHeat1}>Turn Up The Heat</Text>
      <Text style={styles.turnUpTheHeat2}>Turn Up The Heat</Text>
      <View>
        <GetStartedButton onPress={() => navigation.navigate('Registration')} />
        <LoginButton onPress={() => navigation.navigate('Login')} />
      </View>
    </BackgroundWrapperContainer>
  );
};
const styles = StyleSheet.create({
  heatCheckR: {
    textAlign: 'center',
    fontFamily: 'Graduate-Regular',
    color: 'rgba(0,0,0,1)',
    fontSize: 57,
    marginTop: 70,
    marginBottom: -65,
  },
  heatCheckB: {
    textAlign: 'center',
    right: 3.5,
    fontFamily: 'Graduate-Regular',
    color: 'rgba(194,1,20,1)',
    fontSize: 57,
  },
  //orange layer
  turnUpTheHeat2: {
    right: 2.5,
    textAlign: 'center',
    fontFamily: 'BebasNeue-Regular',
    fontStyle: 'italic',
    color: 'rgba(255,167,55,1)',
    fontSize: 38,
    marginTop: -40,
    paddingBottom: 125,
  },
  //black layer
  turnUpTheHeat1: {
    textAlign: 'center',
    fontFamily: 'BebasNeue-Regular',
    fontStyle: 'italic',
    color: 'rgba(0,0,0,1)',
    fontSize: 38,
    marginBottom: -5,
  },
});

export default StartScreen;
