import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const LoginButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container]}>
        <View style={styles.rect3}>
          <Text style={styles.login}>Login</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  rect3: {
    width: width / 2,
    height: height / 20,
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
    top: height / 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    fontFamily: 'BakbakOne-Regular',
    color: 'rgba(237,242,244,1)',
    fontSize: 20,
  },
});

export default LoginButton;