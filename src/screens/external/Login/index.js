import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import {appColors} from '../../../utils/appColors';
import CommonTextInput from '../../../components/CommonTextInput';
import CommonButton from '../../../components/CommonButton';
import {imagePath} from '../../../utils/imagePath';
import {
  check,
  PERMISSIONS,
  RESULTS,
  requestMultiple,
  request,
} from 'react-native-permissions';
const Login = ({navigation}) => {
  useEffect(() => {
    checkPrimission();
  }, []);

  const checkPrimission = async () => {
    requestMultiple([
      PERMISSIONS.IOS.CAMERA,
      PERMISSIONS.IOS.PHOTO_LIBRARY,
      PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY,
    ]).then(itm => {
      console.log(itm, '<--sadas');
    });
  };

  return (
    <ScreenWrapper>
      <View
        style={{
          flex: 1,
          paddingHorizontal: '7%',
          paddingTop: '15%',
          backgroundColor: 'white',
        }}>
        <View style={{flex: 0.2}}>
          <Text style={{fontSize: 40, color: appColors?.black}}>
            Welcome back
          </Text>
          <Text
            style={{
              lineHeight: 22,
              color: appColors?.gray,
              width: '50%',
            }}>
            Sign in to continue using the app{' '}
          </Text>
        </View>
        <View style={{flex: 0.35}}>
          <CommonTextInput label={'Email/Phone'} />
          <CommonTextInput label={'Password'} />
        </View>
        <View style={{flex: 0.3}}>
          <View style={{flex: 0.3}}>
            <CommonButton
              onPress={() => {
                navigation?.navigate('SignSuccess');
              }}
            />
          </View>
          <View style={{flex: 0.3}}>
            <Text style={{color: appColors?.gray}}>
              You can continue signin through
            </Text>
            <View
              style={{
                marginTop: '5%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 270,
              }}>
              <Image source={imagePath?.Facebook} />
              <Image source={imagePath?.Google} />
            </View>
          </View>
        </View>
        <View style={{flex: 0.14}}>
          <Text style={{color: appColors?.gray}}>Issues in Log in ?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation?.navigate('ForgetPassword');
            }}>
            <Text style={{color: appColors?.orange}}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({});
