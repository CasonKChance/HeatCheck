import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useUserData } from '../../context/UserDataContext';
import LeaderboardRow from './LeaderboardRow';
import dummy from './LeaderboardDummy';

const LeaderboardScreen = ({ navigation }) => {
  const { userData } = useUserData();

  // Sort the dummy data based on the rank in ascending order
  const sortedDummy = [...dummy].sort((a, b) => a.rank - b.rank);

  const renderHeaderColumn = (text, flexSize) => (
    <View style={[styles.column, { flex: flexSize }]}>
      <Text style={styles.header}>{text}</Text>
    </View>
  );

  const renderLeaderboardRows = () => {
    return sortedDummy.map(player => (
      <LeaderboardRow key={player.rank.toString()} player={player} />
    ));
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.headerContainer}>
        {renderHeaderColumn('Rank', 1)}
        {renderHeaderColumn('Name', 3)}
        {renderHeaderColumn('Games Played', 2)}
      </View>
      {renderLeaderboardRows()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#ecf0f1',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
    backgroundColor: '#2ecc71',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4,
  },
  column: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  header: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 16,
  },
});

export default LeaderboardScreen;


