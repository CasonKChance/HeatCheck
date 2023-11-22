import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const BackButton = ({navigation, style, isInitRegister}) => {
  const navigate = () => {
    isInitRegister ? navigation.navigate('Start') : navigation.goBack();
  };
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={navigate}>
      <Text style={styles.buttonText}>Back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(43,45,66,1)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'rgba(237,242,244,1)',
    fontFamily: 'BakbakOne-Regular',
  },
});

export default BackButton;
