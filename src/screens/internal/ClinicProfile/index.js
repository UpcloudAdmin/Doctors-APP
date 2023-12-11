import {StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import {appColors} from '../../../utils/appColors';
import CommonHeader from '../../../components/CommonHeader';
import CommonInputBox from '../../../components/CommonInputBox';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as ImagePicker from 'react-native-image-picker';
import {useAppCommonDataProvider} from '../../../navigation/AppCommonDataProvider';
const ClinicProfile = ({navigation}) => {
  const {colorScheme, clinicServices} = useAppCommonDataProvider();
  const [clinic, setClinic] = useState(0);
  const [clinicData, setClinicData] = useState([
    {
      type: '',
      name: '',
      address: '',
      contact: '',
      services: '',
      issues: '',
      holidays: '',
      avgpt: '',
    },
    {
      type: '',
      name: '',
      address: '',
      contact: '',
      services: '',
      issues: '',
      holidays: '',
      avgpt: '',
    },
  ]);
  console.log(clinic, '<--wqweqwe');
  return (
    <ScreenWrapper statusBarColor={appColors?.brown}>
      <View
        style={{
          flex: 1,
          backgroundColor: colorScheme === 'light' ? appColors?.white : 'black',
        }}>
        <View style={{flex: 0.23}}>
          <CommonHeader
            navigation={navigation}
            text={'Clinic \n Porfile'}
            showProgress={true}
          />
        </View>
        <View
          style={{
            paddingHorizontal: '20%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '5%',
          }}>
          <TouchableOpacity
            onPress={() => {
              setClinic(0);
            }}
            style={[
              {
                padding: 5,
                backgroundColor: 'white',
                borderRadius: 10,
                shadowOpacity: clinic === 0 ? 0.3 : 0,
                shadowRadius: clinic === 0 ? 0.3 : 0,
                width: 61,
              },
              clinic === 0 && {
                backgroundColor: '#d9d9d9',
                shadowColor: '#000000',
              },
            ]}>
            <Text
              style={{
                fontSize: 16,
                color: appColors?.brown,
                fontWeight: '600',
              }}>
              Clinic1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setClinic(1);
            }}
            style={[
              {
                padding: 5,
                backgroundColor: 'white',
                borderRadius: 10,
                shadowOpacity: clinic === 1 ? 0.3 : 0,
                shadowRadius: clinic === 1 ? 0.3 : 0,
                width: 61,
              },
              clinic === 1 && {
                backgroundColor: '#d9d9d9',
                shadowColor: '#000000',
              },
            ]}>
            <Text
              style={{
                fontSize: 16,
                color: appColors?.brown,
                fontWeight: '600',
              }}>
              Clinic1
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.07, paddingHorizontal: 30}}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderWidth: 1,
              borderColor: '#F5A623',
              borderRadius: 10,
              marginTop: 10,
            }}>
            <Text style={{fontSize: 16, fontWeight: '600'}}>
              Non - Practising
            </Text>
            <Switch value={true} />
          </View>
        </View>
        <View style={{flex: 0.7, paddingHorizontal: 30}}>
          <KeyboardAwareScrollView>
            <CommonInputBox
              onChangeText={e => {
                setClinicData({...clinicData, type: e});
              }}
              label={'Clinic type'}
            />
            <CommonInputBox
              label={'Clinic Name'}
              onChangeText={e => {
                setClinicData({...clinicData, name: e});
              }}
            />
            <CommonInputBox
              label={'Clinic Address'}
              onChangeText={e => {
                setClinicData({...clinicData, address: e});
              }}
            />
            <CommonInputBox
              label={'Clinic Contact Number'}
              onChangeText={e => {
                setClinicData({...clinicData, contact: e});
              }}
            />
            <CommonInputBox
              label={'Clinic Services'}
              value={clinicServices.toString()}
              onPress={() => {
                navigation?.navigate('ClinicService');
              }}
            />
            <CommonInputBox
              label={'Clinic Issues'}
              onChangeText={e => {
                setClinicData({...clinicData, issues: e});
              }}
            />
            <CommonInputBox
              label={'Holidays'}
              onPress={() => {
                navigation?.navigate('HolidaySelector');
              }}
            />
            <CommonInputBox
              label={'Avg pt day'}
              onChangeText={e => {
                setClinicData({...clinicData, avgpt: e});
              }}
            />
          </KeyboardAwareScrollView>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ClinicProfile;

const styles = StyleSheet.create({});
