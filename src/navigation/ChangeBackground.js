import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChangeBackground = () => {
  const getBackgroundColor = () => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();

    // Define time ranges and corresponding colors
    const timeRanges = [
      {
        startHour: 20,
        startMinute: 30,
        endHour: 4,
        endMinute: 59,
        color: "#00008B",
      }, // 8:30 PM to 4:59 AM
      {
        startHour: 17,
        startMinute: 31,
        endHour: 20,
        endMinute: 30,
        color: "#FFD700",
      }, // 5:31 PM to 8:30 PM
      {
        startHour: 12,
        startMinute: 0,
        endHour: 17,
        endMinute: 30,
        color: "#32CD32",
      }, // 12:00 PM to 5:30 PM
      {
        startHour: 5,
        startMinute: 0,
        endHour: 11,
        endMinute: 59,
        color: "#00BFFF",
      }, // 5:00 AM to 11:59 AM
    ];

    // Check current time against each time range
    for (const range of timeRanges) {
      const startTime = range.startHour * 60 + range.startMinute;
      const endTime = range.endHour * 60 + range.endMinute;
      const currentTime = currentHour * 60 + currentMinute;

      if (currentTime >= startTime && currentTime <= endTime) {
        return range.color;
      }
    }

    // Default color if no match
    return "#FFFFFF";
  };

  const containerStyle = {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: getBackgroundColor(),
  };

  return (
    <View style={containerStyle}>
      <Text style={{ color: "#FFFFFF" }}>Hello, World!</Text>
    </View>
  );
};

export default ChangeBackground;
