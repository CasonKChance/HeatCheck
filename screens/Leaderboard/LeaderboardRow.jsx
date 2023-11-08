import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const LeaderboardRow = ({player}) => {
  return (
    <View style={styles.container}>
    <View style={styles.column}>
      <Text style={styles.numbers}>{player.rank}</Text>
    </View>
    <View style={styles.column}>
      <Text>{player.name}</Text>
    </View>
    <View style={styles.column}>
      <Text>{player.gamesPlayed}</Text>
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
    numbers: {
      fontSize: 20,
    },
  });

export default LeaderboardRow;
