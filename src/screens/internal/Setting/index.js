import { StyleSheet, ScrollView, View } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../../../components/ScreenWrapper";
import { appColors } from "../../../utils/appColors";
import CommonHeader from "../../../components/CommonHeader";
import ProfileBar from "../../../components/ProfileBar";
const SettingScreen = ({ navigation }) => {
  return (
    <ScreenWrapper statusBarColor={appColors?.brown}>
      <View style={{ flex: 1, backgroundColor: appColors?.white }}>
        <View style={{ flex: 1 }}>
          <CommonHeader navigation={navigation} text={"Settings"} />
        </View>
        <View style={{ flex: 6, paddingHorizontal: "4%", paddingTop: 30 }}>
          <ScrollView>
            <ProfileBar
              text={"Account"}
              onPress={() => {
                navigation?.navigate("AddBankAccount");
              }}
            />
            <ProfileBar
              text={"Rate us"}
              onPress={() => {
                navigation?.navigate("WorkingHours");
              }}
            />
            <ProfileBar
              text={"Create Doctor Card"}
              onPress={() => {
                navigation?.navigate("ServicesScreen");
              }}
            />
            <ProfileBar
              text={"Invite friends"}
              onPress={() => {
                navigation?.navigate("VerificationDoc");
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
