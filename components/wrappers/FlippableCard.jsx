import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import FlippableCardButton from '../buttons/FlippableCardButton';

const {width, height} = Dimensions.get('screen');

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
          {isFlipped && (
            <FlippableCardButton
              navigation={navigation}
              handleUserData={handleUserData}
              userData={userData}
            />
          )}
        </Animated.View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default FlippableCard;

const styles = StyleSheet.create({
  card: {
    width: width / 1.2,
    height: height / 5,
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
    padding: 30,
    transform: [{rotateY: '180deg'}],
  },
  frontText: {
    fontFamily: 'Optima',
    fontSize: 25,
  },
  backText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
