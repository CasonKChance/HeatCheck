import React, {useState, useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, Animated} from 'react-native';
import FlippableCardButton from '../buttons/FlippableCardButton';

const FlippableCard = ({
  frontContent,
  backContent,
  navigation,
  handleUserData,
  userData,
}) => {
  const flipAnim = useRef(new Animated.Value(0)).current;
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    if (isFlipped) {
      Animated.spring(flipAnim, {
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(flipAnim, {
        toValue: 1,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    }
    setIsFlipped(!isFlipped);
  };

  const frontAnimatedStyle = {
    transform: [
      {
        rotateY: flipAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '180deg'],
        }),
      },
    ],
    backfaceVisibility: 'hidden',
  };

  const backAnimatedStyle = {
    transform: [
      {
        rotateY: flipAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ['-180deg', '0deg'],
        }),
      },
    ],
    backfaceVisibility: 'hidden',
  };

  return (
    <TouchableOpacity activeOpacity={1} onPress={flipCard} style={styles.card}>
      <Animated.View style={styles.cardInner}>
        <Animated.View style={[styles.cardFront, frontAnimatedStyle]}>
          <Text>{frontContent}</Text>
        </Animated.View>
        <Animated.View style={[styles.cardBack, backAnimatedStyle]}>
          <Text style={styles.backText}>{backContent}</Text>
          {isFlipped ? (
            <FlippableCardButton
              navigation={navigation}
              handleUserData={handleUserData}
              userData={userData}
            />
          ) : null}
        </Animated.View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default FlippableCard;

const styles = StyleSheet.create({
  card: {
    width: 125,
    height: 125,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 10,
    // Perspective property can be handled during the animation in React Native
  },
  cardInner: {
    position: 'relative', // React Native's default is already 'relative'
    width: '100%',
    height: '100%',
    //backfaceVisibility: 'hidden',
    // Transforms and transition will need to be managed using the `Animated` API
  },
  cardFront: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    //backfaceVisibility: 'hidden',
  },
  cardBack: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#ddd',
    justifyContent: 'space-between', // Align content to the top of the card
    alignItems: 'center',
    padding: 10, // Add some padding to give a little space from the top
    transform: [{rotateY: '180deg'}],
  },
  backText: {
    fontSize: 11,
    fontWeight: 'bold',
  },
});
