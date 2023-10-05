import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Index(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.playerRegistrationText}>Player Registration</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 341,
    height: 40
  },
  playerRegistrationText: {
    fontFamily: "graduate-regular",
    color: "#121212",
    height: 40,
    width: 341,
    fontSize: 30
  }
});

export default Index;
