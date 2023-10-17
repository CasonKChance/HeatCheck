import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';

const FlippableCard = ({ frontContent, backContent }) => {
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
  };

  const backAnimatedStyle = {
    transform: [
      {
        rotateY: flipAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ['180deg', '360deg'],
        }),
      },
    ],
  };


  if (!isFlipped) {
    return(
      <TouchableOpacity activeOpacity={1} onPress={flipCard} style={styles.card}>
          <Animated.View style={[styles.cardInner, frontAnimatedStyle]}>
            <View style={styles.cardFront}>
              <Text>{frontContent}</Text>
            </View>
          </Animated.View>
      </TouchableOpacity>
    );
  } else {
    return(
      <TouchableOpacity activeOpacity={1} onPress={flipCard} style={styles.card}>
        <Animated.View style={[styles.cardInner, backAnimatedStyle]}>
          <View style={styles.cardBack}>
            <Text>{backContent}</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

export default FlippableCard;

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 200,
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
    justifyContent: 'center',
    alignItems: 'center',
    //backfaceVisibility: 'hidden',
    transform: [{ rotateY: '180deg' }],
  },
});
