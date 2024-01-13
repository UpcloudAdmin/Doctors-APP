import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Animated,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import ScreenWrapper from "../../../components/ScreenWrapper";
import { appColors } from "../../../utils/appColors";
import { imagePath } from "../../../utils/imagePath";
import ListItems from "./ListItems";
import { useAppCommonDataProvider } from "../../../navigation/AppCommonDataProvider";
import { getDoctorProfileAction } from "../../../redux/action/DoctorProfile";
import CustomMessage from "../../../utils/CustomMessage";
import { connect, useSelector, useDispatch } from "react-redux";
import ActionSheet from "react-native-actions-sheet";
import ImagePicker from "react-native-image-crop-picker";
import { useIsFocused } from "@react-navigation/native";

import { launchImageLibrary, launchCamera } from "react-native-image-picker";
import { fonts } from "../../../utils/fonts";
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation } from "@react-navigation/native";
import { getUserId } from "../../selector/state-selectors";

const DisplayProfile = ({ user_id }) => {
  const dispatch = useDispatch();
  const focus = useIsFocused();

  const navigation = useNavigation();
  const actionSheetRef = React.createRef();
  const { colorScheme } = useAppCommonDataProvider();
  const [uploadImages, setUploadImages] = useState([]);
  var server_images = [];
  const [isFocus, setIsFocus] = useState(false);

  const [value, setValue] = useState("usa");

  const data = [
    { label: "Ashvagandha Ayurvedic Multi - Speciality Clinic", value: "usa" },
    { label: "Ashvagandha Clinic", value: "2" },
  ];

  const [DoctorProfileData, setDoctorProfile] = useState([]);

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

  useEffect(() => {
    ProfileData();
  }, [focus]);

  const ProfileData = () => {
    dispatch({
      type: getDoctorProfileAction?.types?.start,
      payload: {
        id: user_id,
        extraData: (doctorProfileResponse) => {
          console.log("doctorProfileResponse", doctorProfileResponse);
          if (doctorProfileResponse?.status === 200) {
            //  if (doctorProfileResponse?.data?.status == "success") {
            // navigation?.navigate("Login");
            setDoctorProfile(doctorProfileResponse?.data);
            console.log("doctorProfileResponse1", doctorProfileResponse?.data);
            console.log("");
            // }
          } else {
            CustomMessage(err?.response?.data?.message?.message, "danger");
          }
        },
        onError: (err) => {
          console.log("err", err);
          //CustomMessage(err?.response?.data?.message?.message, "danger");
        },
      },
    });
  };
  const [imageUri, setImageUri] = useState(null);

  const handleOpenSheet = () => {
    actionSheetRef.current?.setModalVisible();
  };

  const handleOpenCamera = async () => {
    try {
      const image = await ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      });

      // Set the selected image URI
      setImageUri(image.path);
    } catch (error) {
      console.log("Error opening camera:", error);
    } finally {
      actionSheetRef.current?.setModalVisible(false);
    }
  };

  const handleOpenLibrary = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });

      // Set the selected image URI
      setImageUri(image.path);
    } catch (error) {
      console.log("Error opening library:", error);
    } finally {
      actionSheetRef.current?.setModalVisible(false);
    }
  };

  const openImagepicker = async () => {
    const option = {
      quality: 0.5,
      includeBase64: false,
      selectionLimit: 10,
      mediaType: "photo",
    };

    const response = await launchImageLibrary(option);

    if (response.assets != undefined) {
      setUploadImages(response.assets);
    }

    var form = new FormData();

    for (let i = 0; i < response.assets.length; i++) {
      form.append("images", {
        uri: response.assets[i].uri,
        type: "image/jpg",
        name: "image.jpg",
      });
    }

    callApi(form);
  };
  const DeleteImage = (item, index) => {
    let result = server_images;
    result.splice(index, 1);
    server_images = result;

    setUploadImages((prev) => {
      return prev.filter((items) => items?.fileName !== item?.fileName);
    });
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      onMomentumScrollEnd={() => showTabBar()}
      onMomentumScrollBegin={() => hideTabBar()}
      contentContainerStyle={{
        backgroundColor: colorScheme === "light" ? appColors?.white : "black",
        //height: 2400,
      }}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={handleOpenSheet}
        style={{
         // backgroundColor: "red",
          width: "100%",
          height: 375,
          borderRadius: 25,
        }}
      >
        <Image
          source={imagePath?.docProfile}
          style={{
            width: "100%",
            height: 375,
            resizeMode: "cover",
            borderRadius: 25,
          }}
        />
      </TouchableOpacity>
      <View
        style={{ marginTop: 30, marginHorizontal: 15, flexDirection: "row" }}
      >
        <Text
          style={{
            fontSize: 17,
            fontWeight: "700",
            color:
              colorScheme === "light" ? appColors?.black : appColors?.white,
          }}
        >
          {DoctorProfileData?.cardCollections?.experience}
        </Text>
        <View style={{ marginTop: 17, flexDirection: "row" }}>
          <Image
            source={imagePath?.docProfile}
            style={{ width: 70, height: 70, borderRadius: 5 }}
          />
          <View style={{ marginLeft: 15, justifyContent: "space-between" }}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: "600",
                color:
                  colorScheme === "light" ? appColors?.black : appColors?.white,
              }}
            >
              Dr. {DoctorProfileData?.cardCollections?.doctorName}
            </Text>
            <Text
              style={{
                fontSize: 17,
                fontWeight: "600",
                color:
                  colorScheme === "light" ? appColors?.black : appColors?.white,
              }}
            >
              {DoctorProfileData?.cardCollections?.primarySpeciality}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "700",
                  color:
                    colorScheme === "light"
                      ? appColors?.black
                      : appColors?.white,
                }}
              >
                {DoctorProfileData?.cardCollections?.doctorCity} |
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "400",
                  color:
                    colorScheme === "light"
                      ? appColors?.black
                      : appColors?.white,
                }}
              >
                {DoctorProfileData?.cardCollections?.homeAdrress}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ marginHorizontal: 30 }}>
        <View style={{ flexDirection: "row", marginTop: 25 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "700",
              justifyContent: "center",
              color:
                colorScheme === "light" ? appColors?.black : appColors?.white,
            }}
          >
            Phone no :{" "}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "400",
              justifyContent: "center",
              color:
                colorScheme === "light" ? appColors?.black : appColors?.white,
            }}
          >
            {DoctorProfileData?.phoneNumber}
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "700",
              justifyContent: "center",
              color:
                colorScheme === "light" ? appColors?.black : appColors?.white,
            }}
          >
            Unique id
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "400",
              justifyContent: "center",
              color:
                colorScheme === "light" ? appColors?.black : appColors?.white,
            }}
          >
            {"  9230173019, 9002230341"}
          </Text>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "700",
              color:
                colorScheme === "light" ? appColors?.black : appColors?.white,
            }}
          >
            Activity
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.activityTextColor}>776</Text>
              <Image source={imagePath?.Activitypaper}></Image>
            </View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.activityTextColor}>23</Text>
              <Image source={imagePath?.Activityattach}></Image>
            </View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.activityTextColor}>Yes</Text>
              <Image source={imagePath?.Activitycomputer}></Image>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "600",
              color:
                colorScheme === "light" ? appColors?.black : appColors?.white,
            }}
          >
            Education
          </Text>
          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                textTransform: "capitalize",
                fontSize: 18,
                fontWeight: "700",
                marginTop: 10,
                color:
                  colorScheme === "light" ? appColors?.black : appColors?.white,
              }}
            >
              {DoctorProfileData?.educations?.[0]?.deg}
            </Text>
            <Text
              style={{
                textTransform: "capitalize",
                fontSize: 15,
                fontWeight: "400",
                marginTop: 10,
                color:
                  colorScheme === "light" ? appColors?.black : appColors?.white,
              }}
            >
              {DoctorProfileData?.educations?.[0]?.college}
            </Text>
            <Text
              style={{
                textTransform: "capitalize",
                fontSize: 13,
                fontWeight: "700",
                marginTop: 10,
                color:
                  colorScheme === "light" ? appColors?.black : appColors?.white,
              }}
            >
              {DoctorProfileData?.educations?.[0]?.passingYear}
            </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "700",
                marginTop: 10,
                color:
                  colorScheme === "light" ? appColors?.black : appColors?.white,
              }}
            >
              {" "}
              Diploma in Medicine & Surgery
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "400",
                marginTop: 10,
                color:
                  colorScheme === "light" ? appColors?.black : appColors?.white,
              }}
            >
              {" "}
              Maulana Azad Dental College Bhopal
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "700",
                marginTop: 10,
                color:
                  colorScheme === "light" ? appColors?.black : appColors?.white,
              }}
            >
              {" "}
              2015
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 30,
            flexDirection: "row",
            width: "90%",
          }}
        >
          <View
            style={{
              marginTop: 17,
              flexDirection: "row",
              width: "96%",
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <Image
                source={imagePath?.ChangeClinicfirst}
                style={{ width: 70, height: 70, borderRadius: 5 }}
              />
              <Text>Contacts : </Text>
            </View>

            <View style={{ marginLeft: 15, justifyContent: "space-between" }}>
              <Dropdown
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "Select item" : ""}
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                  setValue(item.value);
                  setIsFocus(false);
                }}
              />

              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "600",
                  color:
                    colorScheme === "light"
                      ? appColors?.black
                      : appColors?.white,
                }}
              >
                {DoctorProfileData?.cardCollections?.primarySpeciality}
              </Text>
              <View style={{ flex: 1, marginTop: 10 }}>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "400",
                    color:
                      colorScheme === "light"
                        ? appColors?.black
                        : appColors?.white,
                  }}
                >
                  0217 - 2311333 , 0217 - 2310111 , 98786754321, 9876787652421
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <TouchableOpacity activeOpacity={1} onPress={openImagepicker}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "600",
                color:
                  colorScheme === "light" ? appColors?.black : appColors?.white,
              }}
            >
              Clinic Photo
            </Text>
          </TouchableOpacity>
          <FlatList
            horizontal={true}
            data={uploadImages}
            renderItem={({ item }) => (
              <View>
                <Image
                  style={{
                    height: 60,
                    width: 60,
                    margin: 2,
                    borderRadius: 6,
                  }}
                  source={{
                    uri: item.uri,
                  }}
                ></Image>

                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => DeleteImage(item)}
                  style={{
                    position: "absolute",
                    right: 10,
                    //backgroundColor: "red",
                  }}
                >
                  <Image
                    style={{
                      height: 20,
                      width: 20,
                    }}
                    source={imagePath?.no}
                  ></Image>
                  {/* <Icon name={"Delete"} size={20} /> */}
                </TouchableOpacity>
              </View>
            )}
          ></FlatList>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              paddingRight: "12%",
              color:
                colorScheme === "light" ? appColors?.black : appColors?.white,
            }}
          >
            Annusaya Nivas, 13, Pali Hill, Bandra (West), Mumbai 400050
          </Text>
          <Image source={imagePath?.map} style={{ resizeMode: "cover" }} />
          <View
            style={{
              flexDirection: "row",
              marginTop: "5%",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
                textAlign: "center",
                color:
                  colorScheme === "light" ? appColors?.black : appColors?.white,
              }}
            >
              Mon - Thur :{" "}
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                fontWeight: "400",
                color:
                  colorScheme === "light" ? appColors?.black : appColors?.white,
              }}
            >
              12:30 - 17:30, 19:00 - 22:30
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: "5%",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
                textAlign: "center",
                color:
                  colorScheme === "light" ? appColors?.black : appColors?.white,
              }}
            >
              Holiday :
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                fontWeight: "400",
                color:
                  colorScheme === "light" ? appColors?.black : appColors?.white,
              }}
            >
              Saturday, Sunday
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <ListItems name={"Services"} data={DoctorProfileData?.services} />
        </View>
        <View style={{ marginTop: 30 }}>
          <ListItems
            name={"Clinical Specialisation"}
            data={DoctorProfileData?.specialities}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <ListItems
            name={"Clinical Issues"}
            data={DoctorProfileData?.clinics?.[0]}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <ListItems
            name={"Membership"}
            data={DoctorProfileData?.memberships}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "600",
              color:
                colorScheme === "light" ? appColors?.black : appColors?.white,
            }}
          >
            About
          </Text>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "400",
                lineHeight: 18,
                color:
                  colorScheme === "light" ? appColors?.black : appColors?.white,
              }}
            >
              {DoctorProfileData?.about}
            </Text>
          </View>
          <View
            style={{
              marginTop: 30,
              flex: 1,
              height: 60,
              flexDirection: "row",
            }}
          >
            <Image
              source={imagePath?.ActivitySupported}
              style={{
                resizeMode: "cover",
                width: 40,
                height: 40,
              }}
            />
            <View style={{ flexDirection: "column", marginLeft: 20 }}>
              <Text
                style={{
                  fontSize: 12.21,
                  fontWeight: 400,
                  color: appColors.gray,
                }}
              >
                Supported by
              </Text>
              <Text
                style={{
                  fontSize: 14.21,
                  fontWeight: 600,
                  color:
                    colorScheme === "light"
                      ? appColors?.black
                      : appColors.white,
                }}
              >
                With Me
              </Text>
            </View>
          </View>
        </View>
        <ActionSheet ref={actionSheetRef}>
          <View style={{ padding: 16 }}>
            <Button title="Open Camera" onPress={handleOpenCamera} />
            <Button title="Open Library" onPress={handleOpenLibrary} />
          </View>
        </ActionSheet>

        {imageUri && (
          <Image
            source={{ uri: imageUri }}
            style={{ width: 200, height: 200, marginTop: 20 }}
          />
        )}
      </View>
    </ScrollView>

    // </ScreenWrapper>
  );
};

export default connect(
  (state) => ({
    user_id: getUserId(state),
  }),
  (dispatch) => ({})
)(DisplayProfile);
// export default DisplayProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors?.white,
  },
  activityTextColor: {
    fontSize: 26,
    fontWeight: 500,
    color: appColors.pink,
    fontFamily: fonts.SF_Black,
  },
  dropdown: {
    height: 50,
    // borderColor: "gray",
    // borderWidth: 0.5,
    // borderRadius: 8,
    // paddingHorizontal: 8,
    width: "100%",
  },
  scrollView: {
    flex: 1,
  },
  tabBar: {
    height: 50,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    padding: 20,
    fontSize: 18,
  },
});
