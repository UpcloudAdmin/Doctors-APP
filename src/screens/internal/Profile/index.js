import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import ScreenWrapper from "../../../components/ScreenWrapper";
import { appColors } from "../../../utils/appColors";
import CommonHeader from "../../../components/CommonHeader";
import * as Progress from "react-native-progress";
import ProfileBar from "../../../components/ProfileBar";
import { BlurView } from "@react-native-community/blur";

import { useAppCommonDataProvider } from "../../../navigation/AppCommonDataProvider";
import { imagePath } from "../../../utils/imagePath";
import BottomSheet from "@gorhom/bottom-sheet";
import RBSheet from "react-native-raw-bottom-sheet";
import BankProfileBar from "../../../components/ProfileBar/BankProfileBar";

const Profile = ({ navigation }) => {
  const { colorScheme, setColorScheme } = useAppCommonDataProvider();
  // const userBottomSheetRef = useRef(null);
  const userBottomSheetRef = useRef();

  const [bankType, setBankType] = useState("");
  const [bankinfo, setBankInfo] = useState({
    name: "",
    phone: "",
    accno: "",
    ifsc: "",
  });
  const [upiInfo, setUpiInfo] = useState({
    name: "",
    phone: "",
    upi: "",
  });

  const handleOpenBottomSheet = () => {
    userBottomSheetRef.current.open();
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
              <Text
                style={{
                  fontSize: 28,
                  paddingLeft: 30,
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
            flex: 15,
            paddingHorizontal: "4%",
            paddingTop: 7,
            backgroundColor:
              colorScheme === "light" ? appColors?.white : appColors?.black,
          }}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              backgroundColor:
                colorScheme === "light" ? appColors?.white : appColors?.black,
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
            <BankProfileBar
              bstyle={{ width: 300 }}
              text={"Add Bank Account"}
              onPress={handleOpenBottomSheet}
            />
            <ProfileBar
              text={"Working Hours"}
              workingText={true}
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
            <ProfileBar
              text={"Video Call"}
              onPress={() => {
                navigation?.navigate("VideoCall");
              }}
            />
          </ScrollView>
        </View>
        {/* <BottomSheet index={0} ref={userBottomSheetRef} snapPoints={["50%"]}> */}
        <RBSheet
          ref={userBottomSheetRef}
          closeOnDragDown={true}
          closeOnPressMask={true}
          height={410}
          customStyles={{
            wrapper: {
              backgroundColor: "rgba(0, 0, 0, .8)",
            },
            draggableIcon: {
              backgroundColor:
                colorScheme === "light" ? appColors?.black : "#d5d5d5d5",
              width: 42,
            },
            container: {
              backgroundColor:
                colorScheme === "light" ? appColors?.white : appColors?.black,
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
            },
          }}
        >
          <View
            style={{
              paddingTop: 20,
              paddingLeft: 25,
              paddingRight: 25,
              flex: 1,

              backgroundColor:
                colorScheme === "light" ? appColors?.white : appColors?.black,
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontWeight: "600",
                color:
                  colorScheme === "light" ? appColors?.black : appColors?.white,
              }}
            >
              {"Select\nOption"}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation?.navigate("AddBankAccount", {
                  bankType: "bank",
                });
                userBottomSheetRef?.current?.close();
              }}
              style={{
                borderBottomColor: "green",
                borderBottomWidth: 1,
                paddingVertical: 10,
                flexDirection: "row",
                alignItems: "center",
                height: 105,
              }}
            >
              <Image
                source={imagePath?.handCard}
                style={{
                  height: 55,
                  width: 55,
                  marginRight: 20,
                  marginLeft: 10,
                }}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color:
                    colorScheme === "light"
                      ? appColors?.black
                      : appColors?.white,
                }}
              >
                Proceed with Bank Info
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation?.navigate("AddBankAccount", {
                  bankType: "upi",
                });
                userBottomSheetRef?.current?.close();
              }}
              style={{
                // marginTop: 20,
                borderBottomColor: "#007AFF",
                borderBottomWidth: 1,
                paddingVertical: 10,
                flexDirection: "row",
                alignItems: "center",
                height: 105,
              }}
            >
              <Image
                source={imagePath?.upi}
                style={{
                  height: 55,
                  width: 55,
                  marginRight: 20,
                  marginLeft: 10,
                }}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color:
                    colorScheme === "light"
                      ? appColors?.black
                      : appColors?.white,
                }}
              >
                Proceed Through UPI ID
              </Text>
            </TouchableOpacity>
          </View>
        </RBSheet>
      </View>
    </ScreenWrapper>
  );
};

export default Profile;

const styles = StyleSheet.create({});
