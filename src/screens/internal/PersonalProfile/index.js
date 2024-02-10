import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
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
import AnimatedInput from "react-native-animated-input";
import CommonTextInput from "../../../components/CommonTextInput";
import FormField from "../../../components/CustomField/FormField";
import { Picker } from "@react-native-picker/picker";
import RNPickerSelect from "react-native-picker-select";

var contactList = [];
const PersonalProfile = ({ navigation }) => {
  const { colorScheme, special, college, memberShip } =
    useAppCommonDataProvider();
  console.log(special, "<---sdasdasda");
  const [selectedGender, setSelectedGender] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#8B7156"); // Default background color
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [about, setAbout] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState(null);
  const [professional, setProfessional] = useState(null);
  const [exepreince, setExepreince] = useState(null);
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
  const onHandleGender = (key, value) => {
    // setProfileDate({ ...profileData, value: profileData });
    Alert.alert(value);
    setSelectedGender(value);
    setModalVisible(false);
  };
  const onHandleFirstName = (key, value) => {
    setFirstName(value);
  };
  const onHandleLastName = (key, value) => {
    setLastName(value);
  };
  const onHandleAbout = (key, value) => {
    setAbout(value);
  };
  const onHandleEmail = (key, value) => {
    setEmail(value);
  };
  const onHandleDob = (key, value) => {
    setDob(value);
  };
  const onHandleAddress = (key, value) => {
    setAddress(value);
  };
  const onHandlePersonalContact = (key, value) => {
    setContactNumber(value);
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
    const data = {
      name: firstName + lastName,
      primarySpeciality: "Opthalmologist",
      city: "asd",
      homeAddress: "R.T. Road, Naya Bazaar",
      experience: "5",
      lat: 22.76861,
      lon: 6542,
      phoneNumber: "9463826048",
      dob: "06-01-1997",
      state: "Jharkhand",
      locality: "Jugsalai",
      pincode: 831006,
      gender: selectedGender,
      membership: [
        "All India Medicos Society",
        "All India Straubismological Society",
        "Am Charitable Trust",
        "American Holistic Health Association (U.S.A.)",
      ],
      stream: "eye",
      specialities: ["GENERAL MEDICINE", "BARIATRIC SURGEON", "AYURVEDA"],
      services: [],
      education: [
        {
          deg: college?.deg,
          college: college?.college,
          passingYear: college?.passingYear,
        },
      ],
      about:
        "I am an eye doctor. I have a lot of experience in treating people's eyes.",
    };
    const response = await apiPostModule("v11/user/doctor/me", data);
    console.log(response, "<---response");
    if (response?.status === "success") {
      CustomMessage(response?.message, "success");
    } else {
      CustomMessage(response?.message, "danger");
    }
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
      <View
        header={"PersonalProfile"}
        style={{ height: 170, backgroundColor: appColors?.brown }}
      >
        <CommonHeader
          navigation={navigation}
          text={"Personal\nPorfile"}
          showProgress={true}
        />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor:
            colorScheme === "light" ? appColors?.white : appColors?.black,
        }}
      >
        <View style={{ flex: 1 }}>
          <ScrollView
            contentContainerStyle={{
              margin: 15,
              marginTop: "7%",
              paddingBottom: 100,
            }}
          >
            <FormField
              handleChange={onHandleAbout}
              value={about}
              defaultValue={about}
              textInputId="About"
              label="About*"
              textInputProps={{
                returnKeyType: "done",
              }}
            />
            <FormField
              handleChange={onHandleFirstName}
              value={firstName}
              defaultValue={firstName}
              textInputId="First name"
              label="First Name*"
              textInputProps={{
                returnKeyType: "done",
              }}
            />
            <FormField
              handleChange={onHandleLastName}
              value={lastName}
              defaultValue={lastName}
              textInputId="Last name"
              label="Last Name*"
              textInputProps={{
                returnKeyType: "done",
              }}
            />

            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                navigation?.navigate("SelectYear");
              }}
              style={{ flex: 1 }}
            >
              <FormField
                handleChange={onHandleEmail}
                value={email}
                defaultValue={email}
                textInputId="Email"
                label="Email*"
                textInputProps={{
                  returnKeyType: "done",
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                navigation?.navigate("InnerAddress");
              }}
              style={{ flex: 1 }}
            >
              <FormField
                handleChange={onHandleAddress}
                value={address}
                defaultValue={address}
                textInputId="Address"
                label="Address*"
                textInputProps={{
                  returnKeyType: "done",
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                setDateVisible(true);
              }}
              style={{ flex: 1 }}
            >
              <FormField
                handleChange={onHandleDob}
                value={moment(profileData?.dob)?.format("DD-MM-YYYY")}
                defaultValue={dob}
                textInputId="D.O.B"
                label="D.O.B*"
                textInputProps={{
                  returnKeyType: "done",
                }}
              />
            </TouchableOpacity>

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
              }}
              onCancel={() => {
                setDateVisible(false);
                // setOpen(false);
              }}
            />

            <FormField
              handleChange={onHandlePersonalContact}
              value={contactNumber}
              defaultValue={contactNumber}
              textInputId="Personal Contact Number"
              label="Personal Contact Number*"
              textInputProps={{
                returnKeyType: "done",
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
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                setModalVisible(true);
              }}
              style={{ flex: 1 }}
            >
              <FormField
                editable={false}
                handleChange={onHandleGender}
                value={selectedGender}
                defaultValue={selectedGender}
                textInputId="Gender"
                label="Gender*"
                textInputProps={{
                  returnKeyType: "done",
                }}
              />
            </TouchableOpacity>
            {/* <CommonInputBox
              editable={false}
              onFocus={onFocus}
              value={selectedGender}
              label={"Gender*"}
            /> */}
            <GenderSelectionModal
              isVisible={modalVisible}
              selectedGender={selectedGender}
              handleGenderSelect={onHandleGender}
              label={"Gender"}
            />
            <CommonInputBox
              editable={false}
              onFocus={onFocus}
              value={selectedGender}
              label={"Stream*"}
            />
            <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              items={[
                { label: "Football", value: "football" },
                { label: "Baseball", value: "baseball" },
                { label: "Hockey", value: "hockey" },
              ]}
            />
            {/* <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                navigation?.navigate("SelectYear");
              }}
              style={{ flex: 1 }}
             >
              <AnimatedInput
                placeholder="Degree*"
                valid={isValid}
                errorText="Error"
                value={`${college?.passingYear},${college?.college},${college?.deg}`}
                styleLabel={{
                  fontWeight: "600",
                  color:
                    colorScheme === "light"
                      ? appColors?.black
                      : appColors?.white,
                }}
                styleInput={{
                  color:
                    colorScheme === "light"
                      ? appColors?.black
                      : appColors?.white,
                }}
              />
            </TouchableOpacity> */}
            <CommonInputBox
              value={`${college?.passingYear},${college?.college},${college?.deg}`}
              label={"Degree"}
              onPress={() => {
                navigation?.navigate("SelectYear");
              }}
            />

            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                navigation?.navigate("SelectSpecial");
              }}
              style={{ flex: 1 }}
            >
              <AnimatedInput
                placeholder="Splecilaity*"
                valid={isValid}
                errorText="Error"
                value={special?.toString()}
                styleLabel={{
                  fontWeight: "600",
                  color:
                    colorScheme === "light"
                      ? appColors?.black
                      : appColors?.white,
                }}
                styleInput={{
                  color:
                    colorScheme === "light"
                      ? appColors?.black
                      : appColors?.white,
                }}
                styleBodyContent={styles.bodyContent}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                navigation?.navigate("MembershipSelect");
              }}
              style={{ flex: 1 }}
            >
              <AnimatedInput
                placeholder="Membership*"
                valid={isValid}
                errorText="Error"
                value={memberShip?.toString()}
                styleLabel={{
                  fontWeight: "600",
                  color:
                    colorScheme === "light"
                      ? appColors?.black
                      : appColors?.white,
                }}
                styleInput={{
                  color:
                    colorScheme === "light"
                      ? appColors?.black
                      : appColors?.white,
                }}
                styleBodyContent={styles.bodyContent}
              />
            </TouchableOpacity>
            <AnimatedInput
              placeholder="Professional*"
              valid={isValid}
              errorText="Error"
              onChangeText={(text) => setProfessional(text)}
              value={professional}
              styleLabel={{
                fontWeight: "600",
                color:
                  colorScheme === "light" ? appColors?.black : appColors?.white,
              }}
              styleInput={{
                color:
                  colorScheme === "light" ? appColors?.black : appColors?.white,
              }}
              styleBodyContent={styles.bodyContent}
            />
            <AnimatedInput
              placeholder="Exepreince*"
              valid={isValid}
              errorText="Error"
              onChangeText={(text) => setExepreince(text)}
              value={exepreince}
              styleLabel={{
                fontWeight: "600",
                color:
                  colorScheme === "light" ? appColors?.black : appColors?.white,
              }}
              styleInput={{
                color:
                  colorScheme === "light" ? appColors?.black : appColors?.white,
              }}
              styleBodyContent={styles.bodyContent}
            />
            {/* <CommonInputBox
              label={"Exepreince*"}
              onChangeText={(e) => {
                setProfileDate({ ...profileData, experience: e });
              }}
            /> */}
          </ScrollView>
        </View>

        <View
          style={{
            paddingHorizontal: 20,
            paddingBottom: 50,
          }}
        >
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
