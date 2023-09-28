import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function App(): JSX.Element {
  const handleLoginPress = () => {
    // login
  };

  const handleRegisterPress = () => {
    // register
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HEAT CHECK</Text>
      <Text style={styles.subtitle}>TURN UP THE HEAT</Text>
      <TouchableOpacity style={styles.login} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.register} onPress={handleRegisterPress}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: ,
    alignItems: 'center',
    backgroundColor: '#f0ebeb'
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 100,
    color: '#bf261b',

  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20
  },
  login: {
    backgroundColor: '#007AFF', 
    padding: 10,
    borderRadius: 10,
    marginVertical: 150,
  },
  register: {
    backgroundColor: '#007AFF', 
    padding: 10,
    borderRadius: 10,
    marginVertical: -120,

  },
  buttonText: {
    color: '#fff', 
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
