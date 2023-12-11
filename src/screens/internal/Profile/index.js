import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import {appColors} from '../../../utils/appColors';
import CommonHeader from '../../../components/CommonHeader';
import * as Progress from 'react-native-progress';
import ProfileBar from '../../../components/ProfileBar';
import {useAppCommonDataProvider} from '../../../navigation/AppCommonDataProvider';
const Profile = ({navigation}) => {
  const {colorScheme} = useAppCommonDataProvider();
  return (
    <ScreenWrapper statusBarColor="#8B7156">
      <View
        style={{
          flex: 1,
          backgroundColor: colorScheme === 'light' ? appColors?.white : 'black',
        }}>
        <View style={{flex: 2.5}}>
          <CommonHeader text={'Profile'} />
        </View>
        <View style={{flex: 10, paddingHorizontal: '4%', paddingTop: 30}}>
          <ScrollView>
            <ProfileBar
              progress={true}
              text={'Personal Profile'}
              onPress={() => {
                navigation?.navigate('PersonalProfile');
              }}
            />
            <ProfileBar
              progress={true}
              text={'Clinic Profile'}
              onPress={() => {
                navigation?.navigate('ClinicProfile');
              }}
            />
            <ProfileBar
              text={'Add Bank Account'}
              onPress={() => {
                navigation?.navigate('AddBankAccount');
              }}
            />
            <ProfileBar
              text={'working hours'}
              onPress={() => {
                navigation?.navigate('WorkingHours');
              }}
            />
            <ProfileBar
              text={'services'}
              onPress={() => {
                navigation?.navigate('ServicesScreen');
              }}
            />
            <ProfileBar
              text={'Verification'}
              onPress={() => {
                navigation?.navigate('VerificationDoc');
              }}
            />
            <ProfileBar
              text={'Verification'}
              onPress={() => {
                navigation?.navigate('VideoCall');
              }}
            />
          </ScrollView>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Profile;

const styles = StyleSheet.create({});
