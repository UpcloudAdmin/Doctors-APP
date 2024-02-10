import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../../../components/ScreenWrapper";
import { appColors } from "../../../utils/appColors";
import CommonHeader from "../../../components/CommonHeader";
import { Switch } from "react-native-paper";
import { useAppCommonDataProvider } from "../../../navigation/AppCommonDataProvider";
import { BlurView } from "@react-native-community/blur";
import { imagePath } from "../../../utils/imagePath";

const ThemeChange = ({ navigation }) => {
  const { colorScheme, setColorScheme } = useAppCommonDataProvider();

  const [isSwitchOnLight, setIsSwitchOnLight] = useState(false);
  const onToggleLightSwitch = () => {
    setIsSwitchOnLight(!isSwitchOnLight);
    setIsSwitchOnDark(false);
    setIsSwitchOnNight(false);
  };

  const [isSwitchOnNight, setIsSwitchOnNight] = useState(false);
  const onToggleNightSwitch = () => {
    setIsSwitchOnDark(false);
    setIsSwitchOnNight(!isSwitchOnNight);
    setIsSwitchOnLight(false);
  };

  const [isSwitchOnDark, setIsSwitchOnDark] = useState(false);
  const onToggleDarkSwitch = () => {
    setIsSwitchOnDark(!isSwitchOnDark);
    setIsSwitchOnLight(false);
    setIsSwitchOnNight(false);
  };

  return (
    <ScreenWrapper
      statusBarColor={
        colorScheme === "light"
          ? appColors?.brown
          : colorScheme === "dark"
          ? appColors?.brown
          : colorScheme === "justDark"
          ? "#000000"
          : appColors?.brown
      }
    >
      <View>
        <View
          style={{
            height: 164,
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
              alignItems: "center",
              marginTop: 5,
              height: 64,
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
                Theme
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "22%",
                marginRight: 30,
              }}
            >
              <Image />
              <Image source={imagePath?.demoProfile} />
            </View>
          </View>

          <BlurView
            blurType="light"
            blurAmount={0.45}
            reducedTransparencyFallbackColor="white"
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: 64,
              marginTop: 32,
            }}
          >
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: appColors?.white,
                  fontWeight: "600",
                  fontSize: 15,
                  marginLeft: 30,
                }}
              >
                Contact us
              </Text>
              <Text
                style={{
                  color: appColors?.white,
                  fontWeight: "400",
                  fontSize: 10,
                  marginLeft: 30,
                }}
              >
                v 1.0
              </Text>
            </View>
            <View style={{ paddingRight: 15 }}>
              <Image
                source={imagePath?.mail}
                style={{
                  tintColor: "white",
                }}
              />
            </View>
          </BlurView>
        </View>
      </View>
      <View
        style={{
          flex: 1,
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
            flex: 1,
            paddingHorizontal: 20,
            backgroundColor:
              colorScheme === "light"
                ? appColors?.white
                : colorScheme === "dark"
                ? appColors?.black
                : colorScheme === "justDark"
                ? appColors?.black
                : appColors?.brown,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 20,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color:
                  colorScheme === "light" ? appColors?.black : appColors?.white,
              }}
            >
              Day Light
            </Text>
            <Switch
              style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
              value={isSwitchOnLight}
              color="black"
              onValueChange={(value) => {
                onToggleLightSwitch();

                if (value) {
                  setColorScheme("light");
                }
              }}
            />
          </View>
          <View
            style={{
              borderBottomColor: appColors?.gray,
              borderBottomWidth: 0.6,
              width: "110%",
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 20,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color:
                  colorScheme === "light" ? appColors?.black : appColors?.white,
              }}
            >
              Dark
            </Text>
            <Switch
              style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
              value={isSwitchOnNight}
              color="black"
              onValueChange={(value) => {
                onToggleNightSwitch();
                setColorScheme("dark");
              }}
            />
          </View>
          <View
            style={{
              borderBottomColor: appColors?.gray,
              borderBottomWidth: 0.6,
              width: "110%",
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 20,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color:
                  colorScheme === "light" ? appColors?.black : appColors?.white,
              }}
            >
              Just Dark
            </Text>
            <Switch
              style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
              value={isSwitchOnDark}
              color="black"
              // onValueChange={onToggleDarkSwitch}
              onValueChange={(value) => {
                onToggleDarkSwitch();
                setColorScheme("justDark");
              }}
            />
          </View>
          <View
            style={{
              borderBottomColor: appColors?.gray,
              borderBottomWidth: 0.6,
              width: "110%",
            }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ThemeChange;

const styles = StyleSheet.create({});

// import React, { useState } from "react";
// import { View, Text, Switch } from "react-native";
// import {
//   Provider as PaperProvider,
//   DarkTheme,
//   DefaultTheme,
// } from "react-native-paper";
// const ThemeChange = () => {
//   const [isDarkMode, setDarkMode] = useState(false);
//   const [isJustDarkMode, setJustDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode((prevMode) => !prevMode);
//     setJustDarkMode(false);
//   };

//   const toggleJustDarkMode = () => {
//     setJustDarkMode((prevMode) => !prevMode);
//     setDarkMode(false);
//   };

//   const getTheme = () => {
//     if (isJustDarkMode) {
//       return {
//         ...DarkTheme,
//         colors: { primary: "black", accent: "gray" },
//       };
//     } else if (isDarkMode) {
//       return DarkTheme;
//     } else {
//       return DefaultTheme;
//     }
//   };

//   return (
//     <PaperProvider theme={getTheme()}>
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text>Toggle Theme</Text>

//         <View style={{ flexDirection: "row", alignItems: "center" }}>
//           <Text>Default Theme</Text>
//           <Switch
//             value={!(isDarkMode || isJustDarkMode)}
//             onValueChange={toggleDarkMode}
//           />
//         </View>

//         <View style={{ flexDirection: "row", alignItems: "center" }}>
//           <Text>Dark Theme</Text>
//           <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
//         </View>

//         <View style={{ flexDirection: "row", alignItems: "center" }}>
//           <Text>Just Dark Theme</Text>
//           <Switch value={isJustDarkMode} onValueChange={toggleJustDarkMode} />
//         </View>
//       </View>
//     </PaperProvider>
//   );
// };

// export default ThemeChange;
