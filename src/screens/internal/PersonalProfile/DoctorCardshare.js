// App.js

import React, { useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
} from "react-native";
import DoctorCard from "./DoctorCard";
import { captureRef } from "react-native-view-shot";
import Share from "react-native-share";
import { useAppCommonDataProvider } from "../../../navigation/AppCommonDataProvider";
import { appColors } from "../../../utils/appColors";
import { imagePath } from "../../../utils/imagePath";
import { BlurView } from "@react-native-community/blur";
import ScreenWrapper from "../../../components/ScreenWrapper";

const DoctorCardshare = ({ navigation }) => {
  const { colorScheme, setColorScheme } = useAppCommonDataProvider();

  const doctorInfo = {
    name: "Hi!  You can now find me on the WITHME App",
    specialization:
      "Download WITHME app to connect with me & book online appointments, call clinic, stay in touch, keep a digital medical record and so much more!!",
    address: "DOWNLOAD THE APP NOW!",
  };

  const cardRef = useRef();

  const captureCard = async () => {
    try {
      const uri = await captureRef(cardRef, {
        format: "png",
        quality: 0.8,
      });

      shareCard(uri);
    } catch (error) {
      console.error("Error capturing card:", error);
    }
  };

  const shareCard = async (imageUri) => {
    const shareOptions = {
      title: "Share Doctor Card",
      message: "Check out my doctor card!",
      url: imageUri,
      type: "image/png",
    };

    try {
      await Share.open(shareOptions);
    } catch (error) {
      console.error("Error sharing card:", error);
    }
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
            height: 100,
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
                Doctors Card
              </Text>
            </View>
          </View>
        </View>
      </View>
      <DoctorCard ref={cardRef} {...doctorInfo} />

      <TouchableOpacity style={styles.button} onPress={captureCard}>
        <Image
          source={imagePath?.downloadDoc}
          style={{ resizeMode: "contain" }}
        />
      </TouchableOpacity>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  button: {
    paddingTop: 30,
    alignItems: "center",
    alignItems: "center",
  },
 
});

export default DoctorCardshare;
