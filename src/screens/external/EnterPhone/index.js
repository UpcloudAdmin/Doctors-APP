import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import CommonTextInput from '../../../components/CommonTextInput';
import CommonButton from '../../../components/CommonButton';
import {appColors} from '../../../utils/appColors';

const EnterPhone = ({navigation}) => {
  return (
    <ScreenWrapper>
      <View
        style={{
          flex: 1,
          paddingHorizontal: '7%',
          paddingTop: '15%',
          backgroundColor: appColors?.white,
        }}>
        <View style={{flex: 0.25, flexDirection: 'row'}}>
          <View style={{width: '90%'}}>
            <Text style={{fontSize: 40, color: appColors?.black}}>
              {'Enter \nPhone Number'}
            </Text>
            <Text style={{lineHeight: 22, color: appColors?.gray}}>
              Enter your 10 digit mobile number to proceed further{' '}
            </Text>
          </View>
        </View>
        <View style={{flex: 0.4}}>
          <CommonTextInput initvalue={'+91'} />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation?.navigate('Login');
          }}
          style={{
            width: '100%',
            paddingVertical: '5%',
            backgroundColor: appColors?.lightGray,
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text style={{color: appColors?.black}}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default EnterPhone;

const styles = StyleSheet.create({});
