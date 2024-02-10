import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';

import {Searchbar} from 'react-native-paper';
import ScreenWrapper from '../../../components/ScreenWrapper';
import {imagePath} from '../../../utils/imagePath';
import {appColors} from '../../../utils/appColors';
import {useFocusEffect} from '@react-navigation/native';
import {apiGetModule, apiPostModule} from '../../../utils/commonFunction';
import CommonButton from '../../../components/CommonButton';
import RightButton from '../../../components/RightButton/RightButton';
import {useAppCommonDataProvider} from '../../../navigation/AppCommonDataProvider';

const SelectDegree = ({navigation, route}) => {
  const { setCollege, colorScheme } = useAppCommonDataProvider();
  const [degree, setDegree] = useState([]);
  const [selectDegree, setSelectDegree] = useState('');
  useFocusEffect(
    useCallback(() => {
      getData();
    }, []),
  );
  const getData = async () => {
    console.log(route?.params, '<---params');
    const getCollege = await apiGetModule('v11/doctorlist/degreelist');
    console.log(getCollege?.degree, '<--getCollege');
    setDegree(getCollege?.degrees);
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
              Degree
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
                fontStyle:"italic"
              }}
              placeholder="Select your Degree"
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
            <FlatList
              style={{ height: "87%", paddingTop: "5%" }}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={degree}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectDegree(item?.degree);
                    }}
                    style={{
                      // borderBottomColor:
                      // selectDegree === item?.degree ? "green" : "black",
                      borderBottomColor:
                        selectDegree === item?.degree
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
                        //  fontWeight: "400",
                        fontWeight:
                          selectDegree === item?.degree ? "600" : "400",
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
                        //   selectDegree === item?.degree
                        //     ? appColors?.black
                        //     : appColors?.gray,
                      }}
                    >
                      {item?.degree}
                    </Text>
                    {selectDegree === item?.degree && (
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
          disabled={selectDegree === ""}
          onPress={() => {
            setCollege({
              deg: selectDegree,
              college: route?.params?.college,
              passingYear: route?.params?.year,
            });
            navigation?.navigate("PersonalProfile");
          }}
        />
      </View>
    </ScreenWrapper>
  );
};

export default SelectDegree;

const styles = StyleSheet.create({});
