import React, {useState} from 'react';
import MapView, {
  Marker,
  PROVIDER_DEFAULT,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import {Platform, View} from 'react-native';
import styles from '../assets/stylesheets/MapStyles';

const Markers = [
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
];

const Map = () => {
  const [markers, setMarkers] = useState(Markers);
  const defaultProvider =
    Platform.OS === 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE;

  return (
    <View style={styles.mapContainer}>
      {
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
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
      }
    </View>
  );
};

export default Map;
