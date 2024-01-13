import { View, Text, Image } from "react-native";
import React from "react";
import { imagePath } from "../../../utils/imagePath";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Index from "react-native-calendar-range-picker";

const AnotherContactList = (props) => {
  const { index, onPress, item } = props;
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
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => onPress(props.index, item)}>
          <Image source={imagePath?.lineicon} style={{ marginTop: 7 }} />
        </TouchableOpacity>
        <Text value={props.value} style={{ marginLeft: 10 }}>
          +91 {props.value}
        </Text>
      </View>
    </View>
  );
};

export default AnotherContactList;
