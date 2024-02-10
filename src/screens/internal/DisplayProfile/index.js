import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
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
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
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
  const [uploadImages, setUploadImages] = useState([5]);
  var server_images = [];
  const [isFocus, setIsFocus] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const [imageClinic, setImageClinic] = useState(null);
  const [value, setValue] = useState("usa");
  const screen = Dimensions.get("window");
  const ASPECT_RATIO = screen.width / screen.height;
  const LATITUDE_DELTA = 0.04;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  const SCREEN_WIDTH = Dimensions.get("window").width;
  const data = [
    { label: "Ashvagandha Ayurvedic Multi - Speciality Clinic", value: "usa" },
    { label: "Ashvagandha Clinic", value: "2" },
  ];

  const [DoctorProfileData, setDoctorProfile] = useState([]);
  const [maximumHeight, setMaximumHeight] = useState();

  const hideTabBar = (event) => {};

  const showTabBar = () => {
    // navigation.setOptions({
    //   tabBarStyle: {
    //     position: "absolute",
    //     bottom: 0,
    //     left: 0,
    //     width: SCREEN_WIDTH,
    //   },
    // });
  };

  useEffect(() => hideTabBar(), [focus]);

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

  const handleOpenSheet = () => {
    // actionSheetRef.current?.setModalVisible();
    actionSheetRef.current?.setModalVisible(true);
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
      console.log("image.path", image.path);
      setImageUri(image.path);
      actionSheetRef.current?.setModalVisible(false);
    } catch (error) {
      console.log("Error opening library:", error);
    } finally {
      actionSheetRef.current?.setModalVisible(false);
    }
  };
  const handleOpenLibraryClinic = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });

      // Set the selected image URI
      console.log("image.path", image.path);
      setImageClinic(image.path);
    } catch (error) {
      console.log("Error opening library:", error);
    } finally {
    }
  };
  const openImagepicker = async () => {
    const option = {
      quality: 0.5,
      includeBase64: false,
      selectionLimit: 5,
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

  function onScroll(event) {
    console.log("event", event.nativeEvent.contentOffset.y);
    const position = event.nativeEvent.contentOffset.y;
    if (position < 0) {
      setMaximumHeight(0);
    }
    setMaximumHeight((prev) => Math.max(prev, position));

    if (position < maximumHeight) {
      navigation.setOptions({
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          width: SCREEN_WIDTH,
        },
      });
    } else {
      navigation.setOptions({
        tabBarStyle: { display: "none" },
      });
    }
  }
  return (
    <ScrollView
      onScroll={onScroll}
      showsVerticalScrollIndicator={false}
      onMomentumScrollEnd={() => showTabBar()}
      onMomentumScrollBegin={() => hideTabBar()}
      contentContainerStyle={{
        backgroundColor:
          colorScheme === "light" ? appColors?.white : appColors?.black,
        //height: 2400,
      }}
    >
      <TouchableOpacity activeOpacity={1} onPress={handleOpenSheet}>
        <View
          style={{
            width: "100%",
            height: 375,
            resizeMode: "cover",
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <Image
            style={{
              width: "100%",
              height: 375,
              resizeMode: "cover",
              borderBottomLeftRadius: 25,
              borderBottomRightRadius: 25,
            }}
            //source={imagePath?.docProfile}
            source={
              imageUri
                ? {
                    uri: imageUri,
                  }
                : imagePath?.docProfile
            }
          />
        </View>
      </TouchableOpacity>
      <View
        style={{ marginTop: 18, marginHorizontal: 15, flexDirection: "row" }}
      >
        <Text
          style={{
            fontSize: 17,
            fontWeight: "700",
            marginTop: 7,
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
                fontWeight: "400",
                fontFamily: fonts.SF_Black,
                color:
                  colorScheme === "light" ? appColors?.black : appColors?.white,
              }}
            >
              Dr.
              <Text>{DoctorProfileData?.cardCollections?.doctorName}</Text>
            </Text>
            <Text
              style={{
                fontSize: 15,
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
                {DoctorProfileData?.cardCollections?.doctorCity}
              </Text>
              <Text> | </Text>
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
      <View style={{ marginHorizontal: 26 }}>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "700",
              justifyContent: "center",
              color:
                colorScheme === "light"
                  ? appColors?.black
                  : appColors?.loaderColor,
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
                colorScheme === "light"
                  ? appColors?.black
                  : appColors?.loaderColor,
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
                marginTop: 25,
                marginLeft: 27,
              }}
            >
              <Text style={styles.activityTextColor}>776</Text>
              <Image
                style={{ marginTop: 18 }}
                source={imagePath?.Activitypaper}
              ></Image>
            </View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                marginTop: 25,
              }}
            >
              <Text style={styles.activityTextColor}>23</Text>
              <Image
                style={{ marginTop: 18 }}
                source={imagePath?.Activityattach}
              ></Image>
            </View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                marginTop: 25,
                marginRight: 27,
              }}
            >
              <Text style={styles.activityTextColor}>Yes</Text>
              <Image
                style={{ marginTop: 18 }}
                source={imagePath?.Activitycomputer}
              ></Image>
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
          <View style={{ marginTop: 20 }}>
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
                fontSize: 16,
                fontWeight: "400",
                marginTop: 10,
                color:
                  colorScheme === "light"
                    ? appColors?.black
                    : appColors?.loaderColor,
              }}
            >
              {DoctorProfileData?.educations?.[0]?.college}
            </Text>
            <Text
              style={{
                textTransform: "capitalize",
                fontSize: 15,
                fontWeight: "700",
                marginTop: 7,
                color:
                  colorScheme === "light"
                    ? appColors?.black
                    : appColors?.loaderColor,
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
            flexDirection: "column",
            width: "100%",
          }}
        >
          <View
            style={{
              marginTop: 17,
              flexDirection: "row",
              width: "85%",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={handleOpenLibraryClinic}
              >
                <View
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 5,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                  }}
                >
                  <Image
                    source={
                      imageClinic
                        ? {
                            uri: imageClinic,
                          }
                        : imagePath?.ChangeClinicfirst
                    }
                    style={{ width: 70, height: 70, borderRadius: 5 }}
                  />
                </View>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: "column",
                  width: "90%",
                  marginLeft: 20,
                }}
              >
                <Dropdown
                  style={{
                    width: "80%",
                  }}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={{
                    color:
                      colorScheme === "light"
                        ? appColors?.black
                        : appColors?.white,
                  }}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  iconColor={"red"}
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
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
                color:
                  colorScheme === "light"
                    ? appColors?.black
                    : appColors?.loaderColor,
              }}
            >
              Contacts :{" "}
            </Text>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  marginTop: 20,
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
        <View style={{ marginTop: 30 }}>
          <TouchableOpacity activeOpacity={1} onPress={openImagepicker}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "700",
                color:
                  colorScheme === "light" ? appColors?.black : appColors?.white,
              }}
            >
              Clinic Photo
            </Text>
          </TouchableOpacity>
          <View style={{ marginTop: 30 }}>
            <FlatList
              horizontal={true}
              data={uploadImages}
              renderItem={({ item }) => (
                <View style={{ flex: 1 }}>
                  <Image
                    style={{
                      height: 45,
                      width: 45,
                      margin: 12,
                      borderRadius: 8,
                    }}
                    source={
                      item.uri
                        ? {
                            uri: item.uri,
                          }
                        : imagePath?.docProfile
                    }
                  />

                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => DeleteImage(item)}
                    style={{
                      position: "absolute",
                      right: 3,
                    }}
                  >
                    <Image
                      style={{
                        height: 20,
                        width: 20,
                      }}
                      source={imagePath?.no}
                    ></Image>
                  </TouchableOpacity>
                </View>
              )}
            ></FlatList>
          </View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              marginTop: 20,
              paddingRight: "12%",
              color:
                colorScheme === "light"
                  ? appColors?.black
                  : appColors?.loaderColor,
            }}
          >
            Annusaya Nivas, 13, Pali Hill, Bandra (West), Mumbai 400050
          </Text>
          {/* <Image
            source={imagePath?.map}
            style={{
              resizeMode: "cover",
              marginTop: 15,
              paddingRight: 25,
              paddingLeft: 25,
            }}
          /> */}
          <View
            style={{
              marginTop: 15,
              paddingRight: 25,
              height: 200,
              width: 350,
            }}
          >
            {/* {!!item && ( */}
            <MapView
              provider={PROVIDER_GOOGLE}
              style={{
                height: 200,
                width: 350,
              }}
              initialRegion={{
                latitude: 26.7922,
                longitude: 82.1998,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }}
            >
              <Marker
                coordinate={{
                  latitude: 26.7922,
                  longitude: 82.1998,
                }}
                pinColor={"red"}
              >
                <Image
                  source={imagePath?.ActivitySupported}
                  style={{
                    resizeMode: "cover",
                    width: 20,
                    height: 20,
                  }}
                />
              </Marker>
            </MapView>
            {/* )} */}
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 15,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
                textAlign: "center",
                color:
                  colorScheme === "light"
                    ? appColors?.black
                    : appColors?.loaderColor,
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
              marginTop: 10,
            }}
          >
            <Image source={imagePath?.holidayicon}></Image>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
                textAlign: "center",
                color:
                  colorScheme === "light"
                    ? appColors?.black
                    : appColors?.loaderColor,
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
          <ListItems
            name={"Clinic Services"}
            data={DoctorProfileData?.services}
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <ListItems
            name={"Clinic Issues"}
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
              fontWeight: "700",
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
                marginTop: 20,
                color:
                  colorScheme === "light"
                    ? appColors?.black
                    : appColors?.loaderColor,
              }}
            >
              {DoctorProfileData?.about}
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: appColors?.listcolor,
              borderBottomWidth: 0.7,
              marginTop: 10,
            }}
          ></View>
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
                width: 50,
                height: 50,
              }}
            />
            <View style={{ flexDirection: "column", marginLeft: 20 }}>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "400",
                  marginTop: 10,
                  color: appColors.loaderColor,
                }}
              >
                Supported by
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "700",
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
    fontWeight: "500",
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
  iconStyle: {
    width: 40,
    height: 20,
  },
});
