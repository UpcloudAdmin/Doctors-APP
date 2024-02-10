import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../../../components/ScreenWrapper";
import { appColors } from "../../../utils/appColors";
import CommonHeader from "../../../components/CommonHeader";
import ProfileBar from "../../../components/ProfileBar";
import { BlurView } from "@react-native-community/blur";

import { useAppCommonDataProvider } from "../../../navigation/AppCommonDataProvider";
import BankProfileBar from "../../../components/ProfileBar/BankProfileBar";
import { imagePath } from "../../../utils/imagePath";
import Share from "react-native-share";

const SettingScreen = ({ navigation }) => {
  const { colorScheme } = useAppCommonDataProvider();
  const downloadPageLink =
    "https://chat.openai.com/c/182c7820-e955-4bb8-bb0f-bac6ebca8566"; // Replace with your actual download page link
  const shareContent = async () => {
    try {
      const options = {
        title: "Share via",
        message: "Check out our app downloads page:",
        url: downloadPageLink,
      };

      await Share.open(options);
    } catch (error) {
      console.error("Error sharing:", error.message);
    }
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
                Settings
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
              {/* <TouchableOpacity
                onPress={() => {
                  navigation?.navigate("SettingScreen");
                }}
              > */}
              <Image />
              {/* </TouchableOpacity> */}
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
      <View style={{ flex: 1, backgroundColor: appColors?.white }}>
        <View
          style={{
            flex: 6,
            paddingHorizontal: "4%",
            // paddingTop: 30,
            backgroundColor:
              colorScheme === "light" ? appColors?.white : appColors?.black,
          }}
        >
          <ScrollView>
            <ProfileBar
              text={"Account"}
              onPress={() => {
                navigation?.navigate("Account");
              }}
            />
            <ProfileBar
              text={"Rate us"}
              onPress={() => {
                navigation?.navigate("ReviewPrompt");
              }}
            />
            <BankProfileBar
              text={"Create Doctor Card"}
              onPress={() => {
                navigation?.navigate("DoctorCardshare");
              }}
            />
            <ProfileBar
              text={"Invite friends"}
              onPress={() => {
                shareContent();
              }}
            />
            <ProfileBar
              text={"Theme"}
              onPress={() => {
                navigation?.navigate("ThemeChange");
              }}
            />
          </ScrollView>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
