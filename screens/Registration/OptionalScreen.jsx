import React, { useState } from 'react';
import BackgroundWrapperContainer from '../../components/wrappers/BackgroundWrapperContainer';
import BackButton from '../../components/buttons/BackButton';
import ageGroups from './ageGroups';
import positions from './positions';
import skillLevels from './skillsLevels';
import { SelectList } from 'react-native-dropdown-select-list';
import { useUserData } from '../../context/UserDataContext';
import { useUserAuth } from '../../context/UserAuthContext';
import { CommonActions } from '@react-navigation/native';
import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';

const OptionalScreen = ({ navigation }) => {
  const { userData, setUserData } = useUserData();
  const { setIsUserAuth } = useUserAuth();
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const navigateToHome = () => {
    // Update userData before navigating
    setUserData(currentData => ({
      ...currentData,
      height: height,
      weight: weight,
      skillLevel: userData.skillLevel,
      ageGroup: userData.ageGroup,
    }));
  
    setIsUserAuth(true);
    navigation.dispatch(
      CommonActions.navigate({
        name: 'HomeScreen',
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
          onChangeText={(value) => {
            if (field === 'height') {
              setHeight(value);
            } else {
              setWeight(value);
            }
          }}
          keyboardType="numeric"
          placeholder="Enter value" // Optional, for guiding users
          textAlign="right" // This ensures text aligns to the right
        />
      ) : (
        <View style={styles.pickerContainer}>
          <SelectList
            setSelected={(value) => {
              console.log(`Selected ${field}:`, value); // Add this console log
              setUserData(prevUserData => ({ ...prevUserData, [field]: value }));
              console.log("Updated userData:", userData); // Add this console log
            }}
            data={items}
            save={items.value}
            fontFamily="Optima"
            search={false}
          />
        </View>
      )}
    </View>
  );
};

  return (
    <BackgroundWrapperContainer>
      <ScrollView>
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
      </ScrollView>
    </BackgroundWrapperContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
  },
  header: {
    fontFamily: 'Optima',
    fontSize: 28,
    fontWeight: '500',
    marginBottom: 0,
    color: 'rgba(43,45,66,1)',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingTop: 22,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    padding: 8,
    marginBottom: 0,
    color: 'rgba(43, 45, 66, 1)',
    paddingBottom: 8,
  },
  pickerContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  submitButton: {
    backgroundColor: 'rgba(239,35,60,1)',
    padding: 0,
    borderRadius: 10,
    marginTop: 15,
    justifyContent: 'center',
    height: 40,
  },
  submitButtonText: {
    fontFamily: 'Optima',
    textAlign: 'center',
    fontWeight: '700',
    color: 'rgba(237,242,244,1)',
    fontSize: 25,
  },
  input: {
    height: 40, // Adjust height to ensure tap-ability
    // paddingHorizontal: 60, // Adequate horizontal padding for text
    paddingTop: 10, // Adequate top padding for easier focus
    paddingBottom: 10, // Bottom padding for visual balance
  },  
});

export default OptionalScreen;