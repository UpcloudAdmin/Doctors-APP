import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
// import Plivo from "react-native-plivo";

const AudioCallScreen = () => {
  const [callStatus, setCallStatus] = useState("");

  useEffect(() => {
    // Event listener for call termination
    const onCallTerminated = () => {
      setCallStatus("Call Ended");
    };

    // Event listener for call answered
    const onCallAnswered = () => {
      setCallStatus("Call Answered");
    };

    // // Add event listeners
    // Plivo.addEventListener("onCallTerminated", onCallTerminated);
    // Plivo.addEventListener("onCallAnswered", onCallAnswered);

    // // Clean up event listeners on component unmount
    // return () => {
    //   Plivo.removeEventListener("onCallTerminated", onCallTerminated);
    //   Plivo.removeEventListener("onCallAnswered", onCallAnswered);
    // };
  }, []);

  const handleMakeCall = () => {
   // Plivo.call("DESTINATION_PHONE_NUMBER");
    setCallStatus("Calling...");
  };

  const handleEndCall = () => {
   // Plivo.hangup();
  };

  return (
    <View>
      <Text>{callStatus}</Text>
      <Button title="Make Call" onPress={handleMakeCall} />
      <Button title="End Call" onPress={handleEndCall} />
    </View>
  );
};

export default AudioCallScreen;
