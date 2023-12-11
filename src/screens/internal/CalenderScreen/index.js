import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import {appColors} from '../../../utils/appColors';
import {Calendar} from 'react-native-calendars';
import YearModal from './YearModal';
// import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';
const CalenderScreen = ({navigation}) => {
  const [showYear, setShowYear] = useState(false);

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
  return (
    <ScreenWrapper statusBarColor={appColors?.brown}>
      <View style={{flex: 1, backgroundColor: appColors?.brown}}>
        <View style={{flex: 0.6}}>
          <TouchableOpacity
            style={{backgroundColor: 'red'}}
            onPress={() => {
              navigation?.navigate("WeekelyCalendar")
            }}>
            <Text>show weekeyl modal</Text>
          </TouchableOpacity>
          <Calendar
            onDayPress={day => {
              console.log('selected day', day);
            }}
            disableMonthChange={true}
            theme={{
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#00adf5',
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9ef',
            }}
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              height: 484,
            }}
          />
        </View>
        <View
          style={{
            flex: 0.4,
            backgroundColor: appColors?.white,
            paddingVertical: '5%',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', marginBottom: '5%'}}>
          <TouchableOpacity style={[styles?.grayView]} onPress={()=>{navigation?.navigate("WeekelyCalendar")}} >

              <Text style={styles?.header}>Morning Slot</Text>
              <Text style={styles?.numberGiven}>29</Text>
      

            </TouchableOpacity>
            <View style={[styles?.grayView, {width: '50%'}]}>
              <Text style={styles?.header}>Morning Slot</Text>
              <Text style={styles?.numberGiven}>29</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={[styles?.grayView, {width: '50%'}]}>
              <Text style={styles?.header}>Morning Slot</Text>
              <Text style={styles?.numberGiven}>29</Text>
            </View>
            <View style={styles?.grayView}>
              <Text style={styles?.header}>Morning Slot</Text>
              <Text style={styles?.numberGiven}>29</Text>
            </View>
          </View>
        </View>
      </View>
      <YearModal showYear={showYear} />
    </ScreenWrapper>
  );
};

export default CalenderScreen;

const styles = StyleSheet.create({
  grayView: {
    width: '40%',
    height: 100,
    backgroundColor: appColors?.gray,
    marginHorizontal: 5,
    borderRadius: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
  },
  numberGiven: {
    fontSize: 29,
    fontWeight: '400',
  },
});
