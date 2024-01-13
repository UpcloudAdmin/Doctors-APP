import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Button,
  FlatList,
  Switch,
  Modal,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import ScreenWrapper from "../../../components/ScreenWrapper";
import { appColors } from "../../../utils/appColors";
import { Calendar, Agenda, LocaleConfig } from "react-native-calendars";
import YearModal from "./YearModal";
import RBSheet from "react-native-raw-bottom-sheet";

// import messaging from '@react-native-firebase/messaging';
import notifee from "@notifee/react-native";
import { imagePath } from "../../../utils/imagePath";
import { ScrollView } from "react-native-gesture-handler";
import YearCalendar from "../../external/YearCalendar";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useAppCommonDataProvider } from "../../../navigation/AppCommonDataProvider";
import ChangeBackground from "../../../navigation/ChangeBackground";
const CalenderScreen = ({ navigation, success }) => {
  const { colorScheme } = useAppCommonDataProvider();

  const routes = useRoute();
  console.log("AAAA", routes);
  const [showYear, setShowYear] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#8B7156"); // Default background color
  const [currentMonth, setCurrentMonth] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [markedDates, setMarkedDates] = useState({});
  const [selectedDate, setSelectedDate] = useState("");
  const [switchValue, setSwitchValue] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isViewVisible, setIsViewVisible] = useState(false);

  const toggleVisibility = () => {
    setIsViewVisible(!isViewVisible);
  };

  LocaleConfig.locales["en"] = {
    monthNames: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],

    dayNames: ["S", "M", "T", "W", "T", "F", "S"],
    dayNamesShort: ["S", "M", "T", "W", "T", "F", "S"],
    today: "Today",
  };

  LocaleConfig.defaultLocale = "en";

  const updateDisplayText = () => {
    const currentHour = new Date().getHours();
    const currentMinutes = new Date().getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinutes;
    if (currentTimeInMinutes >= 20 * 60 + 30 && currentTimeInMinutes < 5) {
      //setDisplayText('Text for 8:30 PM to 4:59 AM');
      setDisplayText(" It’s been Late Dr. Gouri !");
    } else if (
      currentTimeInMinutes >= 17 * 60 + 31 &&
      currentTimeInMinutes < 20 * 60 + 30
    ) {
      // setDisplayText('Text for 5:31 PM to 8:30 PM');
      setDisplayText("Evening Dr. Gouri !");
    } else if (
      currentTimeInMinutes >= 12 * 60 &&
      currentTimeInMinutes < 17 * 60 + 30
    ) {
      // setDisplayText('Text for 12 PM to 5:30 PM');
      setDisplayText("A very Good Afternoon to you Dr. Gouri !");
    } else if (
      currentTimeInMinutes >= 5 * 60 &&
      currentTimeInMinutes < 12 * 60
    ) {
      // setDisplayText('Text for 5 AM to 11:59 AM');
      setDisplayText("A happy and a cherful morning Dr. Gouri !");
    } else {
      setDisplayText("A happy and a cherful morning Dr. Gouri !");
    }
  };

  useEffect(() => {
    updateDisplayText();

    const interval = setInterval(() => {
      updateDisplayText();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  // Use useEffect to update the background color when the component mounts and every minute thereafter
  useEffect(() => {
    updateBackgroundColor();
    // Update background color every minute
    const interval = setInterval(() => {
      updateBackgroundColor();
    }, 60000); // 60000 milliseconds = 1 minute

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    const currentDateObject = new Date();
    // Get the current month name
    const monthOptions = { month: "long" };
    const monthName = currentDateObject.toLocaleString("default", {
      month: "long",
    });
    setCurrentMonth(monthName);

    // Get the current date
    const date = currentDateObject?.getDate();
    setCurrentDate(date.toString());

    // // Format the current date as needed
    // const currentMonth_ = currentDate.toLocaleString('default', {
    // month: 'long',
    // });
    // const currentDateOfMonth = currentDate.getDate();
  }, []);
  useEffect(() => {
    // Function to mark Thursdays and Sundays for the entire year
    const markDaysOff = () => {
      const updatedMarkedDates = {};

      for (let month = 1; month <= 12; month++) {
        for (let day = 1; day <= 31; day++) {
          const dateString = `${currentYear}-${
            month < 10 ? "0" + month : month
          }-${day < 10 ? "0" + day : day}`;

          const date = new Date(dateString);
          const dayOfWeek = date.getDay(); // Sunday is 0, Monday is 1, ..., Saturday is 6

          if (dayOfWeek === 4 || dayOfWeek === 6) {
            updatedMarkedDates[dateString] = {
              marked: true,
              dotColor: "red",
              fontSize: 19,
              fontWeight: 300,
              fontWeight: "bold",
              textColor: "white", // Change text color to white for marked days
            };
          }
        }
      }

      setMarkedDates(updatedMarkedDates);
    };

    // Call the function to mark days off
    markDaysOff();
  }, [currentYear]);
  // useEffect(() => {
  //   const startNotification = async () => {
  //     await notifee.requestPermission();
  //   };
  //   startNotification();
  // }, []);
  // useEffect(() => {

  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     const channelId = await notifee.createChannel({
  //       id: 'default',
  //       name: 'Default Channel',
  //     });
  //     await notifee.displayNotification({
  //       title: remoteMessage?.notification?.title,
  //       body: remoteMessage?.notification?.body,
  //       android: {
  //         channelId,
  //         // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
  //         // pressAction is needed if you want the notification to open the app when pressed
  //         pressAction: {
  //           id: 'default',
  //         },
  //       },
  //     });
  //   });

  //   return unsubscribe;
  // }, []);
  // Function to update background color based on the current time
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
  // const handleDayPress = date => {
  //   // Handle the date press event
  //   setSelectedDate(date.dateString);
  //      Alert.alert('Selected date:', date.dateString);
  // };

  // const handleSwitchChange = () => {
  //   // Handle the switch value change
  //   setSwitchValue(!switchValue);
  // };
  const handleDayPress = (date) => {
    setSelectedDate(date.dateString);
    // setModalVisible(true);
    toggleVisibility();
  };

  const handleSwitchChange = () => {
    setSwitchValue(!switchValue);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const renderDot = (dot, date) => {
    // Customize dot component or style based on dot properties
    return (
      <View
        key={dot.key}
        style={[styles.dot, { backgroundColor: dot.color }]}
      />
    );
  };

  const data = [
    {
      id: "1",
      title: "Katare’s Gall bladder immunology mulitspecialty Clinic",
    },
    {
      id: "2",
      title:
        "Katare’s Integrative Health & Gastroenterology Clinic & Nursing Home",
    },

    // Add more items as needed
  ];
  // Render each item in the FlatList
  const renderItem = ({ item, index }) => (
    <View
      style={{
        padding: 16,
        borderWidth: 2,
        borderColor: "#454545",
        margin: 12,
        //height:57,
        borderRadius: 20,
        backgroundColor: index % 2 === 0 ? "##FF777F" : "#f0f0f0", // Alternating background color
      }}
    >
      <Text style={{ fontWeight: 400, fontSize: 19 }}>{item.title}</Text>
    </View>
  );
  return (
    <ScreenWrapper statusBarColor={backgroundColor}>
      <ScrollView style={{ flex: 1, }}>
        <View
          style={{
            flex: 1,
            borderRadius: 25,
            backgroundColor: backgroundColor,
          }}
        >
          <View
            style={{
              height: 40,
              backgroundColor: backgroundColor,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("YearCalendar")}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  alignSelf: "center",
                }}
              >
                <Image source={imagePath?.back} />

                <Text style={{ color: "white", fontSize: 28, fontWeight: 600 }}>
                  {currentDate}
                  {currentMonth}
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "center",
                width: "25%",
                paddingRight: 10,
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                // style={{backgroundColor: 'red'}}
                onPress={() => {
                  // navigation?.navigate('WeekelyCalendar');
                  this.RBSheet.open();
                }}
              >
                <Image
                  // tintColor={success ? appColors?.white : appColors?.black}
                  source={imagePath?.triangleArrow}
                />
              </TouchableOpacity>
              <TouchableOpacity
                // style={{backgroundColor: 'red'}}
                onPress={() => {
                  navigation?.navigate("WeekelyCalendar");
                }}
              >
                <Image
                  // tintColor={success ? appColors?.white : appColors?.black}
                  source={imagePath?.circle}
                />
              </TouchableOpacity>
              <Image
                //tintColor={success ? appColors?.white : appColors?.black}
                source={imagePath?.calendar}
              />
            </View>
          </View>

          <Text
            style={{
              color: "#FFF",
              paddingLeft: 10,
              fontSize: 25,
              fontWeight: 300,
            }}
          >
            {displayText}
          </Text>
          <View style={{ flex: 1, padding: 20 }}>
            <Calendar
              onDayPress={handleDayPress}
              markedDates={markedDates}
              // markedDates={{
              //   [selectedDate]: {selected: true, selectedColor: 'blue'},
              // }}
              // dayComponent={({date, state}) => (
              //   <View
              //     style={
              //       state === 'disabled'
              //         ? styles.disabledDayContainer
              //         : styles.dayContainer
              //     }>
              //     <Text
              //       style={[
              //         state === 'disabled'
              //           ? styles.disabledDayText
              //           : styles.dayText,
              //         markedDates[date.dateString] &&
              //         markedDates[date.dateString].textColor
              //           ? {color: markedDates[date.dateString].textColor}
              //           : {},
              //       ]}>
              //       {date.day}
              //     </Text>
              //   </View>
              // )}
              renderDot={renderDot}
              firstDay={0}
              hideArrows={true}
              hideExtraDays
              monthFormat=""
              disableMonthChange={true}
              minDate={new Date()}
              theme={{
                backgroundColor: backgroundColor,
                calendarBackground: "transparent",
                textSectionTitleColor: "#FFF",
                selectedDayBackgroundColor: "#00adf5",
                selectedDayTextColor: "red",
                todayTextColor: "#00adf5",
                dayTextColor: "#FFF",
                textDisabledColor: "grey",
                textDayFontSize: 20,
                textMonthFontSize: 20,
              }}
              style={{
                height: 370,
                backgroundColor: backgroundColor,
              }}
            />

            {isViewVisible && (
              <View
                style={{
                  // backgroundColor: "white",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{ color: "#F5A623", fontSize: 18, fontWeight: 400 }}
                >
                  Declare Holiday
                </Text>
                <Switch
                  value={switchValue}
                  onValueChange={handleSwitchChange}
                />
              </View>
            )}
          </View>
        </View>
        <View
          style={{
          
           // backgroundColor: "red",
            paddingVertical: "5%",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginBottom: "5%",
            }}
          >
            <TouchableOpacity
              style={[
                styles?.grayView,
                {
                  backgroundColor:
                    colorScheme === "light"
                      ? appColors?.lightGray
                      : appColors?.transprance,

                  borderColor:
                    colorScheme === "light"
                      ? appColors?.white
                      : appColors?.orange,
                  borderWidth: 1,
                },
              ]}
              onPress={() => {
                navigation?.navigate("WeekelyCalendar");
              }}
            >
              <Text style={styles?.header}>Morning Slot</Text>
              <Text style={styles?.numberGiven}>29</Text>
            </TouchableOpacity>

            <View
              style={[
                styles?.grayView,
                {
                  width: "55%",
                  backgroundColor:
                    colorScheme === "light"
                      ? appColors?.lightGray
                      : appColors?.transprance,

                  borderColor:
                    colorScheme === "light"
                      ? appColors?.white
                      : appColors?.orange,
                  borderWidth: 1,
                },
              ]}
            >
              <TouchableOpacity
                // style={{backgroundColor: 'red'}}
                onPress={() => {
                  navigation?.navigate("WeekelyCalendar");
                }}
              >
                <Text style={styles?.header}>Online Appointments</Text>
                <Text style={styles?.numberGiven}>08</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={[
                styles?.grayView,
                {
                  width: "50%",
                  backgroundColor:
                    colorScheme === "light"
                      ? appColors?.lightGray
                      : appColors?.transprance,

                  borderColor:
                    colorScheme === "light"
                      ? appColors?.white
                      : appColors?.orange,
                  borderWidth: 1,
                },
              ]}
            >
              <Text style={styles?.header}>Afternoon Slot</Text>
              <Text style={styles?.numberGiven}>10</Text>
            </View>
            <View
              style={[
                styles?.grayView,
                {
                  width: "40%",
                  backgroundColor:
                    colorScheme === "light"
                      ? appColors?.lightGray
                      : appColors?.transprance,

                  borderColor:
                    colorScheme === "light"
                      ? appColors?.white
                      : appColors?.orange,
                  borderWidth: 1,
                },
              ]}
            >
              <Text style={styles?.header}>Evening Slot</Text>
              <Text style={styles?.numberGiven}>02</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <RBSheet
        ref={(ref) => {
          this.RBSheet = ref;
        }}
        height={360}
        openDuration={250}
        customStyles={{
          container: {
            justifyContent: "center",
            alignItems: "center",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
        }}
      >
        <View style={{ flex: 1, marginTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                // tintColor={success ? appColors?.white : appColors?.black}
                source={imagePath?.ChangeClinicfirst}
              />
              <Text style={{ fontWeight: 400, fontSize: 22 }}>
                {"Change\n"}
                <Text style={{ fontWeight: 700, fontSize: 30 }}>Clinic</Text>
              </Text>
            </View>
            <Button
              title="Done"
              style={{ fontWeight: 400, fontSize: 21 }}
              onPress={() => this.RBSheet.close()}
            />
          </View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            // Add additional FlatList props as needed
          />
        </View>
      </RBSheet>
      {/* <YearModal showYear={showYear} />  */}
    </ScreenWrapper>
  );
};

export default CalenderScreen;

const styles = StyleSheet.create({
  grayView: {
    width: "35%",
    height: 100,
    backgroundColor: "#EFEFEF",
    marginHorizontal: 5,
    borderRadius: 10,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    paddingVertical: 10,

    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  header: {
    fontSize: 18,
    fontWeight: "600",
  },
  numberGiven: {
    fontSize: 29,
    fontWeight: "400",
    textAlign: "right",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 2,
  },
  container: {
    flex: 1,
    paddingTop: 20,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "black",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  customHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  customHeaderText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  dayContainer: {
    alignItems: "center",
    justifyContent: "center",
    // flex: 1,

    height: 40,
    width: 40,
    // backgroundColor: 'red', // Default background color
  },
  dayText: {
    fontSize: 19,
    fontWeight: 600,
    fontWeight: "bold",
    color: "white", // Default text color
  },
  disabledDayContainer: {
    alignItems: "center",
    justifyContent: "center",
    //flex: 1,
    height: 40,
    width: 40,
    //backgroundColor: 'lightgray',
  },
  disabledDayText: {
    fontSize: 19,
    fontWeight: 600,
    fontWeight: "bold",
    color: "white",
  },
});
