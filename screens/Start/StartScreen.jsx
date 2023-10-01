import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import BackgroundWrapperContainer from '../../components/BackgroundWrapperContainer';
import LoginButton from '../../components/LoginButton';
import GetStartedButton from '../../components/GetStartedButton';

const {height} = Dimensions.get('window');

const StartScreen = ({navigation}) => {
  return (
    <BackgroundWrapperContainer>
      <Text style={styles.heatCheck}>Heat Check</Text>
      <Text style={styles.turnUpTheHeat}>Turn Up The Heat</Text>
      <View>
        <GetStartedButton onPress={() => navigation.navigate('Registration')} />
        <LoginButton onPress={() => navigation.navigate('Login')} />
      </View>
    </BackgroundWrapperContainer>
  );
};
const styles = StyleSheet.create({
  heatCheck: {
    textAlign: 'center',
    marginTop: height / 8,
    fontFamily: 'BakbakOne-Regular',
    color: 'rgba(239,35,60,1)',
    fontSize: 48,
  },
  turnUpTheHeat: {
    marginTop: height / 16,
    marginBottom: height / 8,
    textAlign: 'center',
    fontFamily: 'BakbakOne-Regular',
    color: 'rgba(237,242,244,1)',
    fontSize: 20,
  },
});

export default StartScreen;
