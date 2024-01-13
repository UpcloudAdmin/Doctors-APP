import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../../../components/ScreenWrapper";
import { appColors } from "../../../utils/appColors";
import CommonHeader from "../../../components/CommonHeader";
import { Switch } from "react-native-paper";
const ThemeChange = ({ navigation }) => {
  const [isSwitchOnLight, setIsSwitchOnLight] = useState(false);
  const onToggleLightSwitch = () => setIsSwitchOnLight(!isSwitchOnLight);

   const [isSwitchOnNight, setIsSwitchOnNight,] = useState(false);
   const onToggleNightSwitch = () => setIsSwitchOnNight(!isSwitchOnNight);

    const [isSwitchOnDark, setIsSwitchOnDark] = useState(false);
    const onToggleDarkSwitch = () => setIsSwitchOnDark(!isSwitchOnDark);

  return (
    <ScreenWrapper statusBarColor={appColors?.brown}>
      <View style={{ flex: 1, backgroundColor: appColors?.white }}>
        <View style={{ flex: 0.2 }}>
          <CommonHeader navigation={navigation} text={"Theme"} />
        </View>
        <View style={{ flex: 0.8, paddingHorizontal: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 20,
              alignItems: "center",
              borderBottomColor: appColors?.gray,
              borderBottomWidth: 0.6,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: appColors?.black,
              }}
            >
              Day Light
            </Text>
            <Switch
              style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
              value={isSwitchOnLight}
              color="black"
              onValueChange={onToggleLightSwitch}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 20,
              alignItems: "center",
              borderBottomColor: appColors?.gray,
              borderBottomWidth: 0.6,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: appColors?.black,
              }}
            >
              Day Night
            </Text>
            <Switch
              style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
              value={isSwitchOnNight}
              color="black"
              onValueChange={onToggleNightSwitch}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 20,
              alignItems: "center",
              borderBottomColor: appColors?.gray,
              borderBottomWidth: 0.6,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: appColors?.black,
              }}
            >
              Dark
            </Text>
            <Switch
              style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
              value={isSwitchOnDark}
              color="black"
              onValueChange={onToggleDarkSwitch}
            />
          </View>
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
