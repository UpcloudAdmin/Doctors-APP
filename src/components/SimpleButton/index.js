// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React from 'react';

// const SimpleButton = ({buttonText, width, backgroundColor,onPress}) => {
//   return (
//     <TouchableOpacity
//       onPress={onPress}
//       style={{
//         height: 50,
//         justifyContent: "center",
//         backgroundColor: backgroundColor ? backgroundColor : "red",
//         width: width,
//         alignSelf: "center",
//         borderRadius: 10,
//       }}
//     >
//       <Text style={{ textAlign: "center" }}>{buttonText}</Text>
//     </TouchableOpacity>
//   );
// };

// export default SimpleButton;

// const styles = StyleSheet.create({});
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { imagePath } from "../../utils/imagePath";
import { appColors } from "../../utils/appColors";
import { useAppCommonDataProvider } from "../../navigation/AppCommonDataProvider";

const SimpleButton = ({ onPress, buttonText, width, backgroundColor }) => {
  const { colorScheme } = useAppCommonDataProvider();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 47,
        justifyContent: "center",
        backgroundColor:"#f3f3f3",
        opacity:"50%",
        // blur:50%
        width: width,
        paddingLeft: 30,
        paddingRight: 30,
        alignSelf: "center",
        borderRadius: 7,
      }}
    >
      <Text
        style={{
          alignSelf: "center",
          fontSize: 19,
          color: colorScheme === "light" ? "#454545" : appColors?.white,
        }}
      >
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default SimpleButton;

const styles = StyleSheet.create({});
