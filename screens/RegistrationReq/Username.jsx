import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
//import MaterialHelperTextBox3 from "./components/MaterialHelperTextBox3";

function Username(props) {
  return (
    <View style={styles.container}>
      <Username
        style={styles.Username}
      ></Username>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 90
  },
  usernameBox: {
    height: 90,
    width: 375
  }
});

export default Username;
