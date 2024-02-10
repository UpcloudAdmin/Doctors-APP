import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { imagePath } from "../../utils/imagePath";
import { appColors } from "../../utils/appColors";
import * as Progress from "react-native-progress";
import { useAppCommonDataProvider } from "../../navigation/AppCommonDataProvider";
const CommonHeader = ({ showProgress, text, navigation }) => {
  const { colorScheme, setColorScheme } = useAppCommonDataProvider();

  const [backgroundColor, setBackgroundColor] = useState(
    colorScheme === "light"
      ? appColors?.brown
      : colorScheme === "dark"
      ? appColors?.brown
      : colorScheme === "justDark"
      ? "#000000"
      : appColors?.brown
  ); // Default background color

  // Use useEffect to update the background color when the component mounts and every minute thereafter
  useEffect(() => {
    updateBackgroundColor();
    // Update background color every minute
    const interval = setInterval(() => {
      updateBackgroundColor();
    }, 60000); // 60000 milliseconds = 1 minute

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  const updateBackgroundColor = () => {
    const currentHour = new Date().getHours();
    const currentMinutes = new Date().getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinutes;
    console.log(
      "currentHour",
      currentHour,
      currentMinutes,
      currentTimeInMinutes
    );
    if (
      (currentTimeInMinutes >= 20 * 60 + 30 && currentTimeInMinutes < 5 * 60) ||
      (currentTimeInMinutes >= 17 * 60 + 31 &&
        currentTimeInMinutes < 20 * 60 + 30)
    ) {
      setBackgroundColor(
        colorScheme === "light"
          ? appColors?.brown
          : colorScheme === "dark"
          ? appColors?.brown
          : colorScheme === "justDark"
          ? "#000000"
          : appColors?.brown
      ); // Red color
    } else if (
      currentTimeInMinutes >= 12 * 60 &&
      currentTimeInMinutes < 17 * 60 + 30
    ) {
      setBackgroundColor(
        colorScheme === "light"
          ? appColors?.brown
          : colorScheme === "dark"
          ? appColors?.brown
          : colorScheme === "justDark"
          ? "#000000"
          : appColors?.brown
      ); // Blue color
    } else if (
      currentTimeInMinutes >= 5 * 60 &&
      currentTimeInMinutes < 12 * 60
    ) {
      setBackgroundColor("#291E17"); // Green color
    } else if (currentTimeInMinutes >= 5 && currentTimeInMinutes < 12 * 60) {
      setBackgroundColor("#1B1516"); // Yellow color
    } else {
      setBackgroundColor(
        colorScheme === "light"
          ? appColors?.brown
          : colorScheme === "dark"
          ? appColors?.brown
          : colorScheme === "justDark"
          ? "#000000"
          : appColors?.brown
      ); // Default color
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: "backgroundColor" }}>
      <View
        style={{
          height: 184,
          backgroundColor:
            colorScheme === "light"
              ? appColors?.brown
              : colorScheme === "dark"
              ? appColors?.brown
              : colorScheme === "justDark"
              ? "#000000"
              : appColors?.brown
        }}
      >
        <View
          style={{
            //flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 5,
            backgroundColor:
              colorScheme === "light"
                ? appColors?.brown
                : colorScheme === "dark"
                ? appColors?.brown
                : colorScheme === "justDark"
                ? "#000000"
                : appColors?.brown,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation?.goBack();
              }}
            >
              <Image
                source={imagePath?.back}
                style={{ resizeMode: "contain", marginBottom: 30 }}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 28,
                color: appColors?.white,
                fontWeight: "600",
              }}
            >
              {text}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "22%",
              marginRight: 30,
              marginBottom: 25,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation?.navigate("SettingScreen");
              }}
            >
              <Image source={imagePath?.settings} />
            </TouchableOpacity>
            <Image source={imagePath?.demoProfile} />
          </View>
        </View>
        {showProgress && (
          <View
            style={{
              marginTop: 15,
              alignItems: "center",
              // flex: 0.6,
              paddingLeft: 20,
              backgroundColor:
                colorScheme === "light"
                  ? appColors?.brown
                  : colorScheme === "dark"
                  ? appColors?.brown
                  : colorScheme === "justDark"
                  ? "#000000"
                  : appColors?.brown,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: 300,
                marginBottom: 5,
              }}
            >
              <Text
                style={{
                  color: appColors?.white,
                  marginTop: 5,
                  fontSize: 12,
                  fontWeight: "700",
                }}
              >
                Profile Complete
              </Text>
              <Text
                style={{
                  color: appColors?.lightWhite,
                  fontSize: 12,
                  fontWeight: "700",
                }}
              >
                100%
              </Text>
            </View>
            <Progress.Bar
              color={appColors?.lightblue}
              progress={0.5}
              width={320}
            />
            <Text
              style={{
                paddingTop: 5,
                color: appColors?.lightWhite,
                fontSize: 12,
                fontWeight: "700",
                paddingBottom: 10,
              }}
            >
              57%
            </Text>
          </View>
        )}
        {!showProgress && (
          <View
            style={{
              backgroundColor:
                colorScheme === "light"
                  ? "red"
                  : colorScheme === "dark"
                  ? appColors?.brown
                  : colorScheme === "justDark"
                  ? "#000000"
                  : "red",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: "4%",
              alignItems: "center",
              height: 64,
            }}
          >
            <View style={{ width: "50%" }}>
              <Text
                style={{
                  color: appColors?.white,
                  fontWeight: "600",
                  fontSize: 15,
                }}
              >
                Contact us
              </Text>
              <Text
                style={{
                  color: appColors?.white,
                  fontWeight: "600",
                  fontSize: 10,
                }}
              >
                v 1.0
              </Text>
            </View>
            <Image source={imagePath?.mail} />
          </View>
        )}
      </View>
    </View>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({});
