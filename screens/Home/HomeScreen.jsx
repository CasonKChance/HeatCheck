import React from 'react';
import {useState} from 'react';
import styles from '../../assets/stylesheets/HomeScreenStyles.jsx';
import BackgroundWrapperContainer from '../../components/wrappers/BackgroundWrapperContainer';
import CourtCard from '../../components/buttons/CourtCard.jsx';
import {
  TouchableOpacity,
  View,
  ScrollView,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

const HomeScreen = () => {
  const [courts, setCourts] = useState([
    {
      title: 'McCamish Pavilion',
      image: require('../../assets/images/MccamishCourt.png'),
      address: '965 Fowler St NW, Atlanta, GA 30318',
      availability: 'Available',
    },
    {
      title: 'State Farm Arena',
      image: require('../../assets/images/StateFarmArena.png'),
      address: '1 State Farm Dr, Atlanta, GA 30303',
      availability: 'Available',
    },
    {
      title: 'Georgia Tech CRC',
      image: require('../../assets/images/CRC.png'),
      address: '750 Ferst Dr, Atlanta, GA 30332',
      availability: 'Looking For Players',
    },
    {
      title: 'Peters Parking Deck',
      image: require('../../assets/images/Peters.png'),
      address: '741 Fowler St NW, Atlanta, GA 30332',
      availability: 'Full',
    },
  ]);

  const [markers, setMarkers] = useState([
    {
      title: 'McCamish Pavilion',
      latlng: {
        latitude: 33.7806025,
        longitude: -84.3927616,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      },
    },
    {
      title: 'State Farm Arena',
      latlng: {
        latitude: 33.7573698,
        longitude: -84.3963848,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      },
    },
    {
      title: 'Georgia Tech CRC',
      latlng: {
        latitude: 33.7756119,
        longitude: -84.4039289,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      },
    },
    {
      title: 'Peters Parking Deck',
      latlng: {
        latitude: 33.7747431,
        longitude: -84.3937263,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      },
    },
  ]);

  return (
    <BackgroundWrapperContainer>
      <View style={styles.page}>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            //specify our coordinates.
            initialRegion={{
              latitude: 33.775878,
              longitude: -84.393301,
              latitudeDelta: 0.03,
              longitudeDelta: 0.03,
            }}>
            {markers.map((marker, index) => (
              <Marker
                key={index}
                coordinate={marker.latlng}
                title={marker.title}
              />
            ))}
          </MapView>
        </View>
      </View>
      <View style={styles.findGameTitleView}>
        <Text style={styles.findGameTitleText}>Find A Game</Text>
      </View>
      <ScrollView style={styles.findGameMainView}>
        {courts.map((court, index) => (
          <CourtCard
            key={index}
            title={court.title}
            image={court.image}
            address={court.address}
            availability={court.availability}
          />
        ))}
      </ScrollView>
    </BackgroundWrapperContainer>
  );
};

export default HomeScreen;
