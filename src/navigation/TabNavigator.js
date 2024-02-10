import { StyleSheet, Text, View, Animated, Image } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/internal/Home";
import FeedBack from "../screens/internal/FeedBack";
import Profile from "../screens/internal/Profile";
import DisplayProfile from "../screens/internal/DisplayProfile";
import CalenderScreen from "../screens/internal/CalenderScreen";
import { useScrollToTop } from "@react-navigation/native";
import { imagePath } from "../utils/imagePath";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Calender"
    >
      <Tab.Screen
        name="FeedBack"
        component={FeedBack}
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ color, size, focused }) => (
            <View>
              <Image
                style={{ width: 20, height: 20 }}
                source={imagePath?.feedbackIcon}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Calender"
        component={CalenderScreen}
        options={{
          tabBarLabel: "Calender",
          tabBarIcon: ({ color, size, focused }) => (
            <View>
              <Image
                style={{ width: 20, height: 20 }}
                source={imagePath?.calendarIcon}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Edit Profile",
          tabBarIcon: ({ color, size, focused }) => (
            <View>
              <Image
                style={{ width: 20, height: 20 }}
                source={imagePath?.profileIcon}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Display Profile"
        component={DisplayProfile}
        options={{
          tabBarLabel: "Display Profile",
          tabBarIcon: ({ color, size, focused }) => (
            <View>
              <Image
                style={{ width: 20, height: 20 }}
                source={imagePath?.displayIcon}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "red",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    padding: 20,
    fontSize: 18,
  },
});
