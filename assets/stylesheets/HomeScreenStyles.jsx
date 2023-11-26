import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mapContainer: {
    flexDirection: 'row',
    margin: 20,
    marginTop: 50,
    marginBottom: 10,
    height: 250,
  },
  map: {
    flex: 1,
  },
  findGameTitleView: {
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 3,
    borderBottomWidth: 3,
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
