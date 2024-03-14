import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mapContainer: {
    flexDirection: 'row',
    margin: 10,
    marginTop: 20,
    marginBottom: 10,
    height: 250,
    borderRadius: 10,
    borderWidth: 2,
    overflow: 'hidden',
    // backgroundColor: '#564E58',
    // shadowColor: '#000',
    // shadowOffset: {width: 5, height: 5},
    // shadowOpacity: 0.3,
    // shadowRadius: 5,
    // elevation: 5,
  },
  map: {
    flex: 1,
  },
  findGameTitleView: {
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderTopWidth: 2.5,
    borderBottomWidth: 2.5,
  },
  findGameTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  findGameMainView: {
    margin: 10,
    height: '100%',
  },
});

export default styles;
