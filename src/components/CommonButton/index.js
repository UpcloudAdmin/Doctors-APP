import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { imagePath } from "../../utils/imagePath";
import { appColors } from "../../utils/appColors";
import { useAppCommonDataProvider } from "../../navigation/AppCommonDataProvider";

const CommonButton = ({ onPress, buttonText, success }) => {
  const { colorScheme } = useAppCommonDataProvider();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 215,
        backgroundColor:
          colorScheme === "light"
            ? appColors?.lightGray
            : appColors?.transprance,

        borderColor:
          colorScheme === "light" ? appColors?.white : appColors?.orange,
        borderWidth: 1,
        paddingVertical: "5%",
        paddingHorizontal: "5%",
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          alignSelf: "center",
          fontSize: 19,
          color: colorScheme === "light" ? appColors?.black : appColors?.white,
        }}
      >
        {buttonText}
      </Text>
      <Image
        tintColor={
          colorScheme === "light" ? appColors?.black : appColors?.white
        }
        source={imagePath?.arrow}
      />
    </TouchableOpacity>
  );
};

export default CommonButton;

const styles = StyleSheet.create({});
