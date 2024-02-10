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
import { useAppCommonDataProvider } from "../../../navigation/AppCommonDataProvider";

const SelectYear = ({ navigation }) => {
  const { colorScheme } = useAppCommonDataProvider();
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
    <ScreenWrapper
      statusBarColor={
        colorScheme === "light"
          ? appColors?.white
          : colorScheme === "dark"
          ? appColors?.black
          : colorScheme === "justDark"
          ? appColors?.black
          : appColors?.white
      }
    >
      <View
        style={{
          // flex: 1,
          backgroundColor:
            colorScheme === "light"
              ? appColors?.white
              : colorScheme === "dark"
              ? appColors?.black
              : colorScheme === "justDark"
              ? appColors?.black
              : appColors?.white,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => {
              navigation?.goBack();
            }}
          >
            <Image
              source={imagePath?.back}
              style={{
                tintColor:
                  colorScheme === "light"
                    ? "black"
                    : colorScheme === "dark"
                    ? appColors?.white
                    : colorScheme === "justDark"
                    ? appColors?.white
                    : "black",
              }}
            />

            <Text
              style={{
                fontSize: 28,
                fontWeight: "600",
                marginLeft: -10,
                color:
                  colorScheme === "light"
                    ? appColors?.black
                    : colorScheme === "dark"
                    ? appColors?.white
                    : colorScheme === "justDark"
                    ? appColors?.white
                    : appColors?.black,
              }}
            >
              Year of Passing
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 16, padding: 25 }}>
          <View
            style={{
              height: 40,
              backgroundColor:
                colorScheme === "light"
                  ? appColors?.searchBarColor
                  : colorScheme === "dark"
                  ? "transparent"
                  : colorScheme === "justDark"
                  ? "transparent"
                  : appColors?.searchBarColor,
              borderWidth:
                colorScheme === "light"
                  ? 0
                  : colorScheme === "dark"
                  ? 1
                  : colorScheme === "justDark"
                  ? 1
                  : 1,

              borderColor:
                colorScheme === "light"
                  ? "transparent"
                  : colorScheme === "dark"
                  ? appColors?.loaderColor
                  : colorScheme === "justDark"
                  ? appColors?.loaderColor
                  : "transparent",
              borderRadius: 7,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
              paddingLeft: 10,
              paddingRight: 5,
            }}
          >
            <Image
              source={imagePath?.eyeClose}
              style={{
                tintColor:
                  colorScheme === "light"
                    ? appColors?.loaderColor
                    : colorScheme === "dark"
                    ? appColors?.loaderColor
                    : colorScheme === "justDark"
                    ? appColors?.loaderColor
                    : appColors?.loaderColor,
              }}
            />
            <TextInput
              style={{
                height: 40,
                paddingLeft: 5,
                fontSize: 15,
                fontWeight: "300",
                fontStyle: "italic",
              }}
              placeholderTextColor={
                colorScheme === "light"
                  ? appColors?.darkGray
                  : colorScheme === "dark"
                  ? appColors?.loaderColor
                  : colorScheme === "justDark"
                  ? appColors?.loaderColor
                  : appColors?.darkGray
              }
              placeholder="Select the year of passing"
            />
          </View>
          <View>
            <FlatList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              style={{ height: "83%", paddingTop: "5%" }}
              // style={{
              //   height: "100%",
              //   paddingTop: "5%",
              //   paddingBottom: 90,
              //   padding: 5,
              // }}
              data={items}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setSelect(item);
                      // navigation.navigate("SelectCollege");
                    }}
                    style={{
                      borderBottomColor:
                        select === item
                          ? appColors?.greendark
                          : colorScheme === "light"
                          ? "black"
                          : colorScheme === "dark"
                          ? appColors?.loaderColor
                          : colorScheme === "justDark"
                          ? appColors?.loaderColor
                          : "black",
                      borderBottomWidth: select === item ? 1.3 : 0.6,
                      paddingVertical: "2%",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingRight: 5,
                        height: 43,
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 15,
                          // fontWeight: "400",
                          fontWeight: select === item ? "600" : "400",
                          color:
                            colorScheme === "light"
                              ? "black"
                              : colorScheme === "dark"
                              ? appColors?.white
                              : colorScheme === "justDark"
                              ? appColors?.white
                              : "black",
                          // color:
                          //   select === item
                          //     ? appColors?.black
                          //     : appColors?.darkGray,
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
          bottom: 50,
          width: "90%",
          marginHorizontal: 20,
          alignSelf: "center",
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
