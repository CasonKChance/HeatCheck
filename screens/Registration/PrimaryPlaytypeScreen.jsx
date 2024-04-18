import React from "react";
import BackgroundWrapperContainer from "../../components/wrappers/BackgroundWrapperContainer";
import { useUserData } from "../../context/UserDataContext";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SharpShooter from "../../components/archetypeCards/SharpShooter";
import ShotCreating from "../../components/archetypeCards/ShotCreating";
import Playmaking from "../../components/archetypeCards/PlayMaking";
import Slashing from "../../components/archetypeCards/Slashing";
import PostScoring from "../../components/archetypeCards/PostScoring";
import Defending from "../../components/archetypeCards/Defending";
import GlassCleaning from "../../components/archetypeCards/GlassCleaning";

const PrimaryPlaytypeScreen = ({ navigation }) => {
  const { userData, updateUserData } = useUserData();

  const handleSelectPlaytype = (value) => {
    updateUserData("playType", value);
    navigation.navigate("Optional");
  };

  return (
    <BackgroundWrapperContainer>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Select your Primary Playtype</Text>
          </View>
          <View style={styles.playtypeContainer}>
            <View style={styles.cardContainer}>
              <ShotCreating
                onSelectPlaytype={() => handleSelectPlaytype("Shot Creating")}
              />
            </View>
            <View style={styles.cardContainer}>
              <SharpShooter
                onSelectPlaytype={() => handleSelectPlaytype("Sharp Shooter")}
              />
            </View>
            <View style={styles.cardContainer}>
              <Playmaking
                onSelectPlaytype={() => handleSelectPlaytype("Playmaking")}
              />
            </View>
            <View style={styles.cardContainer}>
              <Slashing
                onSelectPlaytype={() => handleSelectPlaytype("Slashing")}
              />
            </View>
            <View style={styles.cardContainer}>
              <PostScoring
                onSelectPlaytype={() => handleSelectPlaytype("Post Scoring")}
              />
            </View>
            <View style={styles.cardContainer}>
              <Defending
                onSelectPlaytype={() => handleSelectPlaytype("Defending")}
              />
            </View>
            <View style={styles.cardContainer}>
              <GlassCleaning
                onSelectPlaytype={() => handleSelectPlaytype("Glass Cleaning")}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </BackgroundWrapperContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    marginTop: 40,
    marginBottom: 20,
    alignItems: "center",
  },
  titleText: {
    color: "#FF1B1C",
    fontWeight: "bold",
    fontSize: 26,
    fontFamily: "Optima",
  },
  playtypeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  scrollViewContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  cardContainer: {
    marginBottom: 10,
    padding: 15,
  },
});
export default PrimaryPlaytypeScreen;
