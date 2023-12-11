import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import {appColors} from '../../../utils/appColors';
import CommonTextInput from '../../../components/CommonTextInput';
import CommonButton from '../../../components/CommonButton';
import {imagePath} from '../../../utils/imagePath';
import {PERMISSIONS, requestMultiple} from 'react-native-permissions';
import {apiPostModule} from '../../../utils/commonFunction';
import {useAppCommonDataProvider} from '../../../navigation/AppCommonDataProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const Login = ({navigation}) => {
  const {colorScheme} = useAppCommonDataProvider();
  const [loginValue, setLoginValue] = useState({
    email: '9463826048',
    password: 'Admin@1313',
    passwordeye: false,
    passwordFocus: false,
  });
  useEffect(() => {
    checkPrimission();
  }, []);

  const checkPrimission = async () => {
    requestMultiple([
      PERMISSIONS.IOS.CAMERA,
      PERMISSIONS.IOS.PHOTO_LIBRARY,
      PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY,
      PERMISSIONS?.IOS?.MICROPHONE,
    ]).then(itm => {
      console.log(itm, '<--sadas');
    });
  };

  const loginMethod = async () => {
    // navigation?.navigate('TabNavigator');
    const res = await apiPostModule('v11/user/login', {
      contact: loginValue?.email,
      password: loginValue?.password,
    });
    if (res?.status === 'success') {
      const deviceRes = await apiPostModule('v11/user/getDeviceToken', {
        token: res?.access_token,
        _id: res?.userInfo?._id,
        role: 'doctor',
      });
      console.log(deviceRes, '<-deviceRes');
      await AsyncStorage.setItem('token', JSON.stringify(res?.access_token));
      await AsyncStorage.setItem('info', JSON.stringify(res?.userInfo));
      navigation?.navigate('TabNavigator');
    }
    console.log(res, '<--sadas');
  };
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '112069212219-tk7odcavp85d9gpiv9kpll6ot055r027.apps.googleusercontent.com',
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, []);

  const googleSign = async () => {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log(userInfo, '<----userInfo');
  };
  return (
    <ScreenWrapper
      statusBarColor={colorScheme === 'light' ? appColors?.white : 'black'}>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingHorizontal: '7%',
          paddingTop: '15%',
          flex: 1,
          backgroundColor: colorScheme === 'light' ? appColors?.white : 'black',
        }}>
        <View style={{}}>
          <Text
            style={{
              fontSize: 40,
              color:
                colorScheme === 'light' ? appColors?.black : appColors?.white,
            }}>
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
        <View style={{marginBottom: 30}}>
          <CommonTextInput
            sucess={/^(?:\d{10}|\w+@\w+\.\w{2,3})$/.test(loginValue?.email)}
            value={loginValue?.email}
            label={'Email/Phone'}
            onChangeText={e => {
              setLoginValue({...loginValue, email: e});
            }}
          />
          <CommonTextInput
            label={'Password'}
            sucess={/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
              loginValue?.password,
            )}
            value={loginValue?.password}
            eyeValue={loginValue?.passwordeye}
            onFocus={() => {
              setLoginValue({...loginValue, passwordFocus: true});
            }}
            onBlur={() => {
              setLoginValue({...loginValue, passwordFocus: false});
            }}
            passwordFocus={loginValue?.passwordFocus}
            onChangeText={e => {
              setLoginValue({...loginValue, password: e});
            }}
            onChangeEye={() => {
              setLoginValue({
                ...loginValue,
                passwordeye: !loginValue?.passwordeye,
              });
            }}
          />
        </View>
        <View style={{}}>
          <View style={{marginTop: 20}}>
            <CommonButton
              buttonText={'Login'}
              onPress={() => {
                loginMethod();
              }}
            />
          </View>
          <View style={{marginTop: 20}}>
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
              <TouchableOpacity onPress={googleSign}>
                <Image source={imagePath?.Google} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{}}>
          <Text style={{color: appColors?.gray}}>Issues in Log in ?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation?.navigate('ForgetPassword');
            }}>
            <Text style={{color: appColors?.orange}}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({});
