import React, {useState, useEffect} from 'react';
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
// import GoogleSVG from '../../assets/images/google.svg';
// import FacebookSVG from '../../assets/images/facebook.svg';
// import TwitterSVG from '../../assets/images/twitter.svg';

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

  return (
    <BackgroundWrapperContainer>
      <SafeAreaView>
        <View style={styles.container}>
          {/* <View style={{alignItems: 'center'}}>
            <LogoPNG height={300} width={300} />
          </View> */}
          <Text style={styles.header}>Register</Text>
          <View style={styles.inputContainer}>
            {/* <MaterialIcons
              name="alternate-email"
              size={20}
              style={{marginRight: 5, color: 'rgba(43,45,66,1)'}}
            /> */}
            <TextInput
              placeholder="First Name"
              style={styles.emailField}
              onChangeText={text => handleInputChange('firstName', text)}
            />
          </View>
          <View style={styles.inputContainer}>
            {/* <MaterialIcons
              name="alternate-email"
              size={20}
              style={{marginRight: 5, color: 'rgba(43,45,66,1)'}}
            /> */}
            <TextInput
              placeholder="Last Name"
              style={styles.emailField}
              onChangeText={text => handleInputChange('lastName', text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <MaterialIcons
              name="alternate-email"
              size={20}
              style={{marginRight: 5, color: 'rgba(43,45,66,1)'}}
            />
            <TextInput
              placeholder="Email Address"
              style={styles.emailField}
              keyboardType="email-address"
              onChangeText={text => handleInputChange('emailAddress', text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              style={{marginRight: 5, color: 'rgba(43,45,66,1)'}}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={styles.passwordField}
              onChangeText={text => {
                handleInputChange('password', text);
              }}
              onBlur={handlePasswordBlur}
            />
          </View>
          {passwordError !== '' && (
            <Text style={styles.errorText}>{passwordError}</Text>
          )}
          <View style={styles.inputContainer}>
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              style={{marginRight: 5, color: 'rgba(43,45,66,1)'}}
            />
            <TextInput
              placeholder="Confirm Password"
              secureTextEntry={true}
              style={styles.passwordField}
              onChangeText={text => handleInputChange('confirmPassword', text)}
            />
          </View>

          <TouchableOpacity
            style={[
              styles.loginButton,
              {
                backgroundColor: isEnabled ? 'rgba(239,35,60,1)' : 'gray',
              },
            ]}
            onPress={() => {
              if (!isEnabled) {
                setPasswordError('Please fix the errors before continuing.'); // Show a general error message
              } else {
                navigation.navigate('Optional', {userData});
              }
            }}
            disabled={!isEnabled}>
            <Text style={styles.loginButtonText}>Continue</Text>
          </TouchableOpacity>
          <Text style={styles.otherLoginText}>Or, register with ...</Text>
          {/* <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 30,
            }}>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                borderColor: '#ddd',
                borderWidth: 2,
                borderRadius: 10,
                paddingHorizontal: 30,
                paddingVertical: 10,
              }}>
              <GoogleSVG height={24} width={24} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                borderColor: '#ddd',
                borderWidth: 2,
                borderRadius: 10,
                paddingHorizontal: 30,
                paddingVertical: 10,
              }}>
              <FacebookSVG height={24} width={24} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                borderColor: '#ddd',
                borderWidth: 2,
                borderRadius: 10,
                paddingHorizontal: 30,
                paddingVertical: 10,
              }}>
              <TwitterSVG height={24} width={24} />
            </TouchableOpacity>
          </View> */}
          <View style={styles.newUserContainer}>
            <Text
              style={{
                color: 'rgba(43, 45, 66, 1)',
                fontWeight: '700',
                fontFamily: 'BakbakOne-Regular',
              }}>
              Already registered?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text style={{color: 'rgba(239,35,60,1)', fontWeight: '700'}}>
                {' '}
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </BackgroundWrapperContainer>
  );
};

const styles = StyleSheet.create({
  container: {paddingHorizontal: 25},
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
  },
  forgot: {
    color: 'rgba(239,35,60,1)',
    fontFamily: 'BakbakOne-Regular',
    fontWeight: '700',
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
  otherLoginText: {
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
});

export default RequiredScreen;
