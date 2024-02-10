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
import { appColors } from "../../../utils/appColors";
import CommonTextInput from "../../../components/CommonTextInput";
import CommonButton from "../../../components/CommonButton";
import { imagePath } from "../../../utils/imagePath";
// import { PERMISSIONS, requestMultiple } from "react-native-permissions";
import { useAppCommonDataProvider } from "../../../navigation/AppCommonDataProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { LoginAction } from "../../../redux/action/Login";
import { useDispatch, useSelector } from "react-redux";
import CustomMessage from "../../../utils/CustomMessage";
import appleAuth from "@invertase/react-native-apple-authentication";
import { apiPostModule } from "../../../utils/commonFunction";
//SignUpAction;

import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from "react-native-fbsdk-next";
import { fonts } from "../../../utils/fonts";
import AnimationLoader from "../../../utils/AnimationLoader";
import { AppStorage } from "../../helper/asynStorage";
import { SignUpAction } from "../../../redux/action/Signup";
const Login = ({ navigation }) => {
  const { colorScheme } = useAppCommonDataProvider();
  const dispatch = useDispatch();
  const { LoginFetching } = useSelector(
    ({ rootReducer }) => rootReducer?.LoginReducer
  );
  const [loginValue, setLoginValue] = useState({
    email: "doctor@yopmail.com", //"9463826048",
    password: "Awasthi123!@#", //"Admin@1313",
    passwordeye: false,
    passwordFocus: false,
  });
  const [tokenId, setTokenId] = React.useState(null);

  const getTokenId = async () => {
    const token = await AsyncStorage.getItem("token");

    if (token) {
      navigation?.navigate("TabNavigator");
    } else {
      navigation.navigate("Login");
    }
    setTokenId(token);
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //     getTokenId();
  //   });
  // }, []);

  // useEffect(() => {
  //   checkPrimission();
  // }, []);
  //  useEffect(async() => {
  //   const token = await AsyncStorage.getItem('token');
  // }, []);

  // const checkPrimission = async () => {
  //   requestMultiple([
  //     PERMISSIONS.IOS.CAMERA,
  //     PERMISSIONS.IOS.PHOTO_LIBRARY,
  //     PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY,
  //     PERMISSIONS?.IOS?.MICROPHONE,
  //   ]).then((itm) => {
  //     console.log(itm, "<--sadas");
  //   });
  // };

  const loginMethod = async () => {
    // navigation?.navigate("TabNavigator");
    // return;
    const fcmToken = await AppStorage.getFcmToken();
    console.log("fcmToken", fcmToken);
    dispatch({
      type: LoginAction?.types?.start,
      payload: {
        contact: loginValue?.email,
        password: loginValue?.password,
        fcmToken: fcmToken,
        extraData: (loginResponse) => {
          console.log("loginResponse", loginResponse);
          if (loginResponse?.status === 200) {
            if (loginResponse?.data?.status == "success") {
              AsyncStorage.setItem("token", loginResponse?.data?.access_token);
              navigation?.navigate("TabNavigator");
            }
          } else {
            CustomMessage(err?.response?.data?.message?.message, "danger");
          }
        },
        onError: (err) => {
          Alert.alert(err?.response?.data?.message?.message);
          CustomMessage(err?.response?.data?.message?.message, "danger");
        },
      },
    });
    // const fcmToken = await AppStorage.getFcmToken();
    // console.log("fcmToken", fcmToken);
    // const res = await apiPostModule("v11/user/login", {
    //   contact: loginValue?.email,
    //   password: loginValue?.password,
    //   fcmToken: fcmToken,
    // });
    // console.log(res, "<--asdadasda");
    // if (res?.status === "success") {
    //   AsyncStorage.setItem("token", res?.access_token);
    //   navigation?.navigate("TabNavigator");
    // } else {
    //   CustomMessage(res?.message?.message, "danger");
    // }
  };
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
    const fcmToken = await AppStorage.getFcmToken();
    console.log("fcmToken", fcmToken);
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });

      const {
        user: newUser,
        email,
        nonce,
        identityToken,
        realUserStatus /* etc */,
      } = appleAuthRequestResponse;
      dispatch({
        type: LoginAction?.types?.start,
        payload: {
          contact:
            appleAuthRequestResponse?.fullName?.givenName +
            appleAuthRequestResponse?.fullName?.familyName,
          token: appleAuthRequestResponse?.identityToken,
          fcmToken: fcmToken,
          regBy: "Apple",
          extraData: (loginResponse) => {
            console.log("google login", loginResponse);
            if (loginResponse?.status === 200) {
              if (loginResponse?.data?.status == "success") {
                AsyncStorage.setItem(
                  "token",
                  loginResponse?.data?.access_token
                );
                navigation?.navigate("TabNavigator");
              }
            } else {
              CustomMessage(err?.response?.data?.message?.message, "danger");
            }
          },
          onError: (err) => {
            Alert.alert(err?.response?.data?.message?.message);
            CustomMessage(err?.response?.data?.message?.message, "danger");
          },
        },
      });
    } catch (error) {
      if (error.code === appleAuth.Error.CANCELED) {
        // console.warn("User canceled Apple Sign in.");
      } else {
        console.error(error);
      }
    }
  };
  // const onAppleButtonPress = async () => {
  //   try {
  //     // performs login request
  //     const appleAuthRequestResponse = await appleAuth.performRequest({
  //       requestedOperation: appleAuth.Operation.LOGIN,
  //       // Note: it appears putting FULL_NAME first is important, see issue #293
  //       requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
  //     });

  //     // get current authentication state for user
  //     // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
  //     const credentialState = await appleAuth.getCredentialStateForUser(
  //       appleAuthRequestResponse.user
  //     );

  //     // use credentialState response to ensure the user is authenticated
  //     if (credentialState === appleAuth.State.AUTHORIZED) {
  //       // user is authenticated
  //     }
  //   } catch (error) {
  //     if (error.code === appleAuth.Error.CANCELED) {
  //       // console.warn("User canceled Apple Sign in.");
  //     } else {
  //       console.error(error);
  //     }
  //   }
  // };
  const googleSign = async () => {
    //login with google
    const fcmToken = await AppStorage.getFcmToken();
    console.log("fcmToken", fcmToken);
    GoogleSignin.hasPlayServices()
      .then((hasPlayService) => {
        if (hasPlayService) {
          GoogleSignin.signIn()
            .then((userInfo) => {
              console.log(userInfo, "<----userInfo");
              dispatch({
                type: SignUpAction?.types?.start,
                payload: {
                  contact: userInfo?.user?.email,
                  fcmToken: fcmToken,
                  token: userInfo?.user?.token,
                  regBy: "google",
                  extraData: (loginResponse) => {
                    console.log("google login", loginResponse);
                    if (loginResponse?.status === 200) {
                      if (loginResponse?.data?.status == "success") {
                        AsyncStorage.setItem(
                          "token",
                          loginResponse?.data?.access_token
                        );
                        navigation?.navigate("TabNavigator");
                      }
                    } else {
                      CustomMessage(
                        err?.response?.data?.message?.message,
                        "danger"
                      );
                    }
                  },
                  onError: (err) => {
                    CustomMessage(
                      err?.response?.data?.message?.message,
                      "danger"
                    );
                  },
                },
              });
            })
            .catch((e) => {
              console.log("ERROR IS: " + JSON.stringify(e));
            });
        }
      })
      .catch((e) => {
        console.log("ERROR IS: " + JSON.stringify(e));
      });
  };
  // const googleSign = async () => {
  //   await GoogleSignin.hasPlayServices();
  //   const userInfo = await GoogleSignin.signIn();
  //   console.log(userInfo, "<----userInfo");
  // };
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

  return (
    <ScreenWrapper
      statusBarColor={
        colorScheme === "light" ? appColors?.white : appColors?.black
      }
    >
      {LoginFetching ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            // backgroundColor: "gray",
          }}
        >
          <AnimationLoader />
        </View>
      ) : (
        <KeyboardAwareScrollView
          contentContainerStyle={{
            paddingHorizontal: "7%",
            paddingTop: "15%",
            flex: 1,
            backgroundColor:
              colorScheme === "light" ? appColors?.white : appColors?.black,
          }}
        >
          <View style={{}}>
            <Text
              style={{
                fontSize: 33,
                fontFamily: fonts.SF_BoldItalic,
                fontWeight: "500",
                color:
                  colorScheme === "light" ? appColors?.black : appColors?.white,
              }}
            >
              Welcome back
            </Text>
            <Text
              style={{
                lineHeight: 22,
                color: appColors?.gray,
                width: "50%",
                fontFamily: fonts.SF_BoldItalic,
              }}
            >
              Sign in to continue{" "}
            </Text>
            <Text
              style={{
                lineHeight: 22,
                color: appColors?.gray,
                width: "50%",
              }}
            >
              using the app{" "}
            </Text>
          </View>
          <View
            style={{
              marginBottom: 30,
              height: "30%",
              justifyContent: "center",
            }}
          >
            <CommonTextInput
              sucess={/^(?:\d{10}|\w+@\w+\.\w{2,3})$/.test(loginValue?.email)}
              value={loginValue?.email}
              style={{ width: 265 }}
              label={"Email Address / Phone Number"}
              onChangeText={(e) => {
                setLoginValue({ ...loginValue, email: e });
              }}
            />
            <CommonTextInput
              label={"Password"}
              style={{ width: 265 }}
              sucess={/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
                loginValue?.password
              )}
              value={loginValue?.password}
              eyeValue={loginValue?.passwordeye}
              onFocus={() => {
                setLoginValue({ ...loginValue, passwordFocus: true });
              }}
              onBlur={() => {
                setLoginValue({ ...loginValue, passwordFocus: false });
              }}
              passwordFocus={loginValue?.passwordFocus}
              onChangeText={(e) => {
                setLoginValue({ ...loginValue, password: e });
              }}
              onChangeEye={() => {
                setLoginValue({
                  ...loginValue,
                  passwordeye: !loginValue?.passwordeye,
                });
              }}
            />
          </View>
          <View style={{}}>
            {/* <View style={{flexDirection: 'row', justifyContent: 'space-around'}}> */}
            <View style={{ marginTop: 20 }}>
              <CommonButton
                buttonText={"Login"}
                onPress={() => {
                  loginMethod();
                }}
              />
            </View>

            <View style={{ marginTop: 20 }}>
              <Text style={{ color: appColors?.gray }}>
                You can continue signin through
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
          </View>
          <View style={{ marginTop: "5%" }}>
            <Text style={{ color: appColors?.gray }}>Issues in Log in ?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation?.navigate("ForgetPassword");
              }}
            >
              <Text style={{ color: appColors?.orange }}>Forgot Password</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 20 }}>
            <TouchableOpacity
              onPress={() => {
                navigation?.navigate("SignUp");
              }}
            >
              <Text style={{ color: appColors?.orange }}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      )}
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({});
