import React, {useState} from 'react';
import {TextInput, Button, StyleSheet} from 'react-native';
import BackgroundWrapperContainer from '../../components/wrappers/BackgroundWrapperContainer';

const OptionalScreen = ({navigation}) => {
  return (
    <BackgroundWrapperContainer>
      <TextInput
        style={styles.input}
        placeholder="Age"
        keyboardType="numeric"
        value={formData.age}
        onChangeText={text => handleChange('age', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Hometown"
        value={formData.hometown}
        onChangeText={text => handleChange('hometown', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Skill Level"
        value={formData.skillLevel}
        onChangeText={text => handleChange('skillLevel', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Play Type"
        value={formData.playType}
        onChangeText={text => handleChange('playType', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Position"
        value={formData.position}
        onChangeText={text => handleChange('position', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Height"
        keyboardType="numeric"
        value={formData.height}
        onChangeText={text => handleChange('height', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Weight"
        keyboardType="numeric"
        value={formData.weight}
        onChangeText={text => handleChange('weight', text)}
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
export default OptionalScreen;
