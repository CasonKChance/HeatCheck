import React, {useState, useEffect} from 'react';
import BackgroundWrapperContainer from '../../components/wrappers/BackgroundWrapperContainer';
import BackButton from '../../components/buttons/BackButton';
import {useUserData} from '../../context/UserDataContext';
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

const RequiredScreen = ({navigation}) => {
  const {userData, setUserData} = useUserData();
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
      password.length >= 8 && // Minimum length
      /[A-Z]/.test(password) && // Contains uppercase letters
      /[a-z]/.test(password) && // Contains lowercase letters
      /\d/.test(password) && // Contains at least one digit
      /[!@#$%^&*(),.?":{}|<>]/.test(password); // Contains at least one special character

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
      navigation.navigate('Playtype', {userData});
    }
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
        {(() => {
          switch (fieldName) {
            case 'emailAddress':
              return (
                <Icon
                  name="envelope"
                  size={20}
                  color="#000000"
                  style={{marginRight: '2.5%'}}
                />
              );
            case 'password':
              return <Icon name="lock" size={20} style={styles.icon} />;
            case 'firstName':
              return (
                <Icon
                  name="user"
                  size={20}
                  color="#000000"
                  style={{marginRight: '2.5%'}}
                />
              );
            case 'lastName':
              return (
                <Icon
                  name="user"
                  size={20}
                  color="#000000"
                  style={{marginRight: '2.5%'}}
                />
              );
            case 'confirmPassword':
              return (
                <Icon
                  name="lock"
                  size={20}
                  color="#000000"
                  style={{marginRight: '2.5%'}}
                />
              );
            // Add more cases for other field names if needed
            default:
              return null; // Or any default icon you want to use
          }
        })()}
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

  return (
    <BackgroundWrapperContainer>
      <SafeAreaView>
        <ScrollView style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Register</Text>
            <BackButton navigation={navigation} isInitRegister={true} />
          </View>

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

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
  },
  header: {
    fontFamily: 'BakbakOne-Regular',
    fontSize: 28,
    fontWeight: '500',
    marginBottom: 30,
    color: 'rgba(43,45,66,1)',
    marginTop: 20,
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
    marginBottom: 25,
    color: 'rgba(43, 45, 66, 1)',
  },
  icon: {
    marginRight: 5,
    color: 'rgba(43,45,66,1)',
  },
  inputField: {
    fontFamily: 'BakbakOne-Regular',
    flex: 1,
    paddingVertical: 0,
    color: 'rgba(43,45,66,1)',
  },
  errorText: {
    fontFamily: 'BakbakOne-Regular',
    color: 'red',
    marginBottom: 10,
  },
  continueButton: {
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    backgroundColor: isEnabled => (isEnabled ? 'rgba(239,35,60,1)' : 'gray'),
  },
  continueButtonText: {
    fontFamily: 'BakbakOne-Regular',
    textAlign: 'center',
    fontWeight: '700',
    color: 'rgba(237,242,244,1)',
    fontSize: 16,
  },
  otherRegisterText: {
    fontFamily: 'BakbakOne-Regular',
    textAlign: 'center',
    color: 'rgba(43,45,66,1)',
    marginBottom: 30,
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
  loginLinkText: {
    color: 'rgba(239,35,60,1)',
    fontWeight: '700',
    marginLeft: 5,
  },
});

export default RequiredScreen;
