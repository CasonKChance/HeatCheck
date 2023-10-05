import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
//import Submit from Buttons/Submit;

function Submit(props) {
  return (
    <View style={styles.container}>
      <Submit
        style={styles.submitButton}
      ></Submit>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 177,
    height: 39
  },
  submitButton: {
    height: 39,
    width: 177
  }
});

export default Submit;
