import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import {appColors} from '../../../utils/appColors';
import CommonTextInput from '../../../components/CommonTextInput';
import CommonButton from '../../../components/CommonButton';
import OtpInputs from 'react-native-otp-inputs';
const Verification = ({navigation}) => {
  return (
    <ScreenWrapper>
      <View
        style={{
          flex: 1,
          paddingHorizontal: '7%',
          paddingTop: '15%',
          backgroundColor: appColors?.white,
        }}>
        <View style={{flex: 0.25}}>
          <Text style={{fontSize: 40, color: appColors?.black}}>
            Verification
          </Text>
          <Text style={{lineHeight: 22, color: appColors?.gray}}>
            Enter the 6 digit verfication code sent on your mail{' '}
          </Text>
        </View>
        <View style={{flex: 0.4}}>
          {/* <CommonTextInput /> */}

          <OtpInputs
            inputContainerStyles={{
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: '2.2%',
              borderRadius: 10,
              borderColor: appColors?.mainOrange,
              borderWidth: 0.5,
            }}
            keyboardType="phone-pad"
            style={{flexDirection: 'row'}}
            handleChange={code => console.log(code)}
            numberOfInputs={6}
          />

          <Text style={{color: appColors?.orange, marginTop: '10%'}}>
            resend
          </Text>
        </View>
        <View>
          <CommonButton
            buttonText={'Verify'}
            onPress={() => {
              navigation?.navigate('EnterPhone');
            }}
          />
          <Text style={{color: appColors?.gray, marginTop: '10%'}}>
            Click to verify and proceed Further
          </Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Verification;

const styles = StyleSheet.create({});
