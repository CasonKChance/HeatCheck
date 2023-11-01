import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const PlayerProfileScreen = ({userInfo}) => {
  const { name, skillRating, position, height, weight, playType, age, profileImage } = userInfo;
  
  return (
    <View style={styles.container}>
      <Image source={profileImage} style={styles.profileImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>Name: {name}</Text>
        <Text style={styles.detailText}>Skill Rating: {skillRating} </Text>
        <Text style={styles.detailText}>Position: {position}</Text>
        <Text style={styles.detailText}>Height: {height}</Text>
        <Text style={styles.detailText}>Weight:  {weight}</Text>
        <Text style={styles.detailText}>Play Type: {playType}</Text>
        <Text style={styles.detailText}>Age: {age}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    elevation: 3,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowColor: '#000',
    shadowOffset: { height: 0, width: 0 },
  },
  nameText: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 18,
    marginBottom: 5,
    padding: 10,
  },
});

export default PlayerProfileScreen;