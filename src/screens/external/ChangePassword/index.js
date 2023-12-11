import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import {appColors} from '../../../utils/appColors';
import CommonTextInput from '../../../components/CommonTextInput';
import CommonButton from '../../../components/CommonButton';
import {useAppCommonDataProvider} from '../../../navigation/AppCommonDataProvider';

const ChangePassword = ({navigation}) => {
  const {colorScheme} = useAppCommonDataProvider();
  const [change, setChange] = useState({
    password: '',
    confirmPassword: '',
    passwordeye: true,
    confirmPasswordeye: true,
    passwordFocus: false,
    confirmPasswordFocus: false,
  });
  return (
    <ScreenWrapper
      statusBarColor={colorScheme === 'light' ? appColors?.white : 'black'}>
      <View
        style={{
          flex: 1,
          backgroundColor: colorScheme === 'light' ? appColors?.white : 'black',
          paddingTop: '10%',
        }}>
        <View style={{paddingHorizontal: '7%', flex: 0.28}}>
          <Text
            style={{
              fontSize: 37,
              fontWeight: '500',
              color:
                colorScheme === 'light' ? appColors?.black : appColors?.white,
            }}>
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
          <CommonTextInput
            label={'Password'}
            value={change?.password}
            passwordFocus={change?.passwordFocus}
            onFocus={() => {
              setChange({...change, passwordFocus: true});
            }}
            onBlur={() => {
              setChange({...change, passwordFocus: false});
            }}
            eyeValue={change?.passwordeye}
            onChangeEye={() => {
              setChange({
                ...change,
                passwordeye: !change?.passwordeye,
              });
            }}
            onChangeText={e => {
              setChange({...change, Password: e});
            }}
          />
          <CommonTextInput
            label={'Confirm Password'}
            value={change?.confirmPassword}
            passwordFocus={change?.confirmPasswordFocus}
            onFocus={() => {
              setChange({...change, confirmPasswordFocus: true});
            }}
            onBlur={() => {
              setChange({...change, confirmPasswordFocus: false});
            }}
            eyeValue={change?.confirmPasswordeye}
            onChangeEye={() => {
              setChange({
                ...change,
                confirmPasswordeye: !change?.confirmPasswordeye,
              });
            }}
            onChangeText={e => {
              setChange({...change, confirmPassword: e});
            }}
          />
        </View>
        <View
          style={{
            flex: 0.25,
            justifyContent: 'space-between',
            paddingHorizontal: '7%',
          }}>
          <CommonButton
            buttonText={'continue'}
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
