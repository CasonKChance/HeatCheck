import React, {useState, useEffect} from 'react';
import BackgroundWrapperContainer from '../../components/wrappers/BackgroundWrapperContainer';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';

import styles from './RequiredScreenStyles';
const RequiredScreen = ({navigation}) => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
  });

  const [isEnabled, setIsEnabled] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    // Check if all required fields are filled out
    const {firstName, lastName, emailAddress, password, confirmPassword} =
      userData;

    const allFieldsFilled =
      firstName && lastName && emailAddress && password && confirmPassword;

    const isPasswordMatch = password === confirmPassword;

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);

    const isPasswordValid =
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /\d/.test(password) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(password);

    setPasswordError(
      !isPasswordValid
        ? 'Password must be at least 8 characters long and include uppercase, lowercase, digit, and special character.'
        : '',
    );

    // Update the state to enable/disable the Continue button
    setIsEnabled(
      allFieldsFilled && isPasswordMatch && isEmailValid && isPasswordValid,
    );
  }, [userData]);

  const handleInputChange = (field, value) => {
    setUserData(prevUserData => ({
      ...prevUserData,
      [field]: value,
    }));
  };

  const handlePasswordBlur = () => {
    // Validate password and set error message when the user clicks out of the password field
    const {password} = userData;
    const isPasswordValid =
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /\d/.test(password) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(password);

    setPasswordError(
      !isPasswordValid
        ? 'Password must be at least 8 characters long and include uppercase, lowercase, digit, and special character.'
        : '',
    );
  };

  const handleContinue = () => {
    if (!isEnabled) {
      setPasswordError('Please fix the errors before continuing.'); // Show a general error message
    } else {
      navigation.navigate('Optional', {userData});
    }
  };

  return (
    <BackgroundWrapperContainer>
      <SafeAreaView>
        <ScrollView style={styles.container}>
          <Text style={styles.header}>Register</Text>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
          {renderInputWithIcon('First Name', 'firstName', handleInputChange)}
          {renderInputWithIcon('Last Name', 'lastName', handleInputChange)}
          {renderInputWithIcon(
            'Email Address',
            'emailAddress',
            handleInputChange,
            'email-address',
            'none',
          )}
          {renderInputWithIcon(
            'Password',
            'password',
            handleInputChange,
            'default',
            'password',
            handlePasswordBlur,
          )}
          {passwordError !== '' && (
            <Text style={styles.errorText}>{passwordError}</Text>
          )}
          {renderInputWithIcon(
            'Confirm Password',
            'confirmPassword',
            handleInputChange,
            'default',
            'password',
          )}
          <TouchableOpacity
            style={[
              styles.continueButton,
              {
                backgroundColor: isEnabled ? 'rgba(239,35,60,1)' : 'gray',
              },
            ]}
            onPress={handleContinue}
            disabled={!isEnabled}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
          <Text style={styles.otherRegisterText}>Or, register with ...</Text>
          <View style={styles.newUserContainer}>
            <Text style={styles.newUserText}>Already registered?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text style={styles.loginLinkText}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </BackgroundWrapperContainer>
  );
};

const renderInputWithIcon = (
  placeholder,
  fieldName,
  handleInputChange,
  keyboardType = 'default',
  secureTextEntry = 'none',
  onBlur = null,
) => {
  return (
    <View style={styles.inputContainer}>
      {
        (() => {
          switch (fieldName) {
            case 'emailAddress':
              return (
                <Icon name="envelope" size={20} color="#000000" style={{ marginRight: "2.5%" }} />
              );
            case 'password':
              return (
                <Icon name="lock" size={20} style={styles.icon} />
              );
            case 'firstName':
              return (
                <Icon name="user" size={20} color="#000000" style={{ marginRight: "2.5%" }} />
              )
              case 'lastName':
                return (
                  <Icon name="user" size={20} color="#000000" style={{ marginRight: "2.5%" }} />
                )
                case 'confirmPassword':
                  return (
                    <Icon name="lock" size={20} color="#000000" style={{ marginRight: "2.5%" }} />
                  )
            // Add more cases for other field names if needed
            default:
              return null; // Or any default icon you want to use
          }
        })()
      }
      <TextInput
        placeholder={placeholder}
        style={styles.inputField}
        keyboardType={keyboardType}
        autoCapitalize="none"
        onChangeText={text => handleInputChange(fieldName, text)}
        secureTextEntry={secureTextEntry === 'password'}
        onBlur={onBlur}
      />
    </View>
  );
};

export default RequiredScreen;
