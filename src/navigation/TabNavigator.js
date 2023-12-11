import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/internal/Home';
import FeedBack from '../screens/internal/FeedBack';
import Profile from '../screens/internal/Profile';
import DisplayProfile from '../screens/internal/DisplayProfile';
import CalenderScreen from '../screens/internal/CalenderScreen';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="CalenderScreen">
      <Tab.Screen name="Home" component={DisplayProfile} />
      <Tab.Screen name="CalenderScreen" component={CalenderScreen} />
      <Tab.Screen name="Settings" component={FeedBack} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
