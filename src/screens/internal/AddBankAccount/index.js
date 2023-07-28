import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import {appColors} from '../../../utils/appColors';
import PaymentSelector from '../../../components/PaymentSelector';
import CommonHeader from '../../../components/CommonHeader';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CommonTextInput from '../../../components/CommonTextInput';
import SimpleButton from '../../../components/SimpleButton';

const AddBankAccount = ({navigation}) => {
  return (
    <ScreenWrapper statusBarColor={appColors?.brown}>
      <View style={{flex: 1, backgroundColor: appColors?.white}}>
        <View style={{flex: 0.2}}>
          <CommonHeader navigation={navigation} text={'ADD Account'} />
        </View>
        <View style={{flex: 0.5, width: '100%', marginHorizontal: 20}}>
          <KeyboardAwareScrollView contentContainerStyle={{}}>
            <CommonTextInput
              label={'Name of holder'}
              style={{width: '90%', color: appColors?.black}}
            />
            <CommonTextInput
              label={'Phone Number'}
              style={{width: '90%', color: appColors?.black}}
            />
            <CommonTextInput
              label={'12 Digit Account no'}
              style={{width: '90%'}}
            />
            <CommonTextInput
              label={'IFSC CODE'}
              style={{width: '90%', color: appColors?.black}}
            />
          </KeyboardAwareScrollView>
        </View>
      </View>
      <View style={{flex: 0.1}}>
        <SimpleButton
          buttonText={'Add Account'}
          width={'90%'}
          backgroundColor={appColors?.gray}
        />
      </View>
    </ScreenWrapper>
  );
};

export default AddBankAccount;

const styles = StyleSheet.create({});
