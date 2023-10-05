import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Index(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.requiredFieldsText}>Required Fields:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 71,
    height: 20
  },
  requiredFieldsText: {
    fontFamily: "roboto-regular",
    color: "rgba(194,1,20,1)",
    height: 20,
    width: 71,
    fontSize: 10
  }
});

export default Index;
