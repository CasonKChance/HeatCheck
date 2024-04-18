import React, { createContext, useContext, useState } from "react";

const UserDataContext = createContext();

export const useUserData = () => {
  return useContext(UserDataContext);
};

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
    confirmPassword: "",
    position: undefined,
    hometown: undefined,
    skillLevel: undefined,
    height: undefined,
    weight: undefined,
    ageGroup: undefined,
    playType: undefined,
  });

  const updateUserData = (field, value) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [field]: value,
    }));
  };

  return (
    <UserDataContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};
