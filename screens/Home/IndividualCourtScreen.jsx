import React, { useState, useEffect } from "react";
import { View, Text, Button, Image, StyleSheet, Alert } from "react-native";
import { useRoute } from "@react-navigation/native";
import BackButton from "../../components/buttons/BackButton";
import axios from "axios";

const AVAILABILITY = {
  AVAILABLE: "AVAILABLE",
  LOOKING_FOR_PLAYERS: "LOOKING_FOR_PLAYERS",
  FULL: "FULL",
};

const IndividualCourtScreen = ({ navigation }) => {
  const route = useRoute();
  const { name, address, mapImage, currPlayersCount } = route.params;
  const [numPlayers, setNumPlayers] = useState(currPlayersCount);
  const [availability, setAvailability] = useState(AVAILABILITY.AVAILABLE);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    setNumPlayers(currPlayersCount);
  }, [currPlayersCount]);

  useEffect(() => {
    const calculateAvailability = () => {
      print(numPlayers);
      if (numPlayers === 10) {
        return AVAILABILITY.FULL;
      } else if (numPlayers >= 1) {
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
        return "Available";
      case AVAILABILITY.LOOKING_FOR_PLAYERS:
        return "Looking for Players";
      case AVAILABILITY.FULL:
        return "Full";
      default:
        return "";
    }
  };

  const joinOrCreateGame = () => {
    setNumPlayers(numPlayers + 1);
    setJoined(true);
  };

  const leaveGame = () => {
    setNumPlayers(numPlayers - 1);
    setJoined(false);
  };

  // const joinOrCreateGame = async () => {
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:8000/games/join-or-create-game/",
  //       {
  //         court_id: courtId,
  //       }
  //     );

  //     if (response.status === 201) {
  //       setPlayersCount(response.data.players_count);
  //       Alert.alert("Success", response.data.message);
  //     }
  //   } catch (error) {
  //     console.error("Error joining or creating game:", error);
  //     Alert.alert(
  //       "Error",
  //       error.response?.data?.detail ||
  //         "An error occurred while trying to join or create the game."
  //     );
  //   }
  // };

  if (!data) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>

      <Image source={mapImage} style={styles.mapImage} />

      <View style={styles.availabilityContainer}>
        <Text style={styles.availabilityText}>{getAvailabilityText()}</Text>
        {numPlayers > 0 && numPlayers < 10 && (
          <>
            <Text>Current number of players: {numPlayers}</Text>
            <Text>{`Players needed: ${10 - numPlayers}`}</Text>
          </>
        )}
        {!joined ? (
          <Button
            title="Join Game"
            onPress={() => joinOrCreateGame()} // Pass the court ID
            disabled={numPlayers >= 10} // Disable if the game is full
          />
        ) : (
          <Button
            title="Leave Game"
            onPress={() => leaveGame()} // Pass the court ID
          />
        )}
      </View>
      <BackButton navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  infoContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  address: {
    fontSize: 16,
    color: "#666",
  },
  mapImage: {
    height: 200,
    width: "100%",
    resizeMode: "stretch",
    marginBottom: 20,
  },
  availabilityContainer: {
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  availabilityText: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: (availability) =>
      availability === AVAILABILITY.AVAILABLE
        ? "green"
        : availability === AVAILABILITY.LOOKING_FOR_PLAYERS
        ? "orange"
        : "red",
  },
});

export default IndividualCourtScreen;
