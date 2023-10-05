import React, {useState} from 'react';
import {TextInput, Button, StyleSheet} from 'react-native';
import BackgroundWrapperContainer from '../../components/wrappers/BackgroundWrapperContainer';

const RequiredScreen = ({navigation}) => {
  return (
    <BackgroundWrapperContainer>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={formData.name}
        onChangeText={text => handleChange('name', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={formData.username}
        onChangeText={text => handleChange('username', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={formData.password}
        onChangeText={text => handleChange('password', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={formData.email}
        onChangeText={text => handleChange('email', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="numeric"
        value={formData.phoneNumber}
        onChangeText={text => handleChange('phoneNumber', text)}
      />

      <Button title="Next" onPress={() => navigation.navigate('Optional')} />
    </BackgroundWrapperContainer>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});
export default RequiredScreen;
