import React, {useState, useEffect} from 'react';
import BackgroundWrapperContainer from '../../components/wrappers/BackgroundWrapperContainer';
import {useUserData} from '../../context/UserDataContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Alert,
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
      firstName &&
        lastName &&
        emailAddress &&
        password &&
        confirmPassword &&
        isEmailValid &&
        isPasswordValid &&
        password === confirmPassword,
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
    if (password) { // Check if password is not empty
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
    } else {
      // Optionally clear the password error if the field is empty
      setPasswordError('');
    }
  };
  

  // const handleContinue = () => {
  //   if (!isEnabled) {
  //     setPasswordError('Please fix the errors before continuing.'); // Show a general error message
  //   } else {
  //     navigation.navigate('Playtype', {userData});
  //   }
  // };

  const handleContinue = () => {
    const {firstName, lastName, emailAddress, password, confirmPassword} = userData;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
    const isPasswordValid =
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /\d/.test(password) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // Check if all required fields are filled out
    if (!firstName || !lastName || !emailAddress || !password || !confirmPassword) {
      Alert.alert('Incomplete Fields', 'Please make sure all fields are filled.');
      return;
    }

    // Validate Email
    if (!isEmailValid) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    // Validate Password
    if (!isPasswordValid) {
      Alert.alert('Invalid Password', 'Password must be at least 8 characters long and include uppercase, lowercase, digit, and special character.');
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      Alert.alert('Password Mismatch', 'The passwords do not match. Please check and try again.');
      return;
    }

    // If all checks pass, navigate to the next screen
    navigation.navigate('Playtype', {userData});
};

  

  const renderInputWithIcon = (
    placeholder,
    fieldName,
    keyboardType = 'default',
    secureTextEntry = false,
    onBlur = null,
  ) => {
    return (
      <View style={styles.inputContainer}>
        {fieldName === 'emailAddress' && (
          <Icon
            name="envelope"
            size={20}
            color="#000000"
            style={{marginRight: '2.5%'}}
          />
        )}
        {fieldName === 'password' && (
          <Icon name="lock" size={20} style={styles.icon} />
        )}
        {fieldName === 'firstName' && (
          <Icon
            name="user"
            size={20}
            color="#000000"
            style={{marginRight: '2.5%'}}
          />
        )}
        {fieldName === 'lastName' && (
          <Icon
            name="user"
            size={20}
            color="#000000"
            style={{marginRight: '2.5%'}}
          />
        )}
        <TextInput
          placeholder={placeholder}
          style={styles.inputField}
          keyboardType={keyboardType}
          autoCapitalize="none"
          onChangeText={text => handleInputChange(fieldName, text)}
          secureTextEntry={secureTextEntry}
          onBlur={onBlur}
        />
      </View>
    );
  };

  return (
    <BackgroundWrapperContainer>
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Register</Text>
          {renderInputWithIcon('First Name', 'firstName')}
          {renderInputWithIcon('Last Name', 'lastName')}
          {renderInputWithIcon(
            'Email Address',
            'emailAddress',
            'email-address',
            false,
          )}
          {renderInputWithIcon(
            'Password',
            'password',
            'default',
            true,
            handlePasswordBlur,
          )}
          {passwordError !== '' && (
            <Text style={styles.errorText}>{passwordError}</Text>
          )}
          {renderInputWithIcon(
            'Confirm Password',
            'confirmPassword',
            'default',
            true,
          )}

          <TouchableOpacity
            style={[
              styles.continueButton,
              {
                backgroundColor: 'rgba(239,35,60,1)',
              },
            ]}
            onPress={handleContinue}
            >
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
      </SafeAreaView>
    </BackgroundWrapperContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
  },
  header: {
    fontFamily: 'Optima',
    fontSize: 30,
    fontWeight: '500',
    marginBottom: 30,
    color: 'rgba(43,45,66,1)',
    marginTop: 0,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 0,
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
    fontFamily: 'Optima',
    flex: 1,
    paddingVertical: 0,
    color: 'rgba(43,45,66,1)',
  },
  errorText: {
    fontFamily: 'Optima',
    color: 'red',
    marginBottom: 10,
  },
  continueButton: {
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  continueButtonText: {
    fontFamily: 'Optima',
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
    fontFamily: 'Optima',
  },
  loginLinkText: {
    color: 'rgba(239,35,60,1)',
    fontWeight: '700',
    marginLeft: 5,
  },
});

export default RequiredScreen;
