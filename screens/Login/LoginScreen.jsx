import React from 'react';
import BackgroundWrapperContainer from '../../components/wrappers/BackgroundWrapperContainer';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import styles from './LoginScreenStyles';
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

export default LoginScreen;