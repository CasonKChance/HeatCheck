import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const LeaderboardRow = ({player}) => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Text style={styles.rank}>{player.rank}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.name}>{player.name}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.gamesPlayed}>{player.gamesPlayed}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  column: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 20,
  },
  rank: {
    fontSize: 20,
    fontWeight: 'bold', // Highlight rank with bold text
  },
  name: {
    fontSize: 16, // Use a slightly smaller font size for names
  },
  gamesPlayed: {
    fontSize: 18, // Use a slightly larger font size for games played
  },
});

export default LeaderboardRow;
