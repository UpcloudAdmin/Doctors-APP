import { ScrollView, StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import ScreenWrapper from "../../../components/ScreenWrapper";
import { appColors } from "../../../utils/appColors";
import CommonHeader from "../../../components/CommonHeader";
import CommonInputBox from "../../../components/CommonInputBox";
import GenderSelectionModal from "./GenderSelectionModal";
import { useAppCommonDataProvider } from "../../../navigation/AppCommonDataProvider";
import DatePicker from "react-native-date-picker";
import moment from "moment";
import { apiGetModule, apiPostModule } from "../../../utils/commonFunction";
import RightButton from "../../../components/RightButton/RightButton";
import CommonButton from "../../../components/CommonButton";
import CustomMessage from "../../../utils/CustomMessage";
import { connect, useSelector, useDispatch } from "react-redux";
import Modal from "react-native-modal";
import AnotherContact from "./AnotherContact";
import AnotherContactList from "./AnotherContactList";
import { DoctorProfileMeAction } from "../../../redux/action/doctorProfileMe";
var contactList = [];
const PersonalProfile = ({ navigation }) => {
  const { colorScheme, special, college, memberShip } =
    useAppCommonDataProvider();
  console.log(special, "<---sdasdasda");
  const [selectedGender, setSelectedGender] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#8B7156"); // Default background color
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    degree: "",
    speciality: [],
  });
  const [dateVisible, setDateVisible] = useState(false);
  const [profileData, setProfileDate] = useState({
    email: "",
    dob: new Date(),
    address: "",
    personalContactNumber: "",
    gender: "",
    degree: "",
    specility: "",
    name: "",
    experience: "",
  });
  const handleGenderSelect = (gender) => {
    setProfileDate({ ...profileData, gender: profileData });
    setSelectedGender(gender);
    setModalVisible(false);
    // onGenderSelected(gender);
  };
  // Use useEffect to update the background color when the component mounts and every minute thereafter
  useEffect(() => {
    updateBackgroundColor();
    // Update background color every minute
    const interval = setInterval(() => {
      updateBackgroundColor();
    }, 60000); // 60000 milliseconds = 1 minute

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  const updateBackgroundColor = () => {
    const currentHour = new Date().getHours();
    const currentMinutes = new Date().getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinutes;
    console.log(
      "currentHour",
      currentHour,
      currentMinutes,
      currentTimeInMinutes
    );
    if (
      (currentTimeInMinutes >= 20 * 60 + 30 && currentTimeInMinutes < 5 * 60) ||
      (currentTimeInMinutes >= 17 * 60 + 31 &&
        currentTimeInMinutes < 20 * 60 + 30)
    ) {
      setBackgroundColor("##8B7156"); // Red color
    } else if (
      currentTimeInMinutes >= 12 * 60 &&
      currentTimeInMinutes < 17 * 60 + 30
    ) {
      setBackgroundColor("#8A5D36"); // Blue color
    } else if (
      currentTimeInMinutes >= 5 * 60 &&
      currentTimeInMinutes < 12 * 60
    ) {
      setBackgroundColor("#291E17"); // Green color
    } else if (currentTimeInMinutes >= 5 && currentTimeInMinutes < 12 * 60) {
      setBackgroundColor("#1B1516"); // Yellow color
    } else {
      setBackgroundColor("#8B7156"); // Default color
    }
  };
  const handleProfile = async () => {
    dispatch({
      type: DoctorProfileMeAction?.types?.start,
      payload: {
        name: "profileData?.name",
        primarySpeciality: "Opthalmologist",
        city: "asd",
        homeAddress: "R.T. Road, Naya Bazaar",
        experience: 33,
        primarySpeciality: "Opthalmologist",
        lat: 22.76861,
        lon: 6542,
        dob: moment("06-11-1970")?.format("DD-MM-YYYY"),
        state: "Jharkhand",
        locality: "Jugsalai",
        pincode: 831006,
        gender: "male",
        phoneNumber: "9876567876", //profileData?.personalContactNumber,
        membership: [
          "All India Straubismological Society",
          "Am Charitable Trust",
          "Am Charitable Trust",
        ], //memberShip,
        stream: "eye",
        registration:["ORTHOPEDIST", "h"],
        specialities: ["ORTHOPEDIST", "GYNAECOLOGIST"], //special,
        services: [],
        education: [
          {
            deg: "college?.deg",
            college: "college?.college",
            passingYear: 1990,//"college?.passingYear",
          },
        ],
        about:
          "I am an eye doctor. I have a lot of experience in treating people's eyes.",

        extraData: (doctorProfileMe) => {
          console.log("doctorProfileMe", doctorProfileMe);
          if (doctorProfileMe?.status === 200) {
            if (doctorProfileMe?.data?.status == "success") {
              // navigation?.navigate("Login");
               CustomMessage(
                 doctorProfileMe?.data?.message,
                 "success"
               );
            }
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
    // const response = await apiPostModule("v11/user/doctor/me", data);
    // console.log(response, "<---response");
  };
  const onFocus = () => {
    setModalVisible(true);
    console.log("onFocus");
  };
  console.log(special, "<----specialspecialspecial", college);
  console.log(profileData, "<--asdasdsdsa");

  useEffect(() => {
    nikaloContact();
  }, []);

  const [newNumber, setNewNumber] = useState("");
  const [newNumberShow, setNewNumberShow] = useState(false);

  const AnotherContact1 = () => {
    if (newNumber) {
      setNewNumber(newNumber);
      let ContactObj = {
        number: newNumber,
      };
      contactList.push(ContactObj);
      setNewNumber("");
    } else {
      console.log("error");
    }
  };

  const nikaloContact = (val, Item) => {
    console.log("first-->", val, Item);
    contactList = contactList.filter((item) => item !== Item);
    // console.log("newArr", newArr);
    // contactList = [...newArr];
    console.log("hhh", contactList);
  };

  return (
    <ScreenWrapper statusBarColor={backgroundColor}>
      <View
        style={{
          flex: 1,
          backgroundColor: colorScheme === "light" ? appColors?.white : "black",
        }}
      >
        <View header={"PersonalProfile"} style={{ flex: 0.23 }}>
          <CommonHeader
            navigation={navigation}
            text={"Personal\nPorfile"}
            showProgress={true}
          />
        </View>
        <View style={{ flex: 1 }}>
          <ScrollView
            contentContainerStyle={{
              marginHorizontal: 27,
              marginTop: "7%",
              paddingBottom: 50,
            }}
          >
            <CommonInputBox
              label={"Name"}
              onChangeText={(e) => {
                setProfileDate({ ...profileData, name: e });
              }}
            />
            <CommonInputBox
              label={"Email"}
              onChangeText={(e) => {
                setProfileDate({ ...profileData, email: e });
              }}
            />
            <CommonInputBox
              label={"DOB"}
              value={moment(profileData?.dob)?.format("DD-MM-YYYY")}
              onPress={() => {
                setDateVisible(true);
              }}
            />
            <DatePicker
              modal
              open={dateVisible}
              date={new Date()}
              style={{ width: 150 }}
              mode="date"
              onConfirm={(dates) => {
                setDateVisible(false);
                setProfileDate({
                  ...profileData,
                  dob: dates,
                });
                console.log(dates, "<--sadasda");
                // setOpen(false);
                // setDate({
                //   date2: dates,
                //   ...date,
                // });
              }}
              onCancel={() => {
                setDateVisible(false);
                // setOpen(false);
              }}
            />
            <CommonInputBox
              label={"Address"}
              onPress={() => {
                navigation?.navigate("InnerAddress");
              }}
            />

            <CommonInputBox
              label={"Personal Contact Number"}
              onChangeText={(e) => {
                setProfileDate({ ...profileData, personalContactNumber: e });
              }}
            />
            {
              <FlatList
                data={contactList}
                renderItem={({ item, index }) => {
                  return (
                    <AnotherContactList
                      value={item.number}
                      item={item}
                      index={index}
                      onPress={(val, item) => nikaloContact(val, item)}
                    />
                  );
                }}
              />
            }
            {newNumberShow && (
              <AnotherContact
                onPress={AnotherContact1}
                EnterNumber={setNewNumber}
              />
            )}

            {/* <CommonButton
              buttonText={"Add Another Contact"}
              onPress={() => setNewNumberShow(!newNumberShow)}
            /> */}

            <CommonInputBox
              editable={false}
              onFocus={onFocus}
              value={selectedGender}
              label={"gender"}
            />
            <GenderSelectionModal
              isVisible={modalVisible}
              selectedGender={selectedGender}
              handleGenderSelect={handleGenderSelect}
              label={"Gender"}
            />

            <CommonInputBox
              value={`${college?.passingYear},${college?.college},${college?.deg}`}
              label={"Degree"}
              onPress={() => {
                navigation?.navigate("SelectYear");
              }}
            />
            <CommonInputBox
              label={"Splecilaity"}
              value={special?.toString()}
              onPress={() => {
                navigation?.navigate("SelectSpecial");
              }}
            />
            <CommonInputBox
              label={"Membership"}
              value={memberShip?.toString()}
              onPress={() => {
                navigation?.navigate("MembershipSelect");
              }}
            />
            <CommonInputBox label={"Professialn"} />
            <CommonInputBox
              label={"exepreince"}
              onChangeText={(e) => {
                setProfileDate({ ...profileData, experience: e });
              }}
            />
          </ScrollView>
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <RightButton
            onPress={() => {
              handleProfile();
            }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default PersonalProfile;

const styles = StyleSheet.create({});
