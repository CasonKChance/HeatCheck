import React from 'react';
import BackgroundWrapperContainer from '../../components/wrappers/BackgroundWrapperContainer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

// Reusable Input Component
const InputField = ({placeholder, secureTextEntry, keyboardType, icon}) => (
  <View style={styles.inputContainer}>
    {icon}
    <TextInput
      placeholder={placeholder}
      style={styles.inputField}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
    />
  </View>
);

const LoginScreen = ({navigation}) => {
  return (
    <BackgroundWrapperContainer>
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Login</Text>

        <InputField
          placeholder="Email Address"
          keyboardType="email-address"
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              style={styles.inputIcon}
            />
          }
        />

        <InputField
          placeholder="Password"
          secureTextEntry={true}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              style={styles.inputIcon}
            />
          }
        />

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.newUserContainer}>
          <Text style={styles.newUserText}>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </BackgroundWrapperContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    margin: 20,
  },
  header: {
    fontFamily: 'BakbakOne-Regular',
    fontSize: 28,
    fontWeight: '500',
    marginBottom: 30,
    color: 'rgba(43,45,66,1)',
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    paddingBottom: 8,
    marginBottom: 25,
    color: 'rgba(43, 45, 66, 1)',
  },
  inputIcon: {
    marginRight: 5,
    color: 'rgba(43,45,66,1)',
  },
  inputField: {
    fontFamily: 'BakbakOne-Regular',
    flex: 1,
    paddingVertical: 0,
    color: 'rgba(43,45,66,1)',
  },
  loginButton: {
    backgroundColor: 'rgba(239,35,60,1)',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  loginButtonText: {
    fontFamily: 'BakbakOne-Regular',
    textAlign: 'center',
    fontWeight: '700',
    color: 'rgba(237,242,244,1)',
    fontSize: 16,
  },
  newUserContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  newUserText: {
    color: 'rgba(43, 45, 66, 1)',
    fontWeight: '700',
    fontFamily: 'BakbakOne-Regular',
  },
  registerText: {
    color: 'rgba(239,35,60,1)',
    fontWeight: '700',
    marginLeft: 5,
  },
});

export default LoginScreen;
