import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Modal from 'react-native-modal';
import {appColors} from '../../../utils/appColors';
import DatePicker from 'react-native-date-picker';
const SessionModal = ({isVisible, setVisible}) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState({
    date1: new Date(),
    date2: new Date(),
  });
  const [ModalVisible, setModalVisible] = useState(isVisible);

  useEffect(() => {
    setModalVisible(isVisible);
  }, [isVisible]);
  return (
    <Modal isVisible={ModalVisible}>
      <View
        style={{
          flex: 0.35,
          backgroundColor: appColors?.white,
          borderRadius: 10,
          paddingVertical: 20,
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 0.1,
          }}>
          <Text style={{textAlign: 'center', fontSize: 19, fontWeight: '600'}}>
            Add Session
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '10%',
            flex: 0.1,
            paddingHorizontal: 10,
          }}>
          <View style={{flex: 0.2}}>
            <Text style={{fontSize: 19}}>FROM</Text>
          </View>
          <View style={{flex: 0.5}}>
            <Text style={{fontSize: 19}}>Till</Text>
          </View>
        </View>
        <View
          style={{
            borderRadius: 10,
            alignSelf: 'center',
            flexDirection: 'row',
            flex: 0.9,
          }}>
          <TouchableOpacity
            onPress={() => {
              setOpen(!open);
            }}>
            <DatePicker
              open={true}
              style={{width: 150}}
              date={date?.date1}
              mode="time"
              onConfirm={date => {
                setOpen(false);
                setDate(date);
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
            style={{width: 150}}
            mode="time"
            onConfirm={date => {
              setOpen(false);
              setDate(date);
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
        <View style={{flex: 0.2}}>
          <TouchableOpacity>
            <Text>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SessionModal;

const styles = StyleSheet.create({});
