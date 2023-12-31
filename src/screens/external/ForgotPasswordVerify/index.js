import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import {appColors} from '../../../utils/appColors';
import CommonTextInput from '../../../components/CommonTextInput';
import CommonButton from '../../../components/CommonButton';
import {useAppCommonDataProvider} from '../../../navigation/AppCommonDataProvider';

const ForgotPasswordVerify = ({navigation}) => {
  const {colorScheme} = useAppCommonDataProvider();
  return (
    <ScreenWrapper
      statusBarColor={colorScheme === 'light' ? appColors?.white : 'black'}>
      <View
        style={{
          flex: 1,
          backgroundColor: colorScheme === 'light' ? appColors?.white : 'black',
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
            Forgot
            {'\n'}
            Password
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
            Kindly check the mailbox for the validation code.
          </Text>
        </View>
        <View style={{flex: 0.2, paddingHorizontal: '7%'}}>
          <CommonTextInput label={'Enter Validation Code'} />
        </View>
        <View
          style={{
            flex: 0.25,
            justifyContent: 'space-between',
            paddingHorizontal: '7%',
          }}>
          <CommonButton
            buttonText={'Continue'}
            onPress={() => {
              navigation?.navigate('ChangePassword');
            }}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: appColors?.gray,
              paddingRight: '23%',
            }}>
            A confirmation mail has been sent. Kindly enter the passcode to
            proceed further
          </Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ForgotPasswordVerify;

const styles = StyleSheet.create({});
