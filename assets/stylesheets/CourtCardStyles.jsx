import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  courtCardBody: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: 'lightgrey',
    borderWidth: 2,
    height: 100,
    flexDirection: 'row',
  },
  courtImage: {
    margin: 5,
    height: '90%',
    width: '25%',
  },
  courtTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  courtAddress: {},
  courtAvailabilityGreen: {
    color: 'green',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 'auto',
  },
  courtAvailabilityYellow: {
    color: 'yellow',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 'auto',
  },
  courtAvailabilityRed: {
    color: 'red',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 'auto',
  },
});

export default styles;
