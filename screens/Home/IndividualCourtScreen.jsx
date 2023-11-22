import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const IndividualCourtScreen = ({courtInfo}) => { 
  const [availability, setAvailability] = useState('AVAILABLE'); // AVAILABLE, LOOKING_FOR_PLAYERS, FULL
  const [numPlayers, setNumPlayers] = useState(0);

  // Update availability based on numPlayers
  useEffect(() => {
    if (numPlayers === 10) {
        setAvailability('FULL');
    } else if (numPlayers == 1) {
        setAvailability('LOOKING_FOR_PLAYERS');
    }
  }, [numPlayers])

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{courtInfo.name}</Text>
        <Text style={styles.address}>{courtInfo.address}</Text>
      </View>
      
      <Image source={courtInfo.mapImage} style={styles.mapImage} />
      
      {availability === 'AVAILABLE' && (
        <View style={styles.availabilityContainer}>
          <Text style={styles.available}>Available</Text>
          <Button title="Sign Up" onPress={() => setNumPlayers(numPlayers + 1)} />
        </View>
      )}

      {availability === 'LOOKING_FOR_PLAYERS' && (
        <View style={styles.availabilityContainer}>
          <Text style={styles.lookingForPlayers}>Looking for Players</Text>
          <Text>{numPlayers}/10 Spots Full</Text>
          <Text>{`Players needed: ${10 - numPlayers}`}</Text>
          <Button title="Sign Up" onPress={() => setNumPlayers(numPlayers + 1)} />
        </View>
      )}

      {availability === 'FULL' && (
        <View style={styles.availabilityContainer}>
          <Text style={styles.full}>Full</Text>
          <Button title="Sign Up" disabled />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f0f0f0',
    },
    infoContainer: {
      marginBottom: 20,
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#333',
    },
    address: {
      fontSize: 16,
      color: '#666',
    },
    mapImage: {
      height: 200,
      width: '100%',
      resizeMode: 'stretch',
      marginBottom: 20,
    },
    availabilityContainer: {
      alignItems: 'center',
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    },
    available: {
      color: 'green',
      marginBottom: 10,
    },
    lookingForPlayers: {
      color: 'orange',
      marginBottom: 10,
    },
    full: {
      color: 'red',
      marginBottom: 10,
    },
});

export default IndividualCourtScreen;