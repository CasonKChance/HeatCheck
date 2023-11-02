import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
  },
  header: {
    fontFamily: 'BakbakOne-Regular',
    fontSize: 28,
    fontWeight: '500',
    marginBottom: 15,
    color: 'rgba(43,45,66,1)',
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    paddingTop: 0,
    marginTop: 5,
    paddingBottom: 8,
    marginBottom: 25,
    color: 'rgba(43, 45, 66, 1)',
  },
  icon: {
    marginRight: 5,
    color: 'rgba(43,45,66,1)',
  },
  inputField: {
    marginTop: 0,
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
    backgroundColor: 'rgba(239,35,60,1)',
    borderWidth: 2,
    borderColor: 'rgba(90,90,90,1)',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  continueButtonText: {
    fontFamily: 'BakbakOne-Regular',
    textAlign: 'center',
    fontWeight: '700',
    color: 'rgba(237,242,244,1)',
    fontSize: 16,
  },
  backButton: {
    borderRadius: 10,
    marginTop: -52,
    marginBottom: 25,
    marginLeft: 270,
    borderWidth: 2,
    width: 55,
    backgroundColor: 'gray',
    borderColor: 'gray',
    padding: 5,
  },
  backButtonText: {
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
  },
});

export default styles;
