import React, { Component } from "react";
import { StyleSheet, View } from "react-native";


function LastName(props) {
  return (
    <View style={styles.container}>
      <LastName
        style={styles.LastName}
      ></LastName>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 90
  },
  lastNameBox: {
    height: 90,
    width: 375
  }
});

export default LastName;
