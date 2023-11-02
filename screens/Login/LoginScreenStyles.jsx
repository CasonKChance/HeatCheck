import { StyleSheet } from 'react-native';

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

export default styles;
