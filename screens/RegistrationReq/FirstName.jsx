import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
//import MaterialHelperTextBox from "./components/MaterialHelperTextBox";

function FirstName(props) {
  return (
    <View style={styles.container}>
      <FirstName
        style={styles.FirstName}
      ></FirstName>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 220,
    height: 67
  },
  firstNameBox: {
    height: 67,
    width: 220
  }
});

export default FirstName;
