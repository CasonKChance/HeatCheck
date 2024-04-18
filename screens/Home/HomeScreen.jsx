import React, { useState, useEffect } from "react";
import { View, ScrollView, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import styles from "../../assets/stylesheets/HomeScreenStyles.jsx";
import BackgroundWrapperContainer from "../../components/wrappers/BackgroundWrapperContainer";
import CourtCard from "../../components/CourtCard.jsx";
import axios from "axios";

const Courts = [
  {
    title: "McCamish Pavilion",
    image: require("../../assets/images/MccamishCourt.png"),
    address: "965 Fowler St NW, Atlanta, GA 30318",
    availability: "Available",
    currPlayersCount: 0,
  },
  {
    title: "State Farm Arena",
    image: require("../../assets/images/StateFarmArena.png"),
    address: "1 State Farm Dr, Atlanta, GA 30303",
    availability: "Available",
    currPlayersCount: 0,
  },
  {
    title: "Georgia Tech CRC",
    image: require("../../assets/images/CRC.png"),
    address: "750 Ferst Dr, Atlanta, GA 30332",
    availability: "Looking For Players",
    currPlayersCount: 9,
  },
  {
    title: "Peters Parking Deck",
    image: require("../../assets/images/Peters.png"),
    address: "741 Fowler St NW, Atlanta, GA 30332",
    availability: "Full",
    currPlayersCount: 10,
  },
];
const Markers = [
  {
    title: "McCamish Pavilion",
    latlng: {
      latitude: 33.7806025,
      longitude: -84.3927616,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    },
  },
  {
    title: "State Farm Arena",
    latlng: {
      latitude: 33.7573698,
      longitude: -84.3963848,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    },
  },
  {
    title: "Georgia Tech CRC",
    latlng: {
      latitude: 33.7756119,
      longitude: -84.4039289,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    },
  },
  {
    title: "Peters Parking Deck",
    latlng: {
      latitude: 33.7747431,
      longitude: -84.3937263,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    },
  },
];

const HomeScreen = ({ navigation }) => {
  const [courts, setCourts] = useState(Courts);
  const [markers, setMarkers] = useState(Markers);

  // useEffect(() => {
  //   const fetchCourts = async () => {
  //     try {
  //       // Update the URL to match your Django server endpoint for fetching court data
  //       const response = await axios.get(
  //         "http://localhost:8000/games/court-list/"
  //       );

  //       const fetchedCourts = response.data.map((court) => ({
  //         title: court.title,
  //         // Assume you have an images base URL and court_image is just the path
  //         image: {
  //           uri: `http://localhost:8000/assets/images/courts/${court.court_image}`,
  //         },
  //         address: court.address,
  //         availability: court.availability,
  //       }));

  //       const fetchedMarkers = response.data.map((court) => ({
  //         title: court.title,
  //         latlng: {
  //           latitude: court.latitude,
  //           longitude: court.longitude,
  //           latitudeDelta: 0.1,
  //           longitudeDelta: 0.1,
  //         },
  //       }));

  //       setCourts(fetchedCourts);
  //       setMarkers(fetchedMarkers);
  //     } catch (error) {
  //       console.log(error);
  //       Alert.alert("Error", "Could not fetch courts");
  //     }
  //   };

  //   fetchCourts();
  // }, []);

  return (
    <View style={{ flex: 1 }}>
      <BackgroundWrapperContainer>
        <View style={styles.page}>
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 33.775878,
                longitude: -84.393301,
                latitudeDelta: 0.03,
                longitudeDelta: 0.03,
              }}
            >
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
        <ScrollView
          style={styles.findGameMainView}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          {courts.map((court, index) => (
            <CourtCard
              key={index}
              title={court.title}
              image={court.image}
              address={court.address}
              availability={court.availability}
              navigation={navigation}
              currPlayersCount={court.currPlayersCount}
            />
          ))}
        </ScrollView>
      </BackgroundWrapperContainer>
    </View>
  );
};

export default HomeScreen;
