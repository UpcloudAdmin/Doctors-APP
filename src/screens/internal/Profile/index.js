import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import ScreenWrapper from "../../../components/ScreenWrapper";
import { appColors } from "../../../utils/appColors";
import CommonHeader from "../../../components/CommonHeader";
import * as Progress from "react-native-progress";
import ProfileBar from "../../../components/ProfileBar";
import { useAppCommonDataProvider } from "../../../navigation/AppCommonDataProvider";
import { imagePath } from "../../../utils/imagePath";
const Profile = ({ navigation }) => {
  const { colorScheme } = useAppCommonDataProvider();

  const hideTabBar = () => {
    navigation.setOptions({
      tabBarStyle: { display: "none" },
    });
  };

  const showTabBar = () => {
    navigation.setOptions({
      tabBarStyle: {
        display: "flex",
        borderColor: "#DBDBDB",
        height: 88,
        paddingTop: 16,
      },
    });
  };

  useEffect(() => hideTabBar(), []);
  return (
    <ScreenWrapper statusBarColor="#8B7156">
      <View
        style={{
          flex: 1,
          backgroundColor: colorScheme === "light" ? appColors?.white : "black",
        }}
      >
        <View style={{ flex: 2.5 }}>
          {/* <CommonHeader text={'Profile'} /> */}
          <View style={{ flex: 1, backgroundColor: "#8B7156" }}>
            <View style={{ flex: 1 }}>
              <View
                style={{
                  flex: 1,

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
                  {/* <TouchableOpacity
                    onPress={() => {
                      navigation?.goBack();
                    }}
                  >
                    <Image
                      source={imagePath?.back}
                      style={{ resizeMode: "contain" }}
                    />
                  </TouchableOpacity> */}
                  <Text
                    style={{
                      fontSize: 28,
                      color: appColors?.white,
                      fontWeight: "600",
                    }}
                  >
                    Profile
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
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: "#af977e",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: "6%",
                alignItems: "center",
              }}
            >
              <View style={{ flex:1 }}>
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
          </View>
        </View>
        <View style={{ flex: 15, paddingHorizontal: "4%", paddingTop: 30 }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            onMomentumScrollEnd={() => showTabBar()}
            onMomentumScrollBegin={() => hideTabBar()}
            contentContainerStyle={{
              backgroundColor:
                colorScheme === "light" ? appColors?.white : "black",
              //height: 2400,
            }}
          >
            <ProfileBar
              progress={true}
              text={"Personal Profile"}
              onPress={() => {
                navigation?.navigate("PersonalProfile");
              }}
            />
            <ProfileBar
              progress={true}
              text={"Clinic Profile"}
              onPress={() => {
                navigation?.navigate("ClinicProfile");
              }}
            />
            <ProfileBar
              text={"Add Bank Account"}
              onPress={() => {
                navigation?.navigate("AddBankAccount");
              }}
            />
            <ProfileBar
              text={"Working Hours"}
              onPress={() => {
                navigation?.navigate("WorkingHours");
              }}
            />
            <ProfileBar
              text={"Services"}
              onPress={() => {
                navigation?.navigate("ServicesScreen");
              }}
            />
            <ProfileBar
              text={"Verification"}
              onPress={() => {
                navigation?.navigate("VerificationDoc");
              }}
            />
            {/* <ProfileBar
              text={"Video Call"}
              onPress={() => {
                navigation?.navigate("VideoCall");
              }}
            /> */}
          </ScrollView>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Profile;

const styles = StyleSheet.create({});
