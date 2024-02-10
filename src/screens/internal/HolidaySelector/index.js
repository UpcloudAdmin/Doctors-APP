import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../../../components/ScreenWrapper";
import { appColors } from "../../../utils/appColors";
import { imagePath } from "../../../utils/imagePath";
import CommonButton from "../../../components/CommonButton";
import { useAppCommonDataProvider } from "../../../navigation/AppCommonDataProvider";

const HolidaySelector = ({ navigation }) => {
    const { colorScheme } = useAppCommonDataProvider();

  const [daySelect, setDaySelect] = useState([]);
  console.log("dayselesad", daySelect);
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
              Holidays
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: "10%",
            backgroundColor: "red",
            paddingLeft: 30,
            paddingRight: 30,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 20,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Monday</Text>
            <TouchableOpacity
              onPress={() => {
                if (daySelect?.includes("monday")) {
                  const filterdata = daySelect.filter(
                    (itm) => itm !== "monday"
                  );
                  setDaySelect(filterdata);
                } else {
                  setDaySelect([...daySelect, "monday"]);
                }
              }}
            >
              {daySelect?.includes("monday") ? (
                <Image source={imagePath?.tick} />
              ) : (
                <Image source={imagePath?.box} />
              )}
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 20,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Tuesday</Text>
            <TouchableOpacity
              onPress={() => {
                if (daySelect?.includes("tuesday")) {
                  const filterdata = daySelect.filter(
                    (itm) => itm !== "tuesday"
                  );
                  setDaySelect(filterdata);
                } else {
                  setDaySelect([...daySelect, "tuesday"]);
                }
              }}
            >
              {daySelect?.includes("tuesday") ? (
                <Image source={imagePath?.tick} />
              ) : (
                <Image source={imagePath?.box} />
              )}
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 20,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Wednesday</Text>
            <TouchableOpacity
              onPress={() => {
                if (daySelect?.includes("wednesday")) {
                  const filterdata = daySelect.filter(
                    (itm) => itm !== "wednesday"
                  );
                  setDaySelect(filterdata);
                } else {
                  setDaySelect([...daySelect, "wednesday"]);
                }
              }}
            >
              {daySelect?.includes("wednesday") ? (
                <Image source={imagePath?.tick} />
              ) : (
                <Image source={imagePath?.box} />
              )}
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 20,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Thursday</Text>
            <TouchableOpacity
              onPress={() => {
                if (daySelect?.includes("thursday")) {
                  const filterdata = daySelect.filter(
                    (itm) => itm !== "thursday"
                  );
                  setDaySelect(filterdata);
                } else {
                  setDaySelect([...daySelect, "thursday"]);
                }
              }}
            >
              {daySelect?.includes("thursday") ? (
                <Image source={imagePath?.tick} />
              ) : (
                <Image source={imagePath?.box} />
              )}
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 20,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Friday</Text>
            <TouchableOpacity
              onPress={() => {
                if (daySelect?.includes("friday")) {
                  const filterdata = daySelect.filter(
                    (itm) => itm !== "friday"
                  );
                  setDaySelect(filterdata);
                } else {
                  setDaySelect([...daySelect, "friday"]);
                }
              }}
            >
              {daySelect?.includes("friday") ? (
                <Image source={imagePath?.tick} />
              ) : (
                <Image source={imagePath?.box} />
              )}
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 20,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Saturday</Text>
            <TouchableOpacity
              onPress={() => {
                if (daySelect?.includes("saturday")) {
                  const filterdata = daySelect.filter(
                    (itm) => itm !== "saturday"
                  );
                  setDaySelect(filterdata);
                } else {
                  setDaySelect([...daySelect, "saturday"]);
                }
              }}
            >
              {daySelect?.includes("saturday") ? (
                <Image source={imagePath?.tick} />
              ) : (
                <Image source={imagePath?.box} />
              )}
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 20,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Sunday</Text>
            <TouchableOpacity
              onPress={() => {
                if (daySelect?.includes("sunday")) {
                  const filterdata = daySelect.filter(
                    (itm) => itm !== "sunday"
                  );
                  setDaySelect(filterdata);
                } else {
                  setDaySelect([...daySelect, "sunday"]);
                }
              }}
            >
              {daySelect?.includes("sunday") ? (
                <Image source={imagePath?.tick} />
              ) : (
                <Image source={imagePath?.box} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{
          height: 47,
          backgroundColor: "rgba(0, 182, 29, 0.30);",
          marginBottom: 51,
          padding: 13,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            color: appColors?.white,
            textAlign: "center",
          }}
        >
          Save
        </Text>
      </TouchableOpacity>
    </ScreenWrapper>
  );
};

export default HolidaySelector;

const styles = StyleSheet.create({});
