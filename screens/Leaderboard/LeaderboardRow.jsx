import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Make sure to install this package

const LeaderboardRow = ({ player }) => {
  // Function to determine background color based on rank
  const getBackgroundColor = rank => {
    if (rank === 1) return '#ffd700'; // Gold color for 1st
    if (rank === 2) return '#c0c0c0'; // Silver color for 2nd
    if (rank === 3) return '#cd7f32'; // Bronze color for 3rd
    return '#fff'; // White for others
  };

  return (
    <TouchableOpacity activeOpacity={0.6} style={[styles.container, { backgroundColor: getBackgroundColor(player.rank) }]}>
      <View style={[styles.column, { flex: 1 }]}>
        <Text style={styles.rank}>{player.rank}</Text>
      </View>
      <View style={[styles.column, { flex: 3 }]}>
        <Text style={styles.name}>{player.name}</Text>
      </View>
      <View style={[styles.column, { flex: 2 }]}>
        <Text style={styles.gamesPlayed}>{player.gamesPlayed}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 2,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  column: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rank: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#34495e',
  },
  name: {
    fontSize: 20,
    color: '#34495e',
  },
  gamesPlayed: {
    fontSize: 18,
    color: '#34495e',
  },
});

export default LeaderboardRow;
