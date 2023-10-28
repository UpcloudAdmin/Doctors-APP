import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import CommonTextInput from '../../../components/CommonTextInput';
import CommonButton from '../../../components/CommonButton';
import {appColors} from '../../../utils/appColors';
import {useAppCommonDataProvider} from '../../../navigation/AppCommonDataProvider';

const EnterPhone = ({navigation}) => {
  const {colorScheme} = useAppCommonDataProvider();
  const [number, setNumber] = useState('');
  return (
    <ScreenWrapper
      statusBarColor={colorScheme === 'light' ? appColors?.white : 'black'}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: '7%',
          paddingTop: '15%',
          backgroundColor: colorScheme === 'light' ? appColors?.white : 'black',
        }}>
        <View style={{flex: 0.25, flexDirection: 'row'}}>
          <View style={{width: '90%'}}>
            <Text
              style={{
                fontSize: 40,
                color:
                  colorScheme === 'light' ? appColors?.black : appColors?.white,
              }}>
              {'Enter \nPhone Number'}
            </Text>
            <Text style={{lineHeight: 22, color: appColors?.gray}}>
              Enter your 10 digit mobile number to proceed further{' '}
            </Text>
          </View>
        </View>
        <View style={{flex: 0.4}}>
          <CommonTextInput
            initvalue={'+91'}
            maxlength={10}
            onChangeText={e => {
              setNumber(e);
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation?.navigate('Login');
          }}
          style={{
            width: '100%',
            paddingVertical: '5%',
            backgroundColor:
              number.length === 10 ? appColors?.orange : appColors?.lightGray,
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: number.length === 10 ? appColors?.white : appColors?.black,
            }}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default EnterPhone;

const styles = StyleSheet.create({});
