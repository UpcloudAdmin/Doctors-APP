import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
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
import appleAuth from "@invertase/react-native-apple-authentication";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from "react-native-fbsdk-next";
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
      // dispatch({
      //   type: SignUpAction?.types?.start,
      //   payload: {
      //     contact: signUpValues?.Phone,
      //     firstName: signUpValues?.firstName,
      //     lastName: signUpValues?.lastName,
      //     password: signUpValues?.Password,
      //     confirmPassword: signUpValues?.confirmPassword,
      //     role: "doctor",
      //     regBy: "manual",
      //     extraData: (signupResponse) => {
      //       console.log("signupResponse", signupResponse);
      //       if (signupResponse?.status === 201) {
      //         if (signupResponse?.data?.status == "success") {
      //           navigation?.navigate("Verification", {
      //             contact: signUpValues?.Phone,
      //           });
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
      try {
        const res = await apiPostModule("v11/user/signup", {
          contact: signUpValues?.Phone,
          firstName: signUpValues?.firstName,
          lastName: signUpValues?.lastName,
          password: signUpValues?.Password,
          confirmPassword: signUpValues?.confirmPassword,
          role: "doctor",
          regBy: "manual",
        });
        console.log(res, "<--asdadasda");
        if (res?.status === "success") {
          navigation?.navigate("Verification", {
            contact: signUpValues?.Phone,
          });
        } else {
          CustomMessage(res?.message?.message, "danger");
        }
      } catch (er) {
        console.log(er, "<--sadas");
      }
      console.log(signUpValues, "<---signUpValuessignUpValues");
    }
  };
  const googleSign = async () => {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log(userInfo, "<----userInfo");
    try {
      const res = await apiPostModule("v11/user/signup", {
        token: userInfo?.user?.id,
        firstName: userInfo?.user?.givenName,
        lastName: userInfo?.user?.familyName,
        role: "Doctor",
        regBy: "Google",
        password: "",
        confirmPassword: "",
        contact: "",
      });
      console.log(res, "<--asdadasda google");
      if (res?.status === "success") {
        navigation?.navigate("Verification", {
          contact: signUpValues?.Phone,
        });
      } else {
        CustomMessage(res?.message?.message, "danger");
      }
    } catch (er) {
      console.log(er, "<--sadas");
    }
  };
  const logInWIthFb = useCallback(() => {
    //login with facebook
    LoginManager.logInWithPermissions(["public_profile", "email"]).then(
      function (result) {
        if (result.isCancelled) {
        } else {
          AccessToken.getCurrentAccessToken().then((data) => {
            const accessToken = data.accessToken.toString();
            getInfoFromToken(accessToken);
          });
        }
      },
      function (error) {
        console.log("==> Login fail with error: " + error);
      }
    );
  }, []);

  const getInfoFromToken = useCallback(
    //login with facebook

    async (token) => {
      const role = await AsyncStorage.getItem("roleType");
      const PROFILE_REQUEST_PARAMS = {
        fields: {
          string: "id,name,first_name,last_name,email",
        },
      };
      const profileRequest = new GraphRequest(
        "/me",
        { token, parameters: PROFILE_REQUEST_PARAMS },
        async (error, user) => {
          if (error) {
            console.log("login info has error: " + error);
          } else {
            console.log("login info has user: " + user);
          }
        }
      );
      new GraphRequestManager().addRequest(profileRequest).start();
    },
    []
  );

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "112069212219-vs4uvnguffdtg3mj43opvidg9d1r13dn.apps.googleusercontent.com",

      // "112069212219-vs4uvnguffdtg3mj43opvidg9d1r13dn.apps.googleusercontent.com",
      // "112069212219-tk7odcavp85d9gpiv9kpll6ot055r027.apps.googleusercontent.com",
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, []);
  useEffect(() => {
    // onCredentialRevoked returns a function that will remove the event listener. useEffect will call this function when the component unmounts
    return appleAuth.onCredentialRevoked(async () => {
      console.warn(
        "If this function executes, User Credentials have been Revoked"
      );
    });
  }, []); // passing in an empty array as the second argument ensures this is only ran once when component mounts initially.

  const onAppleButtonPress = async () => {
    try {
      // performs login request
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        // Note: it appears putting FULL_NAME first is important, see issue #293
        requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
      });

      // get current authentication state for user
      // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
      const credentialState = await appleAuth.getCredentialStateForUser(
        appleAuthRequestResponse.user
      );

      // use credentialState response to ensure the user is authenticated
      if (credentialState === appleAuth.State.AUTHORIZED) {
        // user is authenticated
      }
    } catch (error) {
      if (error.code === appleAuth.Error.CANCELED) {
        // console.warn("User canceled Apple Sign in.");
      } else {
        console.error(error);
      }
    }
  };

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
          backgroundColor:
            colorScheme === "light" ? appColors?.white : appColors?.black,
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
              {/* <View
                style={{
                  flexDirection: "row",
                  flex: 0.8,
                  justifyContent: "space-between",
                }}
              >
                <Image source={imagePath?.googleIcon} />
                <Image source={imagePath?.facebookIcon} />
              </View> */}
            </View>
            <Text
              style={{ marginTop: "5%", color: appColors?.gray, fontSize: 15 }}
            >
              Or Sign Up with any of the Providers
            </Text>
            <View
              style={{
                marginTop: "5%",
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: 180,
              }}
            >
              <TouchableOpacity onPress={logInWIthFb}>
                <Image source={imagePath?.facebookIcon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={googleSign}>
                <Image source={imagePath?.googleIcon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onAppleButtonPress()}>
                <View
                  style={{
                    width: 48,
                    height: 44,
                    backgroundColor: "white",
                    borderColor: appColors.gray,
                    borderRadius: 18,
                    borderWidth: 1,
                    alignSelf: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image source={imagePath?.Apple} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 0.1, flexDirection: "row", marginTop: 10 }}>
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
