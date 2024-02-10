import React, { useState, useRef } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import ScreenWrapper from "../../../components/ScreenWrapper";
import CalendarStrip from "react-native-calendar-strip";
import { imagePath } from "../../../utils/imagePath";
import { FlatList } from "react-native-gesture-handler";
import CommonBottombar from "../../../components/CommonBottombar/CommonBottombar";
import RBSheet from "react-native-raw-bottom-sheet";
import { useNavigation } from "@react-navigation/native";

const h = Dimensions.get("screen").height;
const WeekelyCalendar = () => {
  const navigation = useNavigation();

  const [selectedDate, setSelectedDate] = useState(new Date());

  // Custom function to blacklist certain dates
  const datesBlacklistFunc = (date) => {
    // Define your custom logic here
    // For example, disable weekends
    const day = date.getDay();
    return day === 0 || day === 6; // Sunday or Saturday
  };

  const onDateSelected = (date) => {
    // Handle the selected date
    setSelectedDate(date);
  };
  const list = [
    {
      name: "Krishnakant Katare",
      pictag: "M/ 27",
      icons: imagePath?.iconsvideocall,
      color: "lightblue",
      data: {
        name: "Pt. Krishnakant Katare",
        img: imagePath?.profile2,
        mode: "Video",
        button: [
          { title: "Initiate Video", Internalicon: imagePath?.iconsvideocall2 },
        ],
        icon: imagePath?.iconsvideocall1,

        textDiscription:
          "A call shall be innitiated directly via our cellular network to the Patient",
      },
    },
    {
      name: "Sapna Pawar",
      pictag: "F/ 27",
      icons: imagePath?.iconsaudiowave,
      color: "lightpink",
      data: {
        name: "Pt. Sapna Pawar",
        img: imagePath?.profile3,
        mode: "Audio",
        button: [
          {
            title: "Initiate Call",
            Internalicon: imagePath?.iconscall,
          },
        ],
        icon: imagePath?.iconsaudiowave1,
        textDiscription:
          "A call shall be innitiated directly via our cellular network to the Patient",
      },
    },

    {
      name: "Murtuza Krankoli",
      pictag: "M/ 29",
      icons: imagePath?.iconsclinic,
      color: "lightgreen",
      data: {
        name: "Pt. Murtuza Krankoli",
        img: imagePath?.profile1,
        mode: "Video",
        icon: imagePath?.iconsclinic1,
        button: [
          { title: "Accept Appointment" },
          { title: "Dissmiss Appointment", color: "red" },
        ],
        textDiscription: "Perform the following to declare an Action",
        time: "ss",
      },
    },
    {
      name: "click",
      data: {
        Internalname: "Full Day",
        button: [
          { title: "Full Day", color: "#C4C4C4" },
          { color: "#78B0ED" },
          { color: "#C4C4C4" },
          { title: "Declare Holiday", color: "#A8E56B" },
        ],
        Internalname1: "Dissmiss Appointment",
      },
    },
  ];
  const refRBSheet = useRef();
  const [select, setSelected] = useState([]);

  const openBottomSheet = (item) => {
    setSelected(item);

    refRBSheet.current.open();
  };
  return (
    <ScreenWrapper>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View
          style={{
            height: 40,
            backgroundColor: "gray",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <Image source={imagePath?.back} />
          </View>
        </View>
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <Text>WeekelyCalendar</Text>

        <CalendarStrip
          selectedDate={selectedDate}
          onDateSelected={onDateSelected}
          datesBlacklistFunc={datesBlacklistFunc}
          style={{
            height: 120,
            paddingTop: 20,
            paddingBottom: 10,
          }}
        />
      </View>

      <FlatList
        ListHeaderComponent={() => (
          <Text style={{ paddingHorizontal: 7 }}>11:00</Text>
        )}
        data={list}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <TouchableOpacity
              onPress={() => openBottomSheet(item.data)}
              style={{
                height: 60,
                width: "80%",
                backgroundColor: item.color,
                borderRadius: 5,
                justifyContent: "space-between",
                padding: 7,
                marginBottom: 10,
                alignSelf: "flex-end",
                marginRight: 30,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: "600" }}>
                  {item?.name}
                </Text>
                <Text>{item?.pictag}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 15 }}>123654789 1234567998</Text>
                <Image source={item?.icons} />
              </View>
            </TouchableOpacity>
          );
        }}
      />

      <RBSheet
        height={h / 2}
        ref={refRBSheet}
        closeOnPressMask={true}
        openDuration={250}
        customStyles={{
          container: {
            justifyContent: "center",
            alignItems: "center",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
          // }}
          // customStyles={{
          //   wrapper: {
          //     backgroundColor: "transrent",
          //   },
          draggableIcon: {
            backgroundColor: "white",
          },
        }}
      >
        <CommonBottombar item={select} />
      </RBSheet>
    </ScreenWrapper>
  );
};
export default WeekelyCalendar;
