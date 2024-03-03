import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { UserAuthProvider } from "./context/UserAuthContext";
import { UserDataProvider } from "./context/UserDataContext";
import { PaperProvider } from 'react-native-paper';
import MyStack from "./navigation/MyStack";

function App() {
  return (
    <PaperProvider>
      <UserAuthProvider>
        <UserDataProvider>
          <NavigationContainer>
            <MyStack />
          </NavigationContainer>
        </UserDataProvider>
      </UserAuthProvider>
    </PaperProvider>
  );
}

export default App;
