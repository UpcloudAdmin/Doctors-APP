import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import {appColors} from '../../../utils/appColors';
import CommonHeader from '../../../components/CommonHeader';
import CommonInputBox from '../../../components/CommonInputBox';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as ImagePicker from 'react-native-image-picker';
const ClinicProfile = ({navigation}) => {
  return (
    <ScreenWrapper statusBarColor={appColors?.brown}>
      <View style={{flex: 1, backgroundColor: appColors?.white}}>
        <View style={{flex: 0.23}}>
          <CommonHeader
            navigation={navigation}
            text={'Clinic \n Porfile'}
            showProgress={true}
          />
        </View>
        <View style={{flex: 0.07}} />
        <View style={{flex: 0.7, paddingHorizontal: 30}}>
          <KeyboardAwareScrollView>
            <CommonInputBox label={'Clinic type'} />
            <CommonInputBox label={'Clinic Name'} />
            <CommonInputBox label={'Clinic Address'} />
            <CommonInputBox label={'Clinic Contact Number'} />
            <CommonInputBox label={'Clinic Services'} />
            <CommonInputBox label={'Clinic Issues'} />
            <CommonInputBox
              label={'Holidays'}
              onPress={() => {
                navigation?.navigate('HolidaySelector');
              }}
            />
            <CommonInputBox label={'Avg pt day'} />
          </KeyboardAwareScrollView>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ClinicProfile;

const styles = StyleSheet.create({});
