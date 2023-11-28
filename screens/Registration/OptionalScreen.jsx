import React, {useState} from 'react';
import BackgroundWrapperContainer from '../../components/wrappers/BackgroundWrapperContainer';
import BackButton from '../../components/buttons/BackButton';
import ageGroups from './ageGroups';
import positions from './positions';
import skillLevels from './skillsLevels';
import {SelectList} from 'react-native-dropdown-select-list';
import {useUserData} from '../../context/UserDataContext';
import {useUserAuth} from '../../context/UserAuthContext';
import {CommonActions} from '@react-navigation/native';
import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from 'react-native';

const OptionalScreen = ({navigation}) => {
  const {userData, setUserData} = useUserData();
  const {setIsUserAuth} = useUserAuth();
  const [height, setHeight] = useState(undefined);
  const [weight, setWeight] = useState(undefined);

  const navigateToHome = () => {
    setIsUserAuth(true);
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Home',
      }),
    );
  };

  const renderPicker = (label, field, items) => {
    return (
      <View style={styles.inputContainer}>
        <Text>{label}</Text>
        {field === 'height' || field === 'weight' ? (
          <TextInput
            style={styles.input}
            value={field === 'height' ? height : weight}
            onChangeText={value => {
              if (field === 'height') {
                setHeight(value);
              } else {
                setWeight(value);
              }
            }}
            keyboardType="numeric"
          />
        ) : (
          <View style={styles.pickerContainer}>
            <SelectList
              setSelected={value => setUserData({...userData, [field]: value})}
              data={items}
              save={items.value}
              fontFamily="BakbakOne-Regular"
              search={false}
            />
          </View>
        )}
      </View>
    );
  };

  return (
    <BackgroundWrapperContainer>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Optional</Text>
            <BackButton navigation={navigation} />
          </View>
          {renderPicker('Pick Your Skill Level', 'skillLevel', skillLevels)}
          {renderPicker('Pick Your Age Group', 'ageGroup', ageGroups)}
          {renderPicker('Pick Your Position', 'position', positions)}
          {renderPicker('Enter Your Height (ft, in)', 'height')}
          {renderPicker('Enter Your Weight (lbs)', 'weight')}
          <TouchableOpacity
            style={styles.submitButton}
            onPress={navigateToHome}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </BackgroundWrapperContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
  },
  header: {
    fontFamily: 'BakbakOne-Regular',
    fontSize: 28,
    fontWeight: '500',
    marginBottom: 30,
    color: 'rgba(43,45,66,1)',
    marginTop: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Vertically center items
    justifyContent: 'space-between', // Space evenly between items
    borderBottomWidth: 2,
    paddingBottom: 8,
    marginBottom: 25,
    color: 'rgba(43, 45, 66, 1)',
  },
  pickerContainer: {
    flex: 1, // Take up all available horizontal space
    flexDirection: 'row', // Allow items inside pickerContainer to align to the right
    justifyContent: 'flex-end', // Align items to the right
  },
  submitButton: {
    backgroundColor: 'rgba(239,35,60,1)',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    justifyContent: 'space-between',
  },
  submitButtonText: {
    fontFamily: 'BakbakOne-Regular',
    textAlign: 'center',
    fontWeight: '700',
    color: 'rgba(237,242,244,1)',
    fontSize: 16,
  },
});

export default OptionalScreen;
