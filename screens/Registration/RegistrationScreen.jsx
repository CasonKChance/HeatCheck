import React, {useState} from 'react';
import {TextInput, Button, StyleSheet} from 'react-native';
import BackgroundContainer from '../../components/BackgroundContainer';

const RegistrationScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    email: '',
    phoneNumber: '',
    age: '',
    hometown: '',
    skillLevel: '',
    playType: '',
    position: '',
    height: '',
    weight: '',
  });

  const handleChange = (field, value) => {
    setFormData({...formData, [field]: value});
  };

  const handleRegistration = () => {
    // Handle registration logic here
  };

  return (
    <BackgroundContainer>
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
      <Button title="Register" onPress={handleRegistration} />
    </BackgroundContainer>
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

export default RegistrationScreen;
