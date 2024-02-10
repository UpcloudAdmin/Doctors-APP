import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import {appColors} from '../../../utils/appColors';
import CommonHeader from '../../../components/CommonHeader';
import * as ImagePicker from 'react-native-image-picker';
import { useAppCommonDataProvider } from "../../../navigation/AppCommonDataProvider";
import { imagePath } from '../../../utils/imagePath';
import { BlurView } from "@react-native-community/blur";

const VerificationDoc = ({navigation}) => {
      const { colorScheme } = useAppCommonDataProvider();

  console.log(ImagePicker, '<---ImagePicker');
  const [filePath, setFilePath] = useState({});
  const chooseFile = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = {
        //   uri: 'data:image/jpeg;base64,' + response.data
        // };
        setFilePath(source);
      }
    });
  };
  return (
    <ScreenWrapper statusBarColor={appColors?.brown}>
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
                Verification
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
        {/* <View style={{ flex: 0.2 }}>
          <CommonHeader navigation={navigation} text={"Verification"} />
        </View> */}
        <View
          style={{
            flex: 0.8,
            backgroundColor:
              colorScheme === "light" ? appColors?.white : appColors?.black,
          }}
        >
          <ScrollView
            contentContainerStyle={{
              marginTop: "7%",
              paddingBottom: 20,
            }}
          >
            <View
              style={{
                paddingHorizontal: 20,
                borderBottomColor: appColors?.gray,
                borderBottomWidth: 0.6,
              }}
            >
              <Text
                style={{
                  paddingVertical: "5%",
                  fontSize: 16,
                  fontWeight: "600",
                  color:
                    colorScheme === "light"
                      ? appColors?.black
                      : appColors?.white,
                }}
              >
                Dr. Ridhwik Submit Your Photo ID
              </Text>
              <Text
                style={{
                  fontWeight: "500",
                  lineHeight: 16,
                  marginBottom: 5,
                  color:
                    colorScheme === "light"
                      ? appColors?.black
                      : appColors?.white,
                }}
              >
                For verification as well as for your patients to see. Documents
                Accepted - Passport, AadhaarUID, Pan card, Election commission
                card,Ration card with photo
              </Text>
              <View style={{ paddingVertical: 10 }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "600",
                    color: appColors?.green,
                  }}
                >
                  Aadhar Verified
                </Text>
              </View>
            </View>
            <View
              style={{
                paddingHorizontal: 20,
                borderBottomColor: appColors?.gray,
                borderBottomWidth: 0.6,
              }}
            >
              <Text
                style={{
                  paddingVertical: "5%",
                  fontSize: 16,
                  fontWeight: "600",
                  color:
                    colorScheme === "light"
                      ? appColors?.black
                      : appColors?.white,
                }}
              >
                Your Dr. Registration Document.
              </Text>
              <Text
                style={{
                  fontWeight: "500",
                  lineHeight: 16,
                  marginBottom: 5,
                  color:
                    colorScheme === "light"
                      ? appColors?.black
                      : appColors?.white,
                }}
              >
                To verify that you are currently a registered healthcare
                practitioner.
              </Text>
              <View style={{ paddingVertical: 10, flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "600",
                    color: "#4A90E2",
                  }}
                >
                  {"Add \nmore"}
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      color:
                        colorScheme === "light"
                          ? appColors?.black
                          : appColors?.white,
                    }}
                  >
                    Picker
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                paddingHorizontal: 20,
                borderBottomColor: appColors?.gray,
                borderBottomWidth: 0.6,
              }}
            >
              <Text
                style={{
                  paddingVertical: "5%",
                  fontSize: 16,
                  fontWeight: "600",
                  color:
                    colorScheme === "light"
                      ? appColors?.black
                      : appColors?.white,
                }}
              >
                Your Clinic Ownership Document
              </Text>
              <Text
                style={{
                  fontWeight: "500",
                  lineHeight: 16,
                  marginBottom: 5,
                  color:
                    colorScheme === "light"
                      ? appColors?.black
                      : appColors?.white,
                }}
              >
                To confirm that the clinic that you work in is registered as
                well. Document accepted - Clinic letterhead/ Prescription pad
                with details suggesting that you are the owner of the clinic,
                Clinic Registration proof, Document for waste disposal, Sales
                tax receipt for clinic.
              </Text>
              <View style={{ paddingVertical: 10, flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "600",
                    color: "#4A90E2",
                  }}
                >
                  {"Add \nmore"}
                </Text>
                <TouchableOpacity onPress={chooseFile}>
                  <Text
                    style={{
                      color:
                        colorScheme === "light"
                          ? appColors?.black
                          : appColors?.white,
                    }}
                  >
                    {" "}
                    Picker
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ marginVertical: "20%" }}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  lineHeight: 18,
                  fontWeight: "300",
                  paddingHorizontal: 70,
                  color: appColors?.gray,
                }}
              >
                The Company Shall Verify The Documents & Pass If With A Verified
                Tag.
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default VerificationDoc;

const styles = StyleSheet.create({});
