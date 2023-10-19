import React, {useState} from 'react';
import BackgroundWrapperContainer from '../../components/wrappers/BackgroundWrapperContainer';
import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const OptionalScreen = ({navigation, route}) => {
  const [userData, setUserData] = useState({
    ...route.params?.userData,
    position: undefined,
    hometown: undefined,
    skillLevel: undefined,
    height: undefined,
    weight: undefined,
    ageGroup: undefined,
  });

  const skillLevelOptions = [
    {label: 'Professional / Division 1', value: '90-99'},
    {label: 'Collegiate', value: '80-89'},
    {label: 'Varsity', value: '70-79'},
    {label: 'Junior Varsity', value: '60-69'},
    {label: 'Casual', value: '50-59'},
    {label: 'Beginner', value: '40-49'},
  ];

  const ageGroupOptions = [
    {label: '18-25', value: '18-25'},
    {label: '26-35', value: '26-35'},
    {label: '36-45', value: '36-45'},
  ];

  const positionOptions = [
    {label: 'Point Guard', value: '1'},
    {label: 'Combo Guard', value: '1/2'},
    {label: 'Shooting Guard', value: '2'},
    {label: 'Wing', value: '2/3'},
    {label: 'Small Forward', value: '3'},
    {label: 'Point Forward', value: '3/4'},
    {label: 'Power Forward', value: '4'},
    {label: 'Big Man', value: '4/5'},
    {label: 'Center', value: '5'},
  ];

  const renderPicker = (label, field, items) => {
    return (
      <View style={styles.inputContainer}>
        <Text>{label}</Text>
        <RNPickerSelect
          onValueChange={value => setUserData({...userData, [field]: value})}
          items={items}
        />
      </View>
    );
  };

  return (
    <BackgroundWrapperContainer>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.header}>Optional</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>Back</Text>
          </TouchableOpacity>
          {renderPicker(
            'Pick Your Skill Level',
            'skillLevel',
            skillLevelOptions,
          )}
          {renderPicker('Pick Your Age Group', 'ageGroup', ageGroupOptions)}
          {renderPicker('Pick Your Position', 'position', positionOptions)}
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              navigation.navigate('Start');
            }}>
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
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    paddingBottom: 8,
    marginBottom: 25,
    color: 'rgba(43, 45, 66, 1)',
  },
  submitButton: {
    backgroundColor: 'rgba(239,35,60,1)',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
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
