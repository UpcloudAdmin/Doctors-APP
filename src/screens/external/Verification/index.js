import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../../../components/ScreenWrapper";
import { appColors } from "../../../utils/appColors";
import CommonTextInput from "../../../components/CommonTextInput";
import CommonButton from "../../../components/CommonButton";
import OtpInputs from "react-native-otp-inputs";
import { useAppCommonDataProvider } from "../../../navigation/AppCommonDataProvider";
import { apiPostModule } from "../../../utils/commonFunction";
import { useDispatch, useSelector } from "react-redux";
import { verifyContactAction } from "../../../redux/action/VerifyContact";
import CustomMessage from "../../../utils/CustomMessage";

const Verification = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { colorScheme } = useAppCommonDataProvider();
  const [Otp, setOtp] = useState("");
  const verify = async () => {
    try {
      // dispatch({
      //   type: verifyContactAction?.types?.start,
      //   payload: {
      //     contact: route?.params?.contact,
      //     otp: parseInt(Otp),
      //     extraData: (verifyContactResponse) => {
      //       console.log("verifyContactResponse", verifyContactResponse);
      //       if (verifyContactResponse?.status === 200) {
      //         if (verifyContactResponse?.data?.status == "success") {
      //            CustomMessage(verifyContactResponse?.data?.message, "success");
      //         navigation?.navigate("TabNavigator");
      //         }
      //       } else {
      //         CustomMessage(err?.response?.data?.message?.message, "danger");
      //       }
      //     },
      //     onError: (err) => {
      //       //console.log("err", err);
      //       CustomMessage(err?.response?.data?.message?.message, "danger");
      //     },
      //   },
      // });
      const res = await apiPostModule("v11/user/verifycontact", {
        contact: "8054303442",
        otp: parseInt(Otp),
      });
      if (res?.status === "success") {
        navigation?.navigate("Login");
      }
      if (res?.message?.status === "fail") {
        CustomMessage(res?.message?.message, "danger");
      }
      // navigation?.navigate('EnterPhone');
      console.log(res, "<--sdasdas");
    } catch (err) {
      console.log(err, "<--asdasda");
    }
  };

  const requestOtp = async () => {
    console.log(route?.params?.contact, "sdsdsfdsf");
    const res = await apiPostModule("v11/user/requestotp", {
      contact: "8054303442",
    });
    console.log(res, "<---sadas");
  };
  return (
    <ScreenWrapper
      statusBarColor={colorScheme === "light" ? appColors?.white : "black"}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: "7%",
          paddingTop: "15%",
          backgroundColor:
            colorScheme === "light" ? appColors?.white : appColors?.black,
        }}
      >
        <View style={{ flex: 0.25 }}>
          <Text
            style={{
              fontSize: 40,
              color:
                colorScheme === "light" ? appColors?.black : appColors?.white,
            }}
          >
            Verification
          </Text>
          <Text style={{ lineHeight: 22, color: appColors?.gray }}>
            Enter the 6 digit verfication code sent on your mail{" "}
          </Text>
        </View>
        <View style={{ flex: 0.4 }}>
          {/* <CommonTextInput /> */}

          <OtpInputs
            inputContainerStyles={{
              width: 45,
              height: 45,
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: "1.8%",
              borderRadius: 10,
              borderColor:
                colorScheme === "light" ? appColors?.black : appColors?.white,
              borderWidth: 0.5,
            }}
            inputStyles={{
              color:
                colorScheme === "light" ? appColors?.black : appColors?.white,
              width: 45,
              height: 45,
              justifyContent: "center",
              textAlign: "center",
            }}
            keyboardType="phone-pad"
            style={{ flexDirection: "row" }}
            handleChange={(code) => setOtp(code)}
            numberOfInputs={6}
          />
          <TouchableOpacity onPress={requestOtp}>
            <Text style={{ color: appColors?.orange, marginTop: "10%" }}>
              resend
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <CommonButton
            success={Otp.length === 6}
            buttonText={"Verify"}
            onPress={() => {
              verify();
            }}
          />
          <Text style={{ color: appColors?.gray, marginTop: "10%" }}>
            Click to verify and proceed Further
          </Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Verification;

const styles = StyleSheet.create({});
