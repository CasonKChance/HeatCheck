import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
//import MaterialHelperTextBox2 from "./components/MaterialHelperTextBox2";

function Email(props) {
  return (
    <View style={styles.container}>
      <Email style={styles.emailBox}></Email>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 90
  },
  emailBox: {
    height: 90,
    width: 375
  }
});

export default Email;
