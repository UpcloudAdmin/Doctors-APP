import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import Modal from "react-native-modal";
import { appColors } from "../../../utils/appColors";
import DatePicker from "react-native-date-picker";
import moment from "moment";
const SessionModal = ({ isVisible, setVisible, setTime }) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState({
    date1: new Date(),
    date2: new Date(),
  });
  const [ModalVisible, setModalVisible] = useState(isVisible);

  useEffect(() => {
    setModalVisible(isVisible);
  }, [isVisible]);
  console.log(date, "<---sadasdsa");
  return (
    <Modal isVisible={ModalVisible}>
      <View
        style={{
          flex: 0.45,
          backgroundColor: appColors?.white,
          borderRadius: 10,
          paddingVertical: 20,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            justifyContent: "center",
            flex: 0.1,
          }}
        >
          <Text
            style={{ textAlign: "center", fontSize: 19, fontWeight: "600" }}
          >
            Add Session
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "10%",
            flex: 0.1,
            paddingHorizontal: 10,
          }}
        >
          <View style={{ flex: 0.2 }}>
            <Text style={{ fontSize: 19 }}>FROM</Text>
          </View>
          <View style={{ flex: 0.5 }}>
            <Text style={{ fontSize: 19 }}>Till</Text>
          </View>
        </View>
        <View
          style={{
            borderRadius: 10,
            alignSelf: "center",
            flexDirection: "row",
            flex: 0.9,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setOpen(!open);
            }}
          >
            <DatePicker
              open={true}
              style={{ width: 150 }}
              date={date?.date1}
              mode="time"
              onDateChange={(dates) => {
                console.log(dates, "<---asdas");
                setOpen(false);
                setDate({
                  date1: dates,
                  ...date,
                });
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </TouchableOpacity>
          <Text>-</Text>
          <DatePicker
            open={true}
            date={date?.date2}
            style={{ width: 150 }}
            mode="time"
            onConfirm={(dates) => {
              setOpen(false);
              setDate({
                date2: dates,
                ...date,
              });
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
          {/* <TouchableOpacity
            onPress={() => {
              setOpen(!open);
            }}>
            <Text style={{textAlign: 'center'}}>09:30 PM</Text>
          </TouchableOpacity> */}
        </View>
        <View style={{ flex: 0.2, marginTop: 50 }}>
          <TouchableOpacity
            onPress={() => {
              setTime(
                `${moment(date?.date1).format("LT")}    -    ${moment(
                  date?.date2
                ).format("LT")}`
              );
            }}
          >
            <Text>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SessionModal;

const styles = StyleSheet.create({});
