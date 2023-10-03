import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RequiredScreen from './RequiredScreen';
import OptionalScreen from './OptionalScreen';

const Stack = createStackNavigator();

const Registration = () => {
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
    <Stack.Navigator
      initialRouteName="Required"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Required" component={RequiredScreen} />
      <Stack.Screen name="Optional" component={OptionalScreen} />
    </Stack.Navigator>
  );
};

export default Registration;
