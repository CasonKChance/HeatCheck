/* eslint-disable react-native/no-inline-styles */
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
} from 'react-native';
import GoogleSVG from '../../assets/images/google.svg';
import FacebookSVG from '../../assets/images/facebook.svg';
import TwitterSVG from '../../assets/images/twitter.svg';

const LoginScreen = ({navigation}) => {
  return (
    <BackgroundWrapperContainer>
      <SafeAreaView>
        <View style={{paddingHorizontal: 25}}>
          {/* <View style={{alignItems: 'center'}}>
            <LogoPNG height={300} width={300} />
          </View> */}
          <Text
            style={{
              fontFamily: 'BakbakOne-Regular',
              fontSize: 28,
              fontWeight: '500',
              marginBottom: 30,
            }}>
            Login
          </Text>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 2,
              paddingBottom: 8,
              marginBottom: 25,
            }}>
            <MaterialIcons
              name="alternate-email"
              size={20}
              style={{marginRight: 5, color: 'rgba(43,45,66,1)'}}
            />
            <TextInput
              placeholder="Email Address"
              style={{
                fontFamily: 'BakbakOne-Regular',
                flex: 1,
                paddingVertical: 0,
                color: 'rgba(43,45,66,1)',
              }}
              keyboardType="email-address"
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 2,
              paddingBottom: 8,
              marginBottom: 25,
            }}>
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              style={{marginRight: 5, color: 'rgba(43,45,66,1)'}}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={{
                fontFamily: 'BakbakOne-Regular',
                flex: 1,
                paddingVertical: 0,
              }}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Text
                style={{
                  color: 'rgba(239,35,60,1)',
                  fontFamily: 'BakbakOne-Regular',
                  fontWeight: '700',
                }}>
                Forgot?
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(239,35,60,1)',
              padding: 20,
              borderRadius: 10,
              marginBottom: 30,
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Text
              style={{
                fontFamily: 'BakbakOne-Regular',
                textAlign: 'center',
                fontWeight: '700',
                color: 'rgba(237,242,244,1)',
                fontSize: 16,
              }}>
              Login
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: 'BakbakOne-Regular',
              textAlign: 'center',
              color: 'rgba(43,45,66,1)',
              marginBottom: 30,
            }}>
            Or, login with ...
          </Text>
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 30,
            }}>
            <Text style={{color: 'rgba(43, 45, 66, 1)', fontWeight: '700'}}>
              New to the app?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Registration')}>
              <Text style={{color: 'rgba(239,35,60,1)', fontWeight: '700'}}>
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
