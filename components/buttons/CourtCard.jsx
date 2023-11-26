import React from 'react';
import styles from '../../assets/stylesheets/CourtCardStyles.jsx';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';

const CourtCard = props => {
  const onPress = () => {
    console.log(`This court is ${props.availability}`);
  };

  if (props.availability === 'Available') {
    availabilityTag = (
      <Text style={styles.courtAvailabilityGreen}>{props.availability}</Text>
    );
  } else if (props.availability === 'Looking For Players') {
    availabilityTag = (
      <Text style={styles.courtAvailabilityYellow}>{props.availability}</Text>
    );
  } else if (props.availability === 'Full') {
    availabilityTag = (
      <Text style={styles.courtAvailabilityRed}>{props.availability}</Text>
    );
  }

  return (
    <TouchableOpacity style={styles.courtCardBody} onPress={onPress}>
      <Image style={styles.courtImage} source={props.image} />
      <View>
        <Text style={styles.courtTitle}>{props.title}</Text>
        <Text style={styles.courtAddress}>{props.address}</Text>
        {availabilityTag}
      </View>
    </TouchableOpacity>
  );
};

export default CourtCard;
