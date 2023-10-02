import {StyleSheet, View, ImageBackground, Dimensions} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');

const BackgroundWrapperContainer = ({children}) => {
  return (
    <View>
      <View style={styles.rect}>
        <View style={styles.imageStack}>
          <ImageBackground
            source={require('../../assets/images/stripes.png')}
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

export default BackgroundWrapperContainer;

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
  imageStack: {
    width: width,
    height: height,
  },
});
