import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import BakbakOneFont from '../assets/fonts/BakbakOne-Regular.ttf';

const customFont = {fontFamily: 'BakbakOne-Regular', src: BakbakOneFont};

const LoginButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container]}>
        <View style={styles.rect3}>
          <Text style={[styles.login, customFont]}>Login</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center'},
  rect3: {
    width: 180,
    height: 40,
    backgroundColor: 'rgba(43,45,66,1)',
    borderRadius: 40,
    shadowColor: 'rgba(43,45,66,1)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 60,
    shadowOpacity: 1,
    shadowRadius: 20,
    marginTop: 80,
  },
  login: {
    fontFamily: 'BakbakOne-Regular',
    color: 'rgba(237,242,244,1)',
    fontSize: 20,
    marginTop: 6,
    marginLeft: 65,
  },
});

export default LoginButton;
