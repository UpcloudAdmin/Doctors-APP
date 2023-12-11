import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const getToken = async () => {
      const tok = await AsyncStorage.getItem('token');
      if (tok) {
        Alert?.alert("coming ievefe")
        navigation.navigate('TabNavigator');
      } else {
        navigation.navigate('SignUp');
      }
      console.log(tok, '<--sadsadsa');
    };
    getToken();
  });
  return (
    <ScreenWrapper>
      <Text>moving</Text>
    </ScreenWrapper>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
