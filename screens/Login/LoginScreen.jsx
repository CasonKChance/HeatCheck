import React from 'react';
import BackgroundWrapperContainer from '../../components/wrappers/BackgroundWrapperContainer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { Center } from 'native-base';
import { forVerticalIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
// import GoogleSVG from '../../assets/images/google.svg';
// import FacebookSVG from '../../assets/images/facebook.svg';
// import TwitterSVG from '../../assets/images/twitter.svg';

const LoginScreen = ({navigation}) => {
  return (
    <BackgroundWrapperContainer>
      <SafeAreaView>
        <View style={{paddingHorizontal: 25}}>
          {/* <View style={{alignItems: 'center'}}>
            <LogoPNG height={300} width={300} />
          </View> */}
          <Text style={styles.header}>Login</Text>
          <View style={styles.inputContainer}>
          <Icon name="envelope" size={20} color="#000000" style={{ marginRight: "2.5%" }} />
            <TextInput
              placeholder="Email Address"
              style={styles.emailField}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputContainer}>
          <Icon name="lock" size={30} color="#000000" style={{ marginRight: "2.5%" }} />
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={styles.passwordField}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Text style={styles.forgot}>Forgot?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.otherLoginText}>Or, login with ...</Text>
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
                fontSize: 20,
                fontFamily: 'BakbakOne-Regular',
              }}>
              New to the app?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Registration')}>
              <Text style={{
                color: 'rgba(239,35,60,1)',
                 fontWeight: '700',
                  fontSize: 18,
                  fontFamily: 'BakbakOne-Regular',
                  }}>
                {' '}
                Register
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
    marginTop: 20,
    fontFamily: 'BakbakOne-Regular',
    fontSize: 35,
    fontWeight: '500',
    marginBottom: 30,
    color: 'rgba(43,45,66,1)',
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    paddingBottom: 8,
    marginBottom: 30,
    color: 'rgba(43, 45, 66, 1)',
    paddingBottom: 5,
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
  forgot: {
    color: 'rgba(239,35,60,1)',
    fontFamily: 'BakbakOne-Regular',
    fontSize: 15,
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
  otherLoginText: {
    marginTop: 10,
    fontFamily: 'BakbakOne-Regular',
    textAlign: 'center',
    color: 'rgba(43,45,66,1)',
    fontSize: 20,
    marginBottom: 15,
  },
  newUserContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
    alignItems: 'center',
  },
});

export default LoginScreen;