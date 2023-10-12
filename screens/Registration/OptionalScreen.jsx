import React, {useState} from 'react';
import BackgroundWrapperContainer from '../../components/wrappers/BackgroundWrapperContainer';
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

const submitHandler = () => {};

const OptionalScreen = ({navigation, route}) => {
  const [userData, setUserData] = useState(route.params?.userData);
  return (
    <BackgroundWrapperContainer>
      <SafeAreaView>
        <View style={{paddingHorizontal: 25}}>
          <Text style={styles.header}>Optional</Text>
          <View style={styles.inputContainer}>
            <TextInput placeholder="First Name" style={styles.emailField} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Last Name" style={styles.emailField} />
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={submitHandler}>
            <Text style={styles.loginButtonText}>Submit</Text>
          </TouchableOpacity>
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

export default OptionalScreen;
