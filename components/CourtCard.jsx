import React from 'react';
import styles from '../assets/stylesheets/CourtCardStyles.jsx';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const CourtCard = ({image, availability, title, address, navigation}) => {
  const onPress = () => {
    navigation.navigate('Individual Court', {
      address,
      mapImage: image,
      name: title,
    });
  };

  let availabilityTag;

  if (availability === 'Available') {
    availabilityTag = (
      <Text style={styles.courtAvailabilityGreen}>{availability}</Text>
    );
  } else if (availability === 'Looking For Players') {
    availabilityTag = (
      <Text style={styles.courtAvailabilityYellow}>{availability}</Text>
    );
  } else if (availability === 'Full') {
    availabilityTag = (
      <Text style={styles.courtAvailabilityRed}>{availability}</Text>
    );
  }

  return (
    <TouchableOpacity style={styles.courtCardBody} onPress={onPress}>
      <Image style={styles.courtImage} source={image} />
      <View>
        <Text style={styles.courtTitle}>{title}</Text>
        <Text style={styles.courtAddress}>{address}</Text>
        {availabilityTag}
      </View>
    </TouchableOpacity>
  );
};

export default CourtCard;
