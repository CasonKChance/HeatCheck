import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity} from "react-native";

function HomePage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.tEXTLAYER}>
        <Text style={styles.heatCheck}>HEAT CHECK</Text>
        <View style={styles.turnUpTheHeatOStack}>
          <Text style={styles.turnUpTheHeatO}>TURN UP THE HEAT</Text>
          <Text style={styles.turnUpTheHeatB}>TURN UP THE HEAT</Text>
        </View>
      </View>
      <View style={styles.bUTTONS}>
        <TouchableOpacity disabled="True" style={styles.rEGISTER}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity disabled="True" style={styles.lOGIN}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  //parent controls
  tEXTLAYER: {
    width: 390,
    height: 100,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //Heatcheck heading
  heatCheck: {
    fontSize: 57,
    fontFamily: '',
    color: "rgba(194,1,20,1)",
    textAlign: "center",
    lineHeight: 75
  },
  //black subtext
  turnUpTheHeatO: {
    top: 0,
    left: 1,
    position: "absolute",
    fontFamily: "",
    color: "rgba(0,0,0,1)",
    fontSize: 28
  },
  //orange subtext
  turnUpTheHeatB: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "anybody-700italic",
    color: "rgba(255,167,55,1)",
    fontSize: 28
  },
  //both layers of subtext
  turnUpTheHeatOStack: {
    width: 262,
    height: 29
  },
  bUTTONS: {
    width: 293,
    height: 64,
    marginTop: 175,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rEGISTER: {
    height: 64,
    width: 293,
    backgroundColor: "rgba(194,1,20,1)",
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
  lOGIN: {
    height: 64,
    width: 293,
    borderRadius: 50,
    backgroundColor: "rgba(39,45,45,1)",
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: "rgba(255,255,255,1)"
  }
});

export default HomePage;