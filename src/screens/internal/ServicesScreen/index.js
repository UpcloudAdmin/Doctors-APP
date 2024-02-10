import { StyleSheet, Text, View,TouchableOpacity,Image } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../../../components/ScreenWrapper";
import { appColors } from "../../../utils/appColors";
import CommonHeader from "../../../components/CommonHeader";
import { Switch } from "react-native-switch";
import { useAppCommonDataProvider } from "../../../navigation/AppCommonDataProvider";
import { BlurView } from "@react-native-community/blur";
import { imagePath } from "../../../utils/imagePath";

const ServicesScreen = ({ navigation }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const [isSwitchOnVideoCall, setIsSwitchOnVideoCall] = useState(false);
  const onToggleVideoSwitch = () =>
    setIsSwitchOnVideoCall(!isSwitchOnVideoCall);

  const [isSwitchOnAudioCall, setIsSwitchOnAudioCall] = useState(false);
  const onToggleAudioSwitch = () =>
    setIsSwitchOnAudioCall(!isSwitchOnAudioCall);

  const [isSwitchOnChat, setIsSwitchOnChat] = useState(false);
  const onToggleSwitchChat = () => setIsSwitchOnChat(!isSwitchOnChat);
  const { colorScheme } = useAppCommonDataProvider();

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
                Services
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

          <BlurView
            blurType="light"
            blurAmount={0.45}
            reducedTransparencyFallbackColor="white"
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: 64,
              // opacity: 0.45,
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
            colorScheme === "light" ? appColors?.white : appColors?.black,
        }}
      >
        <View
          style={{
            flex: 0.8,
            backgroundColor:
              colorScheme === "light" ? appColors?.white : appColors?.black,
          }}
        >
          <View style={styles.textBoxColor}>
            <Text
              style={[
                styles.textColor,
                {
                  color:
                    colorScheme === "light"
                      ? appColors?.black
                      : appColors?.white,
                },
              ]}
            >
              In-Clinic Appointments
            </Text>

            <Switch
              value={isSwitchOn}
              onValueChange={onToggleSwitch}
              disabled={false}
              circleSize={30}
              barHeight={30}
              activeText={""}
              inActiveText={""}
              backgroundActive={appColors?.lightBlue}
              backgroundInactive={appColors?.gray}
              circleActiveColor={"white"}
              circleInActiveColor={"white"}
              innerCircleStyle={{
                alignItems: "center",
                justifyContent: "center",
              }}
              renderActiveText={true}
              renderInActiveText={true}
              switchBorderRadius={30}
            />
          </View>
          <View style={styles.boxLine} />
          <View style={styles.textBoxColor}>
            <Text
              style={[
                styles.textColor,
                {
                  color:
                    colorScheme === "light"
                      ? appColors?.black
                      : appColors?.white,
                },
              ]}
            >
              Video Calling
            </Text>

            <Switch
              value={isSwitchOnVideoCall}
              onValueChange={onToggleVideoSwitch}
              disabled={false}
              circleSize={30}
              barHeight={30}
              activeText={""}
              inActiveText={""}
              backgroundActive={appColors?.lightBlue}
              backgroundInactive={appColors?.gray}
              circleActiveColor={"white"}
              circleInActiveColor={"white"}
              innerCircleStyle={{
                alignItems: "center",
                justifyContent: "center",
              }}
              renderActiveText={true}
              renderInActiveText={true}
              switchBorderRadius={30}
            />
          </View>
          <View style={styles.boxLine} />
          <View style={styles.textBoxColor}>
            <Text
              style={[
                styles.textColor,
                {
                  color:
                    colorScheme === "light"
                      ? appColors?.black
                      : appColors?.white,
                },
              ]}
            >
              Audio Calling
            </Text>

            <Switch
              value={isSwitchOnAudioCall}
              onValueChange={onToggleAudioSwitch}
              disabled={false}
              circleSize={30}
              barHeight={30}
              activeText={""}
              inActiveText={""}
              backgroundActive={appColors?.lightBlue}
              backgroundInactive={appColors?.gray}
              circleActiveColor={"white"}
              circleInActiveColor={"white"}
              innerCircleStyle={{
                alignItems: "center",
                justifyContent: "center",
              }}
              renderActiveText={true}
              renderInActiveText={true}
              switchBorderRadius={30}
            />
          </View>
          <View style={styles.boxLine} />
          <View style={styles.textBoxColor}>
            <Text
              style={[
                styles.textColor,
                {
                  color:
                    colorScheme === "light"
                      ? appColors?.black
                      : appColors?.white,
                },
              ]}
            >
              Chat
            </Text>

            <Switch
              value={isSwitchOnChat}
              onValueChange={onToggleSwitchChat}
              disabled={false}
              circleSize={30}
              barHeight={30}
              activeText={""}
              inActiveText={""}
              backgroundActive={appColors?.lightBlue}
              backgroundInactive={appColors?.gray}
              circleActiveColor={"white"}
              circleInActiveColor={"white"}
              innerCircleStyle={{
                alignItems: "center",
                justifyContent: "center",
              }}
              renderActiveText={true}
              renderInActiveText={true}
              switchBorderRadius={30}
            />
          </View>
          <View style={styles.boxLine} />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ServicesScreen;

const styles = StyleSheet.create({
  textBoxColor: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 30,
    height: 89,
  },
  boxLine: {
    borderBottomColor: appColors?.loaderColor,
    borderBottomWidth: 0.6,
    marginLeft: 30,
  },
  textColor: {
    fontSize: 16,
    fontWeight: "600",
    //color: colorScheme === "light" ? appColors?.black : appColors?.white,
  },
  switchBox: { width: 47, height: 27 },
});
