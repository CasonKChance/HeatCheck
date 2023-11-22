import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {UserAuthProvider} from './context/UserAuthContext';
import MyStack from './navigation/MyStack';

function App() {
  return (
    <UserAuthProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </UserAuthProvider>
  );
}

export default App;
