import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FirstName from "./FirstName";
import LastName from "./LastName";
import Username from './Username';
import Password from './Password';
import Submit from './Submit';
import Email from './Email';


function ReqRegistration(props) {
  return (
    <View style={styles.container}>
      <View style={styles.playerRegistrationStackColumn}>
        <View style={styles.playerRegistrationStack}>
          <Text style={styles.playerRegistration}>Player Registration</Text>
          <View style={styles.rect}></View>
        </View>
        <View style={styles.requiredFieldsStack}>
          <Text style={styles.requiredFields}>Required Fields:</Text>
          <FirstName
          //firstname
            style={styles.FirstName}
          ></FirstName>
        </View>
        <LastName
        //lastname
          style={styles.LastName}
        ></LastName>
        <Username
        //username
          style={styles.Username}
        ></Username>
        <Password
        //password
          style={styles.Password}
        ></Password>
        <Submit
          style={styles.Submit}
        ></Submit>
        <View style={styles.rect1}></View>
      </View>
      <View style={styles.playerRegistrationStackColumnFiller}>
        <Email
        //email
          style={styles.Email}
        ></Email>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  PlayerRegistrationText: {
    top: 0,
    left: 17,
    position: "absolute",
    fontFamily: "graduate-regular",
    color: "#121212",
    height: 40,
    width: 341,
    fontSize: 30
  },
  rect: {
    top: 39,
    left: 0,
    width: 375,
    height: 1,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  playerRegistrationStack: {
    width: 375,
    height: 40
  },
  RequiredFieldsText: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(194,1,20,1)",
    height: 20,
    width: 71,
    fontSize: 10
  },
  FirstName: {
    height: 67,
    width: 220,
    position: "absolute",
    left: 0,
    top: 0
  },
  requiredFieldsStack: {
    width: 220,
    height: 67,
    marginTop: 10,
    marginLeft: 17
  },
  LastName: {
    height: 90,
    width: 375,
    marginTop: 45,
    marginLeft: 17
  },
  Username: {
    height: 90,
    width: 375,
    marginTop: 174,
    marginLeft: 15
  },
  Password: {
    height: 90,
    width: 375,
    marginTop: 39,
    marginLeft: 15
  },
  Submit: {
    height: 39,
    width: 177,
    marginTop: 30,
    marginLeft: 99
  },
  rect1: {
    width: 375,
    height: 1,
    backgroundColor: "#E6E6E6",
    marginTop: -60
  },
  playerRegistrationStackColumn: {
    width: 392,
    marginTop: 63
  },
  Email: {
    height: 90,
    width: 375,
    marginLeft: 15
  },
  playerRegistrationStackColumnFiller: {
    flex: 1,
    justifyContent: "center"
  }
});

export default ReqRegistration;
