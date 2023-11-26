import React from 'react';
import BackgroundWrapperContainer from '../../components/wrappers/BackgroundWrapperContainer';
import FlippableCard from '../../components/wrappers/FlippableCard';
import {useUserData} from '../../context/UserDataContext';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import playTypes from './playTypes';
import {SafeAreaView} from 'react-native-safe-area-context';

const PrimaryPlaytypeScreen = ({navigation, route}) => {
  const {userData, setUserData} = useUserData();
  const updateUserData = newUserData => {
    setUserData({...userData, ...newUserData});
  };
  const {height} = Dimensions.get('screen');
  return (
    <BackgroundWrapperContainer>
      <SafeAreaView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Select your Primary Playtype</Text>
        </View>
        <ScrollView
          contentContainerStyle={styles.playtypeContainer}
          style={{marginBottom: height / 5}}>
          {playTypes.map((playType, index) => (
            <View key={index}>
              <FlippableCard
                frontContent={playType.name}
                backContent={playType.description}
                navigation={navigation}
                handleUserData={() => updateUserData({playType: playType.name})}
                userData={userData}
              />
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </BackgroundWrapperContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
  },
  titleText: {
    color: '#FF1B1C',
    fontWeight: 'bold',
    fontSize: 26,
    fontFamily: 'BakBakOne-Regular',
  },
  playtypeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 1,
    justifyContent: 'center',
  },
  playtypeCard: {
    margin: 0,
  },
  scrollViewContent: {flex: 1},
});
export default PrimaryPlaytypeScreen;
