import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Modal} from 'react-native';
import Calendar from 'react-native-calendar-range-picker';
const YearModal = ({showYear}) => {
  const CUSTOM_LOCALE = {
    monthNames: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    today: 'Today',
    year: '', // letter behind year number -> 2020{year}
  };
  return (
    <Modal visible={showYear}>
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <Calendar
          locale={CUSTOM_LOCALE}
          pastYearRange={1}
          startDate="2023-01-01"
          onDayPress={day => {
            console.log('selected day', day);
          }}
          disableMonthChange={true}
          style={{
            borderWidth: 1,
            borderColor: 'gray',
          }}
        />
      </View>
    </Modal>
  );
};

export default YearModal;

const styles = StyleSheet.create({});
