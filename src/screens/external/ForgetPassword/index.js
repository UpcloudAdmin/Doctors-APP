import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import {appColors} from '../../../utils/appColors';
import CommonTextInput from '../../../components/CommonTextInput';
import CommonButton from '../../../components/CommonButton';
import {useAppCommonDataProvider} from '../../../navigation/AppCommonDataProvider';

const ForgetPassword = ({navigation}) => {
  const {colorScheme} = useAppCommonDataProvider();
  return (
    <ScreenWrapper
      statusBarColor={colorScheme === 'light' ? appColors?.white : 'black'}>
      <View
        style={{
          flex: 1,
          backgroundColor:
            colorScheme === 'light' ? appColors?.white : appColors?.black,
          paddingTop: '10%',
        }}>
        <View style={{paddingHorizontal: '7%', flex: 0.3}}>
          <Text
            style={{
              fontSize: 37,
              fontWeight: '500',
              color:
                colorScheme === 'light' ? appColors?.black : appColors?.white,
            }}>
            Verify{'\n'} First
          </Text>
          <Text
            style={{
              marginTop: '5%',
              paddingRight: '20%',
              fontSize: 19,
              fontWeight: '500',
              lineHeight: 22,
              color: appColors?.gray,
            }}>
            Kindly verify your email first for the further process.
          </Text>
        </View>
        <View style={{flex: 0.2, paddingHorizontal: '7%'}}>
          <CommonTextInput label={'Verify email/phone no'} />
        </View>
        <View
          style={{
            flex: 0.2,
            justifyContent: 'space-between',
            paddingHorizontal: '7%',
          }}>
          <CommonButton
            buttonText={'Verify'}
            onPress={() => {
              navigation?.navigate('ForgotPasswordVerify');
            }}
          />
          <Text
            style={{fontSize: 16, fontWeight: '500', color: appColors?.gray}}>
            A confirmation shall be sent.
          </Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({});
