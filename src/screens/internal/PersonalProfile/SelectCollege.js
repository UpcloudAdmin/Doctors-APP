import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";

import { Searchbar } from "react-native-paper";
import ScreenWrapper from "../../../components/ScreenWrapper";
import { imagePath } from "../../../utils/imagePath";
import { appColors } from "../../../utils/appColors";
import { useFocusEffect } from "@react-navigation/native";
import { apiGetModule, apiPostModule } from "../../../utils/commonFunction";
import CommonButton from "../../../components/CommonButton";
import RightButton from "../../../components/RightButton/RightButton";
import { connect, useSelector, useDispatch } from "react-redux";
import { getCollegeListAction } from "../../../redux/action/Collegelist";
import CustomMessage from "../../../utils/CustomMessage";
import { useAppCommonDataProvider } from "../../../navigation/AppCommonDataProvider";

const SelectCollege = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { colorScheme } = useAppCommonDataProvider();

  const [college, setCollege] = useState([]);
  const [selectCollege, setSelectCollege] = useState("");
  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );
  const getData = async () => {
    const getCollege = await apiGetModule("v11/doctorlist/collegelist");
    console.log(getCollege?.colleges, "<--getCollege");
    setCollege(getCollege?.colleges);
    // dispatch({
    //   type: getCollegeListAction?.types?.start,
    //   payload: {
    //     extraData: (collegeList) => {
    //       console.log("collegeList1", collegeList);
    //       if (collegeList?.status === 200) {
    //         if (collegeList?.data?.status == "success") {
    //           // navigation?.navigate("Login");
    //           CustomMessage(collegeList?.data?.message, "success");
    //           setCollege(collegeList?.colleges);
    //         }
    //       } else {
    //         CustomMessage(err?.response?.data?.message?.message, "danger");
    //       }
    //     },
    //     onError: (err) => {
    //       console.log("err", err);
    //       //CustomMessage(err?.response?.data?.message?.message, "danger");
    //     },
    //   },
    // });
  };
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
              College / University
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
              placeholder="Select your College / University"
              placeholderTextColor={
                colorScheme === "light"
                  ? appColors?.darkGray
                  : colorScheme === "dark"
                  ? appColors?.loaderColor
                  : colorScheme === "justDark"
                  ? appColors?.loaderColor
                  : appColors?.darkGray
              }
            />
          </View>
          {console.log(college, "<---collegecollegecollege")}
          <View>
            <FlatList
              style={{ height: "83%", paddingTop: "5%" }}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={college}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectCollege(item?.collegeName);
                    }}
                    style={{
                      // borderBottomColor:
                      // selectCollege === item?.collegeName ? "green" : "black",
                      borderBottomColor:
                        selectCollege === item?.collegeName
                          ? appColors?.greendark
                          : colorScheme === "light"
                          ? "black"
                          : colorScheme === "dark"
                          ? appColors?.loaderColor
                          : colorScheme === "justDark"
                          ? appColors?.loaderColor
                          : "black",
                      borderBottomWidth: 1,
                      paddingVertical: "5%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        // fontWeight: "400",
                        fontWeight:
                          selectCollege === item?.collegeName ? "600" : "400",
                        width: "80%",
                        color:
                          colorScheme === "light"
                            ? "black"
                            : colorScheme === "dark"
                            ? appColors?.white
                            : colorScheme === "justDark"
                            ? appColors?.white
                            : "black",
                        // color:
                        //   selectCollege === item?.collegeName
                        //     ? appColors?.black
                        //     : appColors?.gray,
                      }}
                    >
                      {item?.collegeName}
                    </Text>
                    {selectCollege === item?.collegeName && (
                      <Image source={imagePath?.tick} />
                    )}
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
          disabled={selectCollege === ""}
          onPress={() => {
            navigation?.navigate("SelectDegree", {
              year: route?.params?.year,
              college: selectCollege,
            });
            console.log("this is pressed");
          }}
        />
      </View>
    </ScreenWrapper>
  );
};

export default SelectCollege;

const styles = StyleSheet.create({});
