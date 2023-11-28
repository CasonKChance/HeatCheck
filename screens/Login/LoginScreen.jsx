import React from 'react';
import BackgroundWrapperContainer from '../../components/wrappers/BackgroundWrapperContainer';
import Icon from 'react-native-vector-icons/FontAwesome';
import BackButton from '../../components/buttons/BackButton';
import {CommonActions} from '@react-navigation/native';
import {useUserAuth} from '../../context/UserAuthContext';
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const {setIsUserAuth} = useUserAuth();
  const navigateToHome = () => {
    setIsUserAuth(true);
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Home', // Replace with the name of the screen you want to navigate to in the parent navigator
      }),
    );
  };
  return (
    <BackgroundWrapperContainer>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Login</Text>
            <BackButton navigation={navigation} isInitRegister={true} />
          </View>
          {renderInputField('Email Address', 'envelope', 'email-address')}
          {renderInputField('Password', 'lock', 'password', true)}

          <TouchableOpacity style={styles.loginButton} onPress={navigateToHome}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.newUserContainer}>
            <Text style={styles.newUserText}>New to the app?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Registration')}>
              <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </BackgroundWrapperContainer>
  );
};

const renderInputField = (placeholder, iconName, keyboardType, isPassword) => {
  return (
    <View style={styles.inputContainer}>
      <Icon
        name={iconName}
        size={iconName === 'lock' ? 30 : 20}
        color="#000000"
        style={styles.icon}
      />
      <TextInput
        placeholder={placeholder}
        style={isPassword ? styles.passwordField : styles.emailField}
        keyboardType={keyboardType}
        secureTextEntry={isPassword}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
  },
  header: {
    marginTop: 20,
    fontFamily: 'BakbakOne-Regular',
    fontSize: 35,
    fontWeight: '500',
    marginBottom: 30,
    color: 'rgba(43,45,66,1)',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    paddingBottom: 8,
    marginBottom: 30,
    color: 'rgba(43, 45, 66, 1)',
  },
  icon: {
    marginRight: '2.5%',
  },
  emailField: {
    fontFamily: 'BakbakOne-Regular',
    flex: 1,
    paddingVertical: 0,
    color: 'rgba(43,45,66,1)',
  },
  passwordField: {
    fontFamily: 'BakbakOne-Regular',
    flex: 1,
    paddingVertical: 0,
    marginBottom: 0,
  },
  loginButton: {
    backgroundColor: 'rgba(239,35,60,1)',
    padding: 20,
    borderRadius: 10,
    marginBottom: 25,
  },
  loginButtonText: {
    fontFamily: 'BakbakOne-Regular',
    textAlign: 'center',
    fontWeight: '700',
    color: 'rgba(237,242,244,1)',
    fontSize: 20,
  },
  newUserContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
    alignItems: 'center',
  },
  newUserText: {
    color: 'rgba(43, 45, 66, 1)',
    fontWeight: '700',
    fontSize: 20,
    fontFamily: 'BakbakOne-Regular',
  },
  registerText: {
    color: 'rgba(239, 35, 60, 1)',
    fontWeight: '700',
    fontSize: 18,
    fontFamily: 'BakbakOne-Regular',
  },
});

export default LoginScreen;
