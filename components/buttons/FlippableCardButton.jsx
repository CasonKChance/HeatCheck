import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const FlippableCardButton = ({navigation}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Optional')}>
      <Text style={styles.buttonText}>Select</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 75, // You can adjust this width as needed
    height: 30, // You can adjust this height as needed
  },
  buttonText: {
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
  },
});

export default FlippableCardButton;
