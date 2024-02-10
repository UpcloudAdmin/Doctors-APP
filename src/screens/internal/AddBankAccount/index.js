import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import React, { useCallback, useRef, useState } from "react";
import ScreenWrapper from "../../../components/ScreenWrapper";
import { appColors } from "../../../utils/appColors";
import PaymentSelector from "../../../components/PaymentSelector";
import CommonHeader from "../../../components/CommonHeader";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CommonTextInput from "../../../components/CommonTextInput";
import SimpleButton from "../../../components/SimpleButton";
import { useAppCommonDataProvider } from "../../../navigation/AppCommonDataProvider";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getAddBankAccountAction } from "../../../redux/action/addBankAccount";
import { connect, useSelector, useDispatch } from "react-redux";
import CustomMessage from "../../../utils/CustomMessage";
import { imagePath } from "../../../utils/imagePath";
import { BlurView } from "@react-native-community/blur";

const AddBankAccount = ({ navigation }) => {
  const { colorScheme } = useAppCommonDataProvider();
  const [accountNumber, setAccountNumber] = useState("");
  const dispatch = useDispatch();

  const routes = useRoute();
  console.log("routes?.params", routes?.params.bankType);
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
  const validateAccountNumber = () => {
    // Regular expression for a 12-digit number
    const accountNumberRegex = /^\d{12}$/;

    if (accountNumberRegex.test(accountNumber)) {
      Alert.alert("Success", "Valid account number!");
    } else {
      Alert.alert(
        "Error",
        "Invalid account number. Please enter a 12-digit number."
      );
    }
  };
  const handleBank = async () => {
    dispatch({
      type: getAddBankAccountAction?.types?.start,
      payload: {
        status: "ACTIVE",
        bank: {
          name: "john doe",
          phone: "9999999999",
          account_number: "026291800001191",
          ifsc: "YESB0000262",
        },
        clinic_id: "16577048262",
        Default: true,

        extraData: (bankAccountinfo) => {
          console.log("bankAccountinfo", bankAccountinfo);
          if (bankAccountinfo?.status === 200) {
            if (bankAccountinfo?.data?.status == "success") {
              CustomMessage(bankAccountinfo?.data?.message, "success");
            }
          } else {
            CustomMessage(err?.response?.data?.message?.message, "danger");
          }
        },
        onError: (err) => {
          console.log("err", err);
        },
      },
    });
    // const response = await apiPostModule("v11/user/doctor/me", data);
    // console.log(response, "<---response");
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
                Add Account
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
            flex: 1,
            width: "100%",
            paddingLeft: 30,
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          <KeyboardAwareScrollView contentContainerStyle={{}}>
            {routes?.params.bankType === "bank" && (
              <View style={{ flex: 1 }}>
                <CommonTextInput
                  label={"Name of Holder"}
                  editable={false}
                  value={bankinfo?.name}
                  onChangeText={(e) => {
                    setBankInfo({ ...bankinfo, name: e });
                  }}
                  style={{ width: "90%", color: appColors?.black }}
                />
                <CommonTextInput
                  label={"Phone Number"}
                  keyboardType={"number-pad"}
                  editable={false}
                  value={bankinfo?.phone}
                  onChangeText={(e) => {
                    setBankInfo({ ...bankinfo, phone: e });
                  }}
                  style={{ width: "90%", color: appColors?.black }}
                />
                <CommonTextInput
                  keyboardType={"number-pad"}
                  maxlength={12}
                  value={bankinfo?.accno}
                  onChangeText={(e) => {
                    setBankInfo({ ...bankinfo, accno: e });
                  }}
                  label={"12 Digit Account No."}
                  style={{ width: "90%" }}
                />
                <CommonTextInput
                  label={"IFSC Code"}
                  value={bankinfo?.ifsc}
                  onChangeText={(e) => {
                    setBankInfo({ ...bankinfo, ifsc: e });
                  }}
                  style={{ width: "90%", color: appColors?.black }}
                />
              </View>
            )}
            {routes?.params.bankType === "upi" && (
              <View>
                <CommonTextInput
                  label={"Name"}
                  value={upiInfo?.name}
                  onChangeText={(e) => {
                    setBankInfo({ ...upiInfo, name: e });
                  }}
                  style={{ width: "90%", color: appColors?.black }}
                />
                <CommonTextInput
                  label={"Phone Number"}
                  keyboardType={"number-pad"}
                  value={upiInfo?.phone}
                  onChangeText={(e) => {
                    setBankInfo({ ...upiInfo, name: phone });
                  }}
                  style={{ width: "90%", color: appColors?.black }}
                />
                <CommonTextInput label={"UPI Id"} style={{ width: "90%" }} />
              </View>
            )}
          </KeyboardAwareScrollView>
        </View>
        {routes?.params.bankType === "bank" && (
          <View style={{ bottom: 50 }}>
            <SimpleButton
              buttonText={"Add Account"}
              width={"80%"}
              backgroundColor={{}}
              onPress={handleBank}
            />
          </View>
        )}
        {routes?.params.bankType === "upi" && (
          <View style={{ bottom: 50 }}>
            <SimpleButton
              buttonText={"Add Account"}
              width={"90%"}
              backgroundColor={{}}
              onPress={validateAccountNumber}
            />
          </View>
        )}
      </View>
    </ScreenWrapper>
  );
};

export default AddBankAccount;

const styles = StyleSheet.create({});
