import {StyleSheet, View, ImageBackground} from 'react-native';
import React from 'react';

const BackgroundContainer = ({children}) => {
  return (
    <View>
      <View style={styles.rect}>
        <View style={styles.imageStack}>
          <ImageBackground
            source={require('../assets/images/stripes.png')}
            resizeMode="stretch"
            style={styles.image}
            imageStyle={styles.image_imageStyle}
          />
        </View>
      </View>
      {children}
    </View>
  );
};

export default BackgroundContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  rect: {
    flex: 1,
    backgroundColor: 'rgba(237,242,244,1)',
    borderRadius: 54,
  },
  image: {
    flex: 1,
    left: 0,
  },
  image_imageStyle: {
    opacity: 0.2,
  },
  rect3: {
    width: 180,
    height: 40,
    backgroundColor: 'rgba(43,45,66,1)',
    borderRadius: 40,
    shadowColor: 'rgba(43,45,66,1)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 60,
    shadowOpacity: 1,
    shadowRadius: 20,
    marginTop: 420,
    marginLeft: 98,
  },
  imageStack: {
    width: 375,
    height: 812,
  },
});
