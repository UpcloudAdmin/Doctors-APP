import { View, Text, Image } from "react-native";
import React from "react";
import { imagePath } from "../../../utils/imagePath";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const AnotherContact = ({ onPress, EnterNumber, value }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "flex-end",
        width: 200,
        borderBottomWidth: 0.2,
        borderColor: "grey",
      }}
    >
      <TouchableOpacity onPress={onPress}>
        <Image source={imagePath?.plusicon} />
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          marginLeft: 10,
        }}
      >
        <Text>+91</Text>
        <TextInput
          style={{ marginLeft: 10 }}
          placeholder="Contact number"
          onChangeText={EnterNumber}
          value={value}
        />
      </View>
    </View>
  );
};

export default AnotherContact;
