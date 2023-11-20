import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

/**Example of userInfo to pass in:
const dummy = {
    name: 'Charlie',
    skillRating: 99,
    position: 'Wing',
    height: '6ft 3in',
    weight: '185 lbs',
    playType: 'Playmaking Sharpshooter',
    age: 20,
    profileImage: { uri: 'stripes' }
};
 */
const ProfileImage = ({source}) => (
  <Image source={source} style={styles.profileImage} />
);

const PlayerProfileScreen = ({
  userInfo: {
    name,
    skillRating,
    position,
    height,
    weight,
    playType,
    age,
    profileImage,
  },
}) => {
  const detailItems = [
    {label: 'Skill Rating', value: skillRating},
    {label: 'Position', value: position},
    {label: 'Height', value: height},
    {label: 'Weight', value: weight},
    {label: 'Play Type', value: playType},
    {label: 'Age', value: age},
  ];

  return (
    <View style={styles.container}>
      <ProfileImage source={profileImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>Name: {name}</Text>
        {detailItems.map((item, index) => (
          <Text key={index} style={styles.detailText}>
            {item.label}: {item.value}
          </Text>
        ))}
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
  backButtonContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
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
    shadowOffset: {height: 0, width: 0},
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
