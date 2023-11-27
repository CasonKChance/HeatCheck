import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {UserAuthProvider} from './context/UserAuthContext';
import {UserDataProvider} from './context/UserDataContext';
import MyStack from './navigation/MyStack';

function App() {
  return (
    <UserAuthProvider>
      <UserDataProvider>
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </UserDataProvider>
    </UserAuthProvider>
  );
}

export default App;
