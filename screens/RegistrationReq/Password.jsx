import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
//import MaterialHelperTextBox4 from "./components/MaterialHelperTextBox4";

function Password(props) {
  return (
    <View style={styles.container}>
      <Password
        style={styles.passwordBox}
      ></Password>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 90
  },
  passwordBox: {
    height: 90,
    width: 375
  }
});

export default Password;
