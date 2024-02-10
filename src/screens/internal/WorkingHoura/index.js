import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../../../components/ScreenWrapper";
import { appColors } from "../../../utils/appColors";
import CommonHeader from "../../../components/CommonHeader";
import { Image } from "react-native";
import { imagePath } from "../../../utils/imagePath";
import SessionModal from "./SessionModal";
import moment from "moment";
import { Switch } from "react-native-switch";

const WorkingHours = ({ navigation }) => {
  const [isVisible, setVisible] = useState(false);
  const [workHours, setWorkHours] = useState({
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
  });
  const [daySelect, setDaySelect] = useState("");
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <ScreenWrapper statusBarColor={appColors?.white}>
      <View style={{ flex: 1, backgroundColor: appColors?.white }}>
        <View style={{ marginTop: 21 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => {
                navigation?.goBack();
              }}
            >
              <Image
                style={{ marginBottom: 25 }}
                source={imagePath?.back}
                tintColor={"black"}
              />
            </TouchableOpacity>
            <View style={{ width: "100%" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                  color: appColors?.black,
                }}
              >
                Katare’s Integrative Health & Gastro ..
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  width: "86%",
                  justifyContent: "space-between",
                  marginTop: 7,
                  height: 27,
                }}
              >
                <Text
                  style={{
                    color: appColors?.blue,
                    fontSize: 16,
                    fontWeight: "600",
                  }}
                >
                  Same for weekdays
                </Text>

                <Switch
                  value={isSwitchOn}
                  onValueChange={onToggleSwitch}
                  disabled={false}
                  circleSize={30}
                  barHeight={30}
                  activeText={""}
                  inActiveText={""}
                  backgroundActive={appColors?.lightBlue}
                  backgroundInactive={appColors?.gray}
                  circleActiveColor={"white"}
                  circleInActiveColor={"white"}
                  innerCircleStyle={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  renderActiveText={true}
                  renderInActiveText={true}
                  switchBorderRadius={30}
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 21,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderBottomColor: "black",
            borderTopColor: "black",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 50,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              paddingVertical: 10,
              paddingLeft: 25,
              color: appColors?.black,
            }}
          >
            Working Days
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              //paddingVertical: 10,
              paddingRight: 30,
              paddingHorizontal: 50,
              color: appColors?.blue,
            }}
          >
            Edit
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={{ flex: 1 }}
          >
            <View style={styles.workingDayText}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                  color: appColors?.black,
                }}
              >
                Monday
              </Text>
              {workHours?.monday?.map((itm) => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 15,
                    }}
                  >
                    <Text style={styles.slotStyle}>Slot 1</Text>
                    <Text
                      style={{
                        marginLeft: 39,
                        fontSize: 16,
                        fontWeight: "600",
                        color: "#454545",
                      }}
                    >
                      {itm}
                    </Text>
                  </View>
                );
              })}
              {workHours?.monday.length < 2 && (
                <TouchableOpacity
                  onPress={() => {
                    setDaySelect("monday");
                    setVisible(true);
                  }}
                >
                  <Text
                    style={{
                      paddingTop: 20,
                      fontSize: 16,
                      fontWeight: "600",
                      textAlign: "center",
                      color: "#007AFF",
                      alignSelf: "center",
                    }}
                  >
                    Add a Clinic Session{" "}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.workingDayText}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                  color: appColors?.black,
                }}
              >
                Tuesday
              </Text>
              {workHours?.tuesday?.map((itm) => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 15,
                    }}
                  >
                    <Text style={styles.slotStyle}>Slot 1</Text>
                    <Text
                      style={{
                        marginLeft: 39,
                        fontSize: 16,
                        fontWeight: "600",
                        color: "#454545",
                      }}
                    >
                      {itm}
                    </Text>
                  </View>
                );
              })}
              {workHours?.tuesday.length < 2 && (
                <TouchableOpacity
                  onPress={() => {
                    setDaySelect("monday");
                    setVisible(true);
                  }}
                >
                  <Text
                    style={{
                      paddingTop: 20,
                      fontSize: 16,
                      fontWeight: "600",
                      textAlign: "center",
                      color: "#007AFF",
                      alignSelf: "center",
                    }}
                  >
                    Add a Clinic Session{" "}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.workingDayText}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                  color: appColors?.black,
                }}
              >
                Wednesday
              </Text>
              {workHours?.wednesday?.map((itm) => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 15,
                    }}
                  >
                    <Text style={styles.slotStyle}>Slot 1</Text>
                    <Text
                      style={{
                        marginLeft: 39,
                        fontSize: 16,
                        fontWeight: "600",
                        color: "#454545",
                      }}
                    >
                      {itm}
                    </Text>
                  </View>
                );
              })}
              {workHours?.wednesday.length < 2 && (
                <TouchableOpacity
                  onPress={() => {
                    setDaySelect("monday");
                    setVisible(true);
                  }}
                >
                  <Text
                    style={{
                      paddingTop: 20,
                      fontSize: 16,
                      fontWeight: "600",
                      textAlign: "center",
                      color: "#007AFF",
                      alignSelf: "center",
                    }}
                  >
                    Add a Clinic Session{" "}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.workingDayText}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                  color: appColors?.black,
                }}
              >
                Thursday
              </Text>
              {workHours?.thursday?.map((itm) => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 15,
                    }}
                  >
                    <Text style={styles.slotStyle}>Slot 1</Text>
                    <Text
                      style={{
                        marginLeft: 39,
                        fontSize: 16,
                        fontWeight: "600",
                        color: "#454545",
                      }}
                    >
                      {itm}
                    </Text>
                  </View>
                );
              })}
              {workHours?.thursday.length < 2 && (
                <TouchableOpacity
                  onPress={() => {
                    setDaySelect("monday");
                    setVisible(true);
                  }}
                >
                  <Text
                    style={{
                      paddingTop: 20,
                      fontSize: 16,
                      fontWeight: "600",
                      textAlign: "center",
                      color: "#007AFF",
                      alignSelf: "center",
                    }}
                  >
                    Add a Clinic Session{" "}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.workingDayText}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                  color: appColors?.black,
                }}
              >
                Friday
              </Text>
              {workHours?.friday?.map((itm) => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 15,
                    }}
                  >
                    <Text style={styles.slotStyle}>Slot 1</Text>
                    <Text
                      style={{
                        marginLeft: 39,
                        fontSize: 16,
                        fontWeight: "600",
                        color: "#454545",
                      }}
                    >
                      {itm}
                    </Text>
                  </View>
                );
              })}
              {workHours?.friday.length < 2 && (
                <TouchableOpacity
                  onPress={() => {
                    setDaySelect("monday");
                    setVisible(true);
                  }}
                >
                  <Text
                    style={{
                      paddingTop: 20,
                      fontSize: 16,
                      fontWeight: "600",
                      textAlign: "center",
                      color: "#007AFF",
                      alignSelf: "center",
                    }}
                  >
                    Add a Clinic Session{" "}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderBottomColor: "black",
            borderTopColor: "black",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 50,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              paddingVertical: 10,
              paddingLeft: 25,
              color: appColors?.black,
            }}
          >
            Holidays
          </Text>
        </View>
        <View
          style={{
            marginBottom: 80,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              marginTop: 33,
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: appColors?.black,
                  paddingLeft: 25,
                }}
              >
                Monday - Wendensday
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: "red",
                  paddingRight: 25,
                }}
              >
                Closed
              </Text>
            </View>
            <View
              style={{
                marginTop: 10,
                marginLeft: 15,
                marginRight: 15,
                borderBottomColor: appColors?.loaderColor,
                borderBottomWidth: 0.6,
              }}
            ></View>
            {/* <TouchableOpacity>
              <Text
                style={{
                  textAlign: "center",
                  color: "#007AFF",
                  fontSize: 17,
                  fontWeight: "400",
                  textDecorationLine: "underline",
                }}
              >
                Tap to declare a holiday
              </Text>
            </TouchableOpacity> */}
          </View>
        </View>
        {/* <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            color: appColors?.black,
          }}
        >
          Monday - Wendensday
        </Text>
        */}
      </View>
      <SessionModal
        isVisible={isVisible}
        setVisible={() => {
          setVisible(false);
        }}
        setTime={(e) => {
          console.log(workHours, daySelect, "<----sqweqweqwe", e);
          setWorkHours({
            ...workHours,
            [daySelect]: [...workHours[daySelect], e],
          });
          console.log(e, "<--wqeqweqeqw");

          setVisible(false);
        }}
      />
    </ScreenWrapper>
  );
};

export default WorkingHours;

const styles = StyleSheet.create({
  workingDayText: {
    //marginHorizontal: 20,
    paddingVertical: 30,
    paddingLeft: 25,
  },
  switchBox: { width: 50, height: 27, marginLeft: 25 },
  slotStyle: {
    paddingLeft: 5,
    fontSize: 16,
    fontWeight: "600",

    color: appColors?.blue,
  },
});
