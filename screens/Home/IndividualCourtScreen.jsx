import React, {useState, useEffect} from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import BackButton from '../../components/buttons/BackButton';

const AVAILABILITY = {
  AVAILABLE: 'AVAILABLE',
  LOOKING_FOR_PLAYERS: 'LOOKING_FOR_PLAYERS',
  FULL: 'FULL',
};

const IndividualCourtScreen = ({navigation}) => {
  const route = useRoute();
  const {name, address, mapImage} = route.params;
  const [numPlayers, setNumPlayers] = useState(0);
  const [availability, setAvailability] = useState(AVAILABILITY.AVAILABLE);

  useEffect(() => {
    const calculateAvailability = () => {
      if (numPlayers === 10) {
        return AVAILABILITY.FULL;
      } else if (numPlayers === 1) {
        return AVAILABILITY.LOOKING_FOR_PLAYERS;
      } else {
        return AVAILABILITY.AVAILABLE;
      }
    };

    setAvailability(calculateAvailability());
  }, [numPlayers]);

  const getAvailabilityText = () => {
    switch (availability) {
      case AVAILABILITY.AVAILABLE:
        return 'Available';
      case AVAILABILITY.LOOKING_FOR_PLAYERS:
        return 'Looking for Players';
      case AVAILABILITY.FULL:
        return 'Full';
      default:
        return '';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>

      <Image source={mapImage} style={styles.mapImage} />

      <View style={styles.availabilityContainer}>
        <Text style={styles.availabilityText}>{getAvailabilityText()}</Text>
        {availability === AVAILABILITY.LOOKING_FOR_PLAYERS && (
          <>
            <Text>{`${numPlayers}/10 Spots Full`}</Text>
            <Text>{`Players needed: ${10 - numPlayers}`}</Text>
          </>
        )}
        <Button
          title="Sign Up"
          onPress={() => {
            if (numPlayers < 10) {
              setNumPlayers(numPlayers + 1);
            }
          }}
          disabled={availability === AVAILABILITY.FULL}
        />
      </View>
      <BackButton navigation={navigation} />
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
      availability === AVAILABILITY.AVAILABLE
        ? 'green'
        : availability === AVAILABILITY.LOOKING_FOR_PLAYERS
        ? 'orange'
        : 'red',
  },
});

export default IndividualCourtScreen;
