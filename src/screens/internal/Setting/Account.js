import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../../../components/ScreenWrapper";
import { appColors } from "../../../utils/appColors";
import CommonHeader from "../../../components/CommonHeader";
import { Switch } from "react-native-paper";
import { useAppCommonDataProvider } from "../../../navigation/AppCommonDataProvider";
import { BlurView } from "@react-native-community/blur";
import { imagePath } from "../../../utils/imagePath";
import { TextInput } from "react-native-gesture-handler";


const Account = ({ navigation }) => {
  const { colorScheme, setColorScheme } = useAppCommonDataProvider();

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
                Account
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
          <View style={styles.textView}>
            <View style={{ flexDirection: "row" }}>
              <Image source={imagePath?.accountCall} />
              <TextInput
                style={{
                  marginLeft: 15,
                  fontSize: 16,
                  fontWeight: "600",
                  color:
                    colorScheme === "light"
                      ? appColors?.black
                      : appColors?.white,
                }}
              >
                9087650432
              </TextInput>
            </View>
            <Text style={{ color: "#007AFF", fontSize: 16, fontWeight: "600" }}>
              Edit
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: appColors?.gray,
              borderBottomWidth: 0.6,
              width: "110%",
            }}
          />

          <View style={styles.textView}>
            <View style={{ flexDirection: "row" }}>
              <Image source={imagePath?.accountEmail} />
              <TextInput
                style={{
                  marginLeft: 15,
                  fontSize: 16,
                  fontWeight: "600",
                  color:
                    colorScheme === "light"
                      ? appColors?.black
                      : appColors?.white,
                }}
              >
                helana87@gmail.com
              </TextInput>
            </View>
            <Text style={{ color: "#007AFF", fontSize: 16, fontWeight: "600" }}>
              Edit
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: appColors?.gray,
              borderBottomWidth: 0.6,
              width: "110%",
            }}
          />
          <View style={styles.textView}>
            <View style={{ flexDirection: "row" }}>
              <Image source={imagePath?.accountQR} />
              <Text
                style={{
                  marginLeft: 15,
                  fontSize: 16,
                  fontWeight: "600",
                  color:
                    colorScheme === "light"
                      ? appColors?.black
                      : appColors?.white,
                }}
              >
                QR Code
              </Text>
            </View>
            <Image
              tintColor={
                colorScheme === "light" ? appColors?.black : appColors?.white
              }
              source={imagePath?.chevron}
              style={styles.chevronImage}
            />
          </View>
          <View
            style={{
              borderBottomColor: appColors?.gray,
              borderBottomWidth: 0.6,
              width: "110%",
            }}
          />
          <View style={styles.textView}>
            <View style={{ flexDirection: "row" }}>
              <Image source={imagePath?.accountPassword} />
              <Text
                style={{
                  marginLeft: 15,
                  fontSize: 16,
                  fontWeight: "600",
                  color:
                    colorScheme === "light"
                      ? appColors?.black
                      : appColors?.white,
                }}
              >
                Change Password
              </Text>
            </View>
            <Image
              tintColor={
                colorScheme === "light" ? appColors?.black : appColors?.white
              }
              source={imagePath?.chevron}
              style={styles.chevronImage}
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
              borderBottomColor: appColors?.gray,
              borderBottomWidth: 0.6,
              width: "110%",
            }}
          />
          <View style={styles.textView}>
            <View style={{ flexDirection: "row" }}>
              <Image source={imagePath?.accountLogout} />
              <Text
                style={{
                  marginLeft: 15,
                  fontSize: 16,
                  fontWeight: "600",
                  color:
                    colorScheme === "light"
                      ? appColors?.black
                      : appColors?.white,
                }}
              >
                Log Out
              </Text>
            </View>
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

export default Account;

const styles = StyleSheet.create({
  textView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 12,
    paddingLeft: 12,
    height: 89,
  },
});
