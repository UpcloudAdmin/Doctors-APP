import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import ScreenWrapper from "../../../components/ScreenWrapper";
import CommonTextInput from "../../../components/CommonTextInput/index";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { appColors } from "../../../utils/appColors";
import CommonButton from "../../../components/CommonButton";
import Toast from "react-native-toast-message";
import { imagePath } from "../../../utils/imagePath";
import { useAppCommonDataProvider } from "../../../navigation/AppCommonDataProvider";
import { apiPostModule } from "../../../utils/commonFunction";
import { useDispatch, useSelector } from "react-redux";
import { SignUpAction } from "../../../redux/action/Signup";
import CustomMessage from "../../../utils/CustomMessage";
const SignUp = ({ navigation }) => {
  const dispatch = useDispatch();

  const [signUpValues, setSignUpValues] = useState({
    firstName: "",
    lastName: "",
    Phone: "",
    Password: "",
    confirmPassword: "",
    passwordeye: true,
    confirmPasswordeye: true,
    passwordFocus: false,
    confirmPasswordFocus: false,
  });
  const { colorScheme } = useAppCommonDataProvider();

  const signUpProcess = async () => {
    if (
      signUpValues?.firstName?.length >= 2 &&
      signUpValues?.lastName?.length >= 2 &&
      signUpValues?.Password?.length >= 8 &&
      signUpValues?.confirmPassword?.length >= 8
    ) {
      console.log(signUpValues, "<--signUpValuessignUpValues");
      dispatch({
        type: SignUpAction?.types?.start,
        payload: {
          contact: signUpValues?.Phone,
          firstName: signUpValues?.firstName,
          lastName: signUpValues?.lastName,
          password: signUpValues?.Password,
          confirmPassword: signUpValues?.confirmPassword,
          role: "doctor",
          regBy: "manual",
          extraData: (signupResponse) => {
            console.log("signupResponse", signupResponse);
            if (signupResponse?.status === 201) {
              if (signupResponse?.data?.status == "success") {
                navigation?.navigate("Verification", {
                  contact: signUpValues?.Phone,
                });
              }
            } else {
              CustomMessage(err?.response?.data?.message?.message, "danger");
            }
          },
          onError: (err) => {
            //console.log("err", err);
            CustomMessage(err?.response?.data?.message?.message, "danger");
          },
        },
      });
      // try {
      //   const res = await apiPostModule('v11/user/signup', {
      //     contact: signUpValues?.Phone,
      //     firstName: signUpValues?.firstName,
      //     lastName: signUpValues?.lastName,
      //     password: signUpValues?.Password,
      //     confirmPassword: signUpValues?.confirmPassword,
      //     role: 'doctor',
      //     regBy: 'manual',
      //   });
      //   console.log(res, '<--asdadasda');
      //   if (res?.status === 'success') {
      //     navigation?.navigate('Verification', {
      //       contact: signUpValues?.Phone,
      //     });
      //   } else {
      //     Alert.alert('error', res?.message?.message);
      //   }
      // } catch (er) {
      //   console.log(er, '<--sadas');
      // }
      // console.log(signUpValues, '<---signUpValuessignUpValues');
    }
  };
  // useEffect(() => {
  //   GoogleSignin.configure({
  //     scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
  //     webClientId:
  //       '450225937514-2rm222tr3h1monnemth9q5t7klajpinr.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  //     offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  //   });
  // }, []);
  console.log(colorScheme, "<----colorScheme");
  return (
    <ScreenWrapper
      statusBarColor={colorScheme === "light" ? appColors?.white : "black"}
    >
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        enableOnAndroid={true}
        contentContainerStyle={{ paddingBottom: 20 }}
        style={{
          flex: 1,
          paddingHorizontal: "10%",
          paddingTop: 28,
          backgroundColor: colorScheme === "light" ? appColors?.white : "black",
        }}
      >
        <View style={{ margintTop: 10, flex: 0.2 }}>
          <Text
            style={{
              fontSize: 37,
              fontWeight: "500",
              color: colorScheme === "light" ? "black" : "white",
            }}
          >
            Sign Up
          </Text>
          <Text
            style={{
              fontSize: 19,
              fontWeight: "500",
              color: "#C0C0C0",
              marginTop: "4%",
              lineHeight: 22,
            }}
          >
            Sign up to register yourself{"\n"}on this Platfom
          </Text>
        </View>
        <View contentContainerStyle={{ flex: 9 }}>
          <View style={{ flex: 0.78 }}>
            <CommonTextInput
              label="First Name"
              value={signUpValues?.firstName}
              sucess={signUpValues?.firstName?.length >= 3}
              onChangeText={(e) => {
                setSignUpValues({ ...signUpValues, firstName: e });
              }}
            />
            <CommonTextInput
              label="Last Name"
              value={signUpValues?.lastName}
              sucess={signUpValues?.lastName?.length >= 3}
              onChangeText={(e) => {
                setSignUpValues({ ...signUpValues, lastName: e });
              }}
            />
            <CommonTextInput
              label="Email/Phone"
              value={signUpValues?.Phone}
              sucess={/^(?:\d{10}|\w+@\w+\.\w{2,3})$/.test(signUpValues?.Phone)}
              onChangeText={(e) => {
                setSignUpValues({ ...signUpValues, Phone: e });
              }}
            />
            <CommonTextInput
              label="Password"
              value={signUpValues?.Password}
              passwordFocus={signUpValues?.passwordFocus}
              onFocus={() => {
                setSignUpValues({ ...signUpValues, passwordFocus: true });
              }}
              onBlur={() => {
                setSignUpValues({ ...signUpValues, passwordFocus: false });
              }}
              eyeValue={signUpValues?.passwordeye}
              onChangeEye={() => {
                setSignUpValues({
                  ...signUpValues,
                  passwordeye: !signUpValues?.passwordeye,
                });
              }}
              onChangeText={(e) => {
                setSignUpValues({ ...signUpValues, Password: e });
              }}
            />
            <CommonTextInput
              label="Confirm Password"
              value={signUpValues?.confirmPassword}
              passwordFocus={signUpValues?.confirmPasswordFocus}
              onFocus={() => {
                setSignUpValues({
                  ...signUpValues,
                  confirmPasswordFocus: true,
                });
              }}
              onBlur={() => {
                setSignUpValues({
                  ...signUpValues,
                  confirmPasswordFocus: false,
                });
              }}
              eyeValue={signUpValues?.confirmPasswordeye}
              onChangeEye={() => {
                setSignUpValues({
                  ...signUpValues,
                  confirmPasswordeye: !signUpValues?.confirmPasswordeye,
                });
              }}
              onChangeText={(e) => {
                setSignUpValues({ ...signUpValues, confirmPassword: e });
              }}
            />
          </View>
          <View
            style={{
              marginTop: "15%",

              width: "100%",
              flex: 0.2,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <CommonButton
                buttonText={"Sign Up"}
                onPress={() => {
                  signUpProcess();
                  //navigation?.navigate('Verification');
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  flex: 0.8,
                  justifyContent: "space-between",
                }}
              >
                <Image source={imagePath?.googleIcon} />
                <Image source={imagePath?.facebookIcon} />
              </View>
            </View>
            <Text
              style={{ marginTop: "5%", color: appColors?.gray, fontSize: 15 }}
            >
              Or Sign Up with any of the Providers
            </Text>
          </View>
          <View style={{ flex: 0.1, flexDirection: "row" }}>
            <Text style={{ color: appColors?.gray }}>
              If you already have an account ?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation?.navigate("Login");
              }}
            >
              <Text style={{ color: appColors?.orange }}>{" Sign in"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
