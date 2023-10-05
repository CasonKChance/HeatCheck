import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MyStack from './navigation/MyStack';

function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

export default App;
