import React, {useState, useEffect} from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';

const IndividualCourtScreen = ({courtInfo}) => {
  const [availability, setAvailability] = useState('AVAILABLE'); // AVAILABLE, LOOKING_FOR_PLAYERS, FULL
  const [numPlayers, setNumPlayers] = useState(0);

  // Update availability based on numPlayers
  useEffect(() => {
    if (numPlayers === 10) {
      setAvailability('FULL');
    } else if (numPlayers === 1) {
      setAvailability('LOOKING_FOR_PLAYERS');
    } else {
      setAvailability('AVAILABLE');
    }
  }, [numPlayers]);

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{courtInfo.name}</Text>
        <Text style={styles.address}>{courtInfo.address}</Text>
      </View>

      <Image source={courtInfo.mapImage} style={styles.mapImage} />

      <View style={styles.availabilityContainer}>
        <Text style={styles.availabilityText}>
          {availability === 'AVAILABLE'
            ? 'Available'
            : availability === 'LOOKING_FOR_PLAYERS'
            ? 'Looking for Players'
            : 'Full'}
        </Text>
        {availability === 'LOOKING_FOR_PLAYERS' && (
          <Text>{`${numPlayers}/10 Spots Full`}</Text>
        )}
        {availability === 'LOOKING_FOR_PLAYERS' && (
          <Text>{`Players needed: ${10 - numPlayers}`}</Text>
        )}
        <Button
          title="Sign Up"
          onPress={() => {
            if (numPlayers < 10) {
              setNumPlayers(numPlayers + 1);
            }
          }}
          disabled={availability === 'FULL'}
        />
      </View>
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
  availabilityText: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: availability =>
      availability === 'AVAILABLE'
        ? 'green'
        : availability === 'LOOKING_FOR_PLAYERS'
        ? 'orange'
        : 'red',
  },
});

export default IndividualCourtScreen;
