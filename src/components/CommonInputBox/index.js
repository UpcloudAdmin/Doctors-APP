// import { Pressable, StyleSheet, Text, View } from "react-native";
// import React from "react";
// import { TextInput } from "react-native-paper";
// import { appColors } from "../../utils/appColors";
// import AnimatedInput from "react-native-animated-input";

// import { useAppCommonDataProvider } from "../../navigation/AppCommonDataProvider";
// const CommonInputBox = ({
//   label,
//   onFocus,
//   value,
//   editable,
//   onPress,
//   isValid,
//   onChangeText,
//   props,
// }) => {
//   const { colorScheme } = useAppCommonDataProvider();
//   return (
//     <View>
//       <AnimatedInput
//         onFocus={onFocus}
//         onPress={onPress}
//         style={{
        
//           // backgroundColor:
//           //   colorScheme === "light" ? appColors?.white : appColors?.black,
//           height: 70,
//           borderBottomWidth: colorScheme === "light" ? 0.5 : 0,
       
//         }}
//         value={value}
//         underlineColor={
//           colorScheme === "light" ? appColors?.white : appColors?.gray
//         }
//         valid={isValid}
//         errorText="Error"
//         placeholderTextColor={appColors?.gray}
//         styleLabel={{
//           fontWeight: "600",
//           color: colorScheme === "light" ? appColors?.black : appColors?.white,
//         }}
//         styleInput={{
//           color: colorScheme === "light" ? appColors?.black : appColors?.white,
//         }}
//         placeholder={label}
//         onChangeText={onChangeText}
//       />
//       {/* <AnimatedInput
//         onFocus={onFocus}
//         placeholder={label}
//         valid={isValid}
//         errorText="Error"
//         onChangeText={onChangeText}
//         value={value}
//         styleLabel={{ fontWeight: "600" }}
//         styleBodyContent={{
//           borderBottomWidth: 1.5,
//         }}
//       /> */}
//     </View>
//   );
// };

// export default CommonInputBox;

//const styles = StyleSheet.create({});
import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { appColors } from "../../utils/appColors";
import { useAppCommonDataProvider } from "../../navigation/AppCommonDataProvider";
const CommonInputBox = ({
  label,
  onFocus,
  value,
  editable,
  onPress,
  onChangeText,
}) => {
  const { colorScheme } = useAppCommonDataProvider();
  return (
    <View
      onTouchStart={onPress}
      // onStartShouldSetResponder={() => true}
      // onStartShouldSetResponder={() => console.log('view pressed')}
      style={{}}
    >
      <TextInput
        onFocus={onFocus}
        style={{
          width: "100%",
          backgroundColor: colorScheme === "light" ? appColors?.white : "black",
          height: 60,
          marginTop: 10,
          borderBottomWidth: colorScheme === "light" ? 1 : 0,
          borderColor: appColors?.black,
        }}
        // editable={false}
        value={value}
        underlineColor={
          colorScheme === "light" ? appColors?.white : appColors?.gray
        }
        placeholderTextColor={appColors?.gray}
        theme={{
          colors: {
            text: colorScheme === "light" ? appColors?.black : appColors?.gray,
            underlineColor:
              colorScheme === "light" ? appColors?.black : appColors?.gray,
            primary:
              colorScheme === "light" ? appColors?.black : appColors?.gray,
          },
        }}
        label={label}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default CommonInputBox;

const styles = StyleSheet.create({});