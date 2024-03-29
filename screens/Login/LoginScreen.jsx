import React from "react";
import BackgroundWrapperContainer from "../../components/wrappers/BackgroundWrapperContainer";
import Icon from "react-native-vector-icons/FontAwesome";
import { CommonActions } from "@react-navigation/native";
import { useUserAuth } from "../../context/UserAuthContext";
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Image,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const { setIsUserAuth } = useUserAuth();
  const navigateToHome = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/users/login/",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // If the server responds with a success status, proceed to the Home screen
      if (response.status === 200 || response.status === 201) {
        setIsUserAuth(true);
        navigation.dispatch(CommonActions.navigate({ name: "Home" }));
      } else {
        // Handle unsuccessful login attempts here
        Alert.alert(
          "Login Failed",
          "Please check your credentials and try again."
        );
      }
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert(
        "Login Error",
        "An error occurred during login. Please try again later."
      );
    }
  };
  return (
    <BackgroundWrapperContainer>
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.logo}
          />
          {renderInputField(
            "Email Address",
            "envelope",
            "email-address",
            false,
            setEmail
          )}
          {renderInputField("Password", "lock", "default", true, setPassword)}
          <TouchableOpacity style={styles.loginButton} onPress={navigateToHome}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.newUserContainer}>
            <Text style={styles.newUserText}>New to the app?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Registration")}
            >
              <Text style={styles.registerText}> Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </BackgroundWrapperContainer>
  );
};

const renderInputField = (
  placeholder,
  iconName,
  keyboardType,
  isPassword,
  setState
) => (
  <View style={styles.inputContainer}>
    <Icon
      name={iconName}
      size={iconName === "lock" ? 30 : 20}
      color="#000000"
      style={styles.icon}
    />
    <TextInput
      placeholder={placeholder}
      style={isPassword ? styles.passwordField : styles.emailField}
      keyboardType={
        keyboardType === "email-address" ? "email-address" : "default"
      }
      secureTextEntry={isPassword}
      onChangeText={setState}
      value={isPassword ? password : email}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    marginTop: 140,
    fontFamily: "Optima",
    fontSize: 35,
    fontWeight: "500",
    marginBottom: 30,
    color: "rgba(43,45,66,1)",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: "row",
    borderBottomWidth: 2,
    paddingBottom: 8,
    marginBottom: 30,
    marginTop: "auto",
    color: "rgba(43, 45, 66, 1)",
  },
  icon: {
    marginRight: "2.5%",
  },
  emailField: {
    fontFamily: "Optima",
    flex: 1,
    paddingVertical: 0,
    color: "rgba(43,45,66,1)",
  },
  passwordField: {
    fontFamily: "Optima",
    flex: 1,
    paddingVertical: 0,
    marginBottom: 0,
  },
  loginButton: {
    backgroundColor: "rgba(239,35,60,1)",
    padding: 10,
    borderRadius: 10,
    marginBottom: 100,
  },
  loginButtonText: {
    fontFamily: "Optima",
    textAlign: "center",
    fontWeight: "700",
    color: "rgba(237,242,244,1)",
    fontSize: 20,
  },
  newUserContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
    alignItems: "center",
  },
  newUserText: {
    color: "rgba(43, 45, 66, 1)",
    fontWeight: "700",
    fontSize: 20,
    fontFamily: "Optima",
  },
  registerText: {
    color: "rgba(239, 35, 60, 1)",
    fontWeight: "700",
    fontSize: 18,
    fontFamily: "Optima",
  },
  logo: {
    marginTop: 30,
    width: "100%", // Adjust the width as needed
    height: 250, // Adjust the height as needed
    marginBottom: 50,
  },
});

export default LoginScreen;
