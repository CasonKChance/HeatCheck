import React, { useState, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, Animated } from 'react-native';
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
    Animated.spring(flipAnim, {
      toValue: isFlipped ? 0 : 1,
      friction: 8,
      tension: 10,
      useNativeDriver: true,
    }).start();
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
          <Text style={styles.frontText}>{frontContent}</Text>
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
    width: 300,
    height: 200,
    borderWidth: 2,
    borderColor: 'black',
    margin: 10,
  },
  cardInner: {
    width: '100%',
    height: '100%',
  },
  cardFront: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardBack: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#ddd',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 27,
    transform: [{ rotateY: '180deg' }],
  },
  frontText: {
    fontFamily: 'BakBakOne-Regular',
    fontSize: 25,
  },
  backText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

