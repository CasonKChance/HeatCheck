import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import LeaderboardRow from './LeaderboardRow';

//Go to LeaderboardDummy.jsx to find dummy data for leaderInfo
 
const LeaderboardScreen = ({leaderInfo}) => {
  const findRank = (rank) => {
    return leaderInfo.find(player => player.rank === rank);
  };

  return (
    <ScrollView>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/images/backarrow.png')} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.column}>
          <Text style={styles.header}>Rank</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.header}>Name</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.header}>Games Played</Text>
        </View>
      </View>
      <LeaderboardRow player={findRank('1')}></LeaderboardRow>
      <LeaderboardRow player={findRank('2')}></LeaderboardRow>
      <LeaderboardRow player={findRank('3')}></LeaderboardRow>
      <LeaderboardRow player={findRank('4')}></LeaderboardRow>
      <LeaderboardRow player={findRank('5')}></LeaderboardRow>
      <LeaderboardRow player={findRank('6')}></LeaderboardRow>
      <LeaderboardRow player={findRank('7')}></LeaderboardRow>
      <LeaderboardRow player={findRank('8')}></LeaderboardRow>
      <LeaderboardRow player={findRank('9')}></LeaderboardRow>
      <LeaderboardRow player={findRank('10')}></LeaderboardRow>
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
