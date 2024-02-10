import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import ScreenWrapper from "../../../components/ScreenWrapper";
import { imagePath } from "../../../utils/imagePath";
import { appColors } from "../../../utils/appColors";
import { useFocusEffect } from "@react-navigation/native";
import { apiGetModule } from "../../../utils/commonFunction";
import { useAppCommonDataProvider } from "../../../navigation/AppCommonDataProvider";
import RightButton from "../../../components/RightButton/RightButton";

const SelectSpecial = ({ navigation }) => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];
  const { setSpecial, colorScheme } = useAppCommonDataProvider();
  const [state, setState] = useState([]);
  const [speciality, setSpeciality] = useState([]);
  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );
  useEffect(() => {
    setSpecial(speciality);
  }, [speciality]);
  const getData = async () => {
    const getCollege = await apiGetModule("v11/doctorlist/specialitylist");
    console.log(getCollege?.specialitys, "<--getCollege");
    setState(getCollege?.specialitys);
    // setCollege(getCollege?.colleges);
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
              Speciality
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
              }}
              placeholder="Searchbar"
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
          <View>
            {speciality && (
              <FlatList
                style={{ marginTop: 10, height: 170 }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={speciality}
                renderItem={({ item }) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        const filtered = speciality?.filter(
                          (itm) => itm !== item.specialityName
                        );
                        setSpeciality(filtered);
                      }}
                      style={{
                        marginTop: 10,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: "600",
                          width: "80%",
                          color:
                            colorScheme === "light"
                              ? appColors?.specialityColor
                              : colorScheme === "dark"
                              ? appColors?.white
                              : colorScheme === "justDark"
                              ? appColors?.white
                              : appColors?.specialityColor,
                          // color:
                          //   selectDegree === item?.degree
                          //     ? appColors?.black
                          //     : appColors?.gray,
                        }}
                      >
                        {item}
                      </Text>
                      <Image source={imagePath?.no} />
                    </TouchableOpacity>
                  );
                }}
              />
            )}
            <View
              style={{
                borderBottomColor:
                  colorScheme === "light"
                    ? "black"
                    : colorScheme === "dark"
                    ? appColors?.white
                    : colorScheme === "justDark"
                    ? appColors?.white
                    : "black",
                borderBottomWidth: 0.7,
                // paddingVertical: "5%",
                width: "107%",
                marginTop: 10,
              }}
            ></View>
            <FlatList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              style={{ height: "90%" }}
              data={state}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setSpeciality([...speciality, item?.primarySpeciality]);
                    }}
                    // style={{
                    //   borderBottomColor: "black",
                    //   borderBottomWidth: 0.6,
                    //   paddingVertical: "5%",
                    // }}
                    style={{
                      borderBottomColor:
                        colorScheme === "light"
                          ? "black"
                          : colorScheme === "dark"
                          ? appColors?.loaderColor
                          : colorScheme === "justDark"
                          ? appColors?.loaderColor
                          : "black",
                      borderBottomWidth: 1,
                      height: 40,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Text
                      style={{
                        marginTop: 15,
                        color:
                          colorScheme === "light"
                            ? "black"
                            : colorScheme === "dark"
                            ? appColors?.white
                            : colorScheme === "justDark"
                            ? appColors?.white
                            : "black",
                      }}
                    >
                      {item?.primarySpeciality}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
            <View style={{ backgroundColor: "red", height: 100 }}></View>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SelectSpecial;

const styles = StyleSheet.create({});
