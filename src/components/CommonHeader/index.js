import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect,useState } from "react";
import { imagePath } from "../../utils/imagePath";
import { appColors } from "../../utils/appColors";
import * as Progress from "react-native-progress";
const CommonHeader = ({ showProgress, text, navigation }) => {
  const [backgroundColor, setBackgroundColor] = useState("#8B7156"); // Default background color

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
      setBackgroundColor("##8B7156"); // Red color
    } else if (
      currentTimeInMinutes >= 12 * 60 &&
      currentTimeInMinutes < 17 * 60 + 30
    ) {
      setBackgroundColor("#8A5D36"); // Blue color
    } else if (
      currentTimeInMinutes >= 5 * 60 &&
      currentTimeInMinutes < 12 * 60
    ) {
      setBackgroundColor("#291E17"); // Green color
    } else if (currentTimeInMinutes >= 5 && currentTimeInMinutes < 12 * 60) {
      setBackgroundColor("#1B1516"); // Yellow color
    } else {
      setBackgroundColor("#8B7156"); // Default color
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: backgroundColor }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 0.6,

            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: "4%",
            backgroundColor: "#8B7156",
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
                style={{ resizeMode: "contain" }}
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
              alignItems: "center",
              flex: 0.3,
              backgroundColor: "#8B7156",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: 320,
                marginBottom: 5,
              }}
            >
              <Text style={{ color: appColors?.loaderColor }}>
                Profile Complete
              </Text>
              <Text style={{ color: appColors?.lightWhite }}>100%</Text>
            </View>
            <Progress.Bar
              color={appColors?.lightblue}
              progress={0.5}
              width={320}
            />
            <Text style={{ paddingTop: 5, color: appColors?.lightWhite }}>
              57%
            </Text>
          </View>
        )}
        {!showProgress && (
          <View
            style={{
              flex: 0.4,
              backgroundColor: "#af977e",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: "6%",
              alignItems: "center",
            }}
          >
            <View style={{ flex: 1 }}>
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
