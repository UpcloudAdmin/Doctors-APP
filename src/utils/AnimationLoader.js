import React from "react";
import { Text, View, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
import { imagePath } from "./imagePath";

function AnimationLoader() {
  return (
    <View
      style={[
        {
          zIndex: 10,
          position: "absolute",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          height: "130%",
          width: "120%",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
      ]}
    >
      <FastImage
        source={imagePath?.apploader}
        style={styles.image}
      />
      {/* <Text style={styles.text}>{"Loading ...."}</Text> */}
    </View>
  );
}

export default AnimationLoader;

const styles = StyleSheet.create({
  image: {
    borderRadius: 100,
    height: 100,
    width: 100,
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    color: "black",
    marginTop: 10,
  },
});
