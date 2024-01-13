import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import { Searchbar } from "react-native-paper";
import ScreenWrapper from "../../../components/ScreenWrapper";
import { imagePath } from "../../../utils/imagePath";
import { appColors } from "../../../utils/appColors";
import CommonButton from "../../../components/CommonButton";
import RightButton from "../../../components/RightButton/RightButton";

const SelectYear = ({ navigation }) => {
  const [select, setSelect] = useState("");
  const items = [
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
  ];
  return (
    <ScreenWrapper>
      <View
        style={{
          flex: 1,
          backgroundColor: appColors?.white,
          paddingHorizontal: "5%",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => {
              navigation?.goBack();
            }}
          >
            <Image source={imagePath?.back} style={{ tintColor: "black" }} />
          </TouchableOpacity>
          <Text style={{ fontSize: 28, fontWeight: "600" }}>select Year</Text>
        </View>
        <View style={{ paddingTop: 25 }}>
          <View
            style={{
              height: 40,
              backgroundColor: appColors?.gray,
              borderRadius: 7,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
            }}
          >
            <Image source={imagePath?.eyeClose} />
            <TextInput
              style={{ height: 40, paddingLeft: 20 }}
              placeholder="searchbar"
            />
          </View>
          <View>
            <FlatList
              style={{ height: "90%", paddingTop: "5%" }}
              data={items}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setSelect(item);
                      //   navigation.navigate('SelectCollege');
                    }}
                    style={{
                      borderBottomColor:
                        select === item ? appColors?.green : "black",
                      borderBottomWidth: 0.6,
                      paddingVertical: "5%",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingRight: 30,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: 400,
                          color: appColors?.gray,
                        }}
                      >
                        {item}
                      </Text>
                      {select === item && <Image source={imagePath?.tick} />}
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 20,
          width: "90%",
          marginHorizontal: 20,
        }}
      >
        <RightButton
          disabled={select === ""}
          onPress={() => {
            navigation?.navigate("SelectCollege", {
              year: select,
            });
            console.log("this is pressed");
          }}
        />
      </View>
    </ScreenWrapper>
  );
};

export default SelectYear;

const styles = StyleSheet.create({});
