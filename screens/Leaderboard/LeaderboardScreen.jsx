import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useUserData} from '../../context/UserDataContext';

import LeaderboardRow from './LeaderboardRow';
import dummy from './LeaderboardDummy';

const LeaderboardScreen = ({navigation}) => {
  const {userData, setUserData} = useUserData();
  const findRank = rank => {
    return dummy.find(player => player.rank === rank);
  };

  const renderHeaderColumn = text => (
    <View style={styles.column}>
      <Text style={styles.header}>{text}</Text>
    </View>
  );

  const renderLeaderboardRows = () => {
    const rankNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    return rankNumbers.map(rank => (
      <LeaderboardRow key={rank} player={findRank(rank)} />
    ));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {renderHeaderColumn('Rank')}
        {renderHeaderColumn('Name')}
        {renderHeaderColumn('Games Played')}
      </View>
      {renderLeaderboardRows()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  backButtonContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  column: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 20,
  },
  header: {
    fontSize: 20,
  },
});

export default LeaderboardScreen;
