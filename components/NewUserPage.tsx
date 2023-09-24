import React from 'react';
import {View, Button, StyleSheet, SafeAreaView, Text} from 'react-native';

const NewUserPage = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>HEAT CHECK</Text>
        <Text style={styles.subtitle}>TURN UP THE HEAT</Text>
        <View style={styles.getStartedButton}>
          <Button title={'Get Started'} />
        </View>
        <View style={styles.loginButton}>
          <Button title={'Login'} />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EDF2F4',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  title: {
    fontFamily: 'Bakbak One',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 48,
    lineHeight: 76,
    alignItems: 'center',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#EF233C',
    borderWidth: 3,
    borderColor: '#EDF2F4',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 12,
  },
  subtitle: {
    fontFamily: 'Bakbak One',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 36,
    alignItems: 'center',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#EDF2F4',
    borderWidth: 2,
    borderColor: '#EF233C',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 4,
  },
  getStartedButton: {backgroundColor: '#EDF2F4'},
  loginButton: {},
  loginText: {
    fontFamily: 'Bakbak One', // Change the font family
    fontSize: 20, // Change the font size
    color: '#EDF2F4', // Change the text color
  },
});

export default NewUserPage;
