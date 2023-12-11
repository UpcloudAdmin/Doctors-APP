import {StyleSheet, Text, View} from 'react-native';
import React, {createContext, useContext, useState} from 'react';
import {useColorScheme} from 'react-native';
import {Appearance} from 'react-native';
export const AppContext = createContext({
  colorScheme: null,
  setColorScheme: null,
});
export const AppCommonDataProvider = ({children}) => {
  const [colorScheme, setColorScheme] = useState(Appearance?.getColorScheme());
  const [special, setSpecial] = useState([]);
  const [college, setCollege] = useState({
    deg: '',
    college: '',
    passingYear: '',
  });
  const [memberShip, setMembership] = useState([]);
  const [clinicServices, setClinicServices] = useState([]);
  return (
    <AppContext.Provider
      value={{
        colorScheme,
        setColorScheme,
        special,
        setSpecial,
        college,
        setCollege,
        setMembership,
        memberShip,
        setClinicServices,
        clinicServices,
      }}>
      {children}
    </AppContext.Provider>
  );
};
export const useAppCommonDataProvider = () => useContext(AppContext);
const styles = StyleSheet.create({});
