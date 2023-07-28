import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import {appColors} from '../../../utils/appColors';
import CommonTextInput from '../../../components/CommonTextInput';
import CommonButton from '../../../components/CommonButton';

const ChangePassword = ({navigation}) => {
  return (
    <ScreenWrapper>
      <View
        style={{flex: 1, backgroundColor: appColors?.white, paddingTop: '10%'}}>
        <View style={{paddingHorizontal: '7%', flex: 0.28}}>
          <Text
            style={{fontSize: 37, fontWeight: '500', color: appColors?.black}}>
            Change
            {'\n'}
            Password
          </Text>
          <Text
            style={{
              marginTop: '5%',
              paddingRight: '25%',
              fontSize: 19,
              fontWeight: '500',
              lineHeight: 22,
              color: appColors?.gray,
            }}>
            Here, enter the new password
          </Text>
        </View>
        <View style={{flex: 0.3, paddingHorizontal: '7%'}}>
          <CommonTextInput label={'Password'} />
          <CommonTextInput label={'Confirm Password'} />
        </View>
        <View
          style={{
            flex: 0.25,
            justifyContent: 'space-between',
            paddingHorizontal: '7%',
          }}>
          <CommonButton
            onPress={() => {
              navigation?.navigate('SignSuccess');
            }}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: appColors?.gray,
              paddingRight: '23%',
            }}>
            This process shall reset your New Password.
          </Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({});
