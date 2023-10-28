import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import {appColors} from '../../../utils/appColors';
import CommonHeader from '../../../components/CommonHeader';
import CommonInputBox from '../../../components/CommonInputBox';
import GenderSelectionModal from './GenderSelectionModal';
import {useAppCommonDataProvider} from '../../../navigation/AppCommonDataProvider';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {apiGetModule, apiPostModule} from '../../../utils/commonFunction';
import RightButton from '../../../components/RightButton/RightButton';
const PersonalProfile = ({navigation}) => {
  const {colorScheme, special, college, memberShip} =
    useAppCommonDataProvider();
  console.log(special, '<---sdasdasda');
  const [selectedGender, setSelectedGender] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [values, setValues] = useState({
    degree: '',
    speciality: [],
  });
  const [dateVisible, setDateVisible] = useState(false);
  const [profileData, setProfileDate] = useState({
    email: '',
    dob: new Date(),
    address: '',
    personalContactNumber: '',
    gender: '',
    degree: '',
    specility: '',
    name: '',
    experience: '',
  });
  const handleGenderSelect = gender => {
    setProfileDate({...profileData, gender: profileData});
    setSelectedGender(gender);
    setModalVisible(false);
    // onGenderSelected(gender);
  };
  const handleProfile = async () => {
    const data = {
      name: profileData?.name,
      primarySpeciality: 'Opthalmologist',
      city: 'asd',
      homeAddress: 'R.T. Road, Naya Bazaar',
      experience: profileData?.experience,
      lat: 22.76861,
      lon: 6542,
      dob: profileData?.dob,
      state: 'Jharkhand',
      locality: 'Jugsalai',
      pincode: 831006,
      gender: profileData?.gender,
      phoneNumber: profileData?.personalContactNumber,
      membership: memberShip,
      stream: 'eye',
      specialities: special,
      services: [],
      education: [
        {
          deg: college?.deg,
          college: college?.college,
          passingYear: college?.passingYear,
        },
      ],
      // registration: [
      //   {
      //     num: '987fdha8q63',
      //     council: 'delhi',
      //     year: 2016,
      //   },
      // ],
      about:
        "I am an eye doctor. I have a lot of experience in treating people's eyes.",
    };
    // const response = await apiPostModule("user/doctor/me")
  };
  const onFocus = () => {
    setModalVisible(true);
    console.log('onFocus');
  };
  console.log(special, '<----specialspecialspecial', college);
  console.log(profileData, '<--asdasdsdsa');
  return (
    <ScreenWrapper statusBarColor={appColors?.brown}>
      <View
        style={{
          flex: 1,
          backgroundColor: colorScheme === 'light' ? appColors?.white : 'black',
        }}>
        <View header={'PersonalProfile'} style={{flex: 0.23}}>
          <CommonHeader
            navigation={navigation}
            text={'Personal \n Porfile'}
            showProgress={true}
          />
        </View>
        <View style={{flex: 0.7}}>
          <ScrollView
            contentContainerStyle={{
              marginHorizontal: 27,
              marginTop: '7%',
              paddingBottom: 50,
            }}>
            <CommonInputBox
              label={'Name'}
              onChangeText={e => {
                setProfileDate({...profileData, name: e});
              }}
            />
            <CommonInputBox
              label={'Email'}
              onChangeText={e => {
                setProfileDate({...profileData, email: e});
              }}
            />
            <CommonInputBox
              label={'DOB'}
              value={moment(profileData?.dob)?.format('DD-MM-YYYY')}
              onPress={() => {
                setDateVisible(true);
              }}
            />
            <DatePicker
              modal
              open={dateVisible}
              date={new Date()}
              style={{width: 150}}
              mode="date"
              onConfirm={dates => {
                setDateVisible(false);
                setProfileDate({
                  ...profileData,
                  dob: dates,
                });
                console.log(dates, '<--sadasda');
                // setOpen(false);
                // setDate({
                //   date2: dates,
                //   ...date,
                // });
              }}
              onCancel={() => {
                setDateVisible(false);
                // setOpen(false);
              }}
            />
            <CommonInputBox
              label={'Address'}
              onPress={() => {
                navigation?.navigate('InnerAddress');
              }}
            />

            <CommonInputBox
              label={'Personal Contact Number'}
              onChangeText={e => {
                setProfileDate({...profileData, personalContactNumber: e});
              }}
            />
            <CommonInputBox
              editable={false}
              onFocus={onFocus}
              value={selectedGender}
              label={'gender'}
            />
            <GenderSelectionModal
              isVisible={modalVisible}
              selectedGender={selectedGender}
              handleGenderSelect={handleGenderSelect}
              label={'Gender'}
            />

            <CommonInputBox
              value={`${college?.passingYear},${college?.college},${college?.deg}`}
              label={'Degree'}
              onPress={() => {
                navigation?.navigate('SelectYear');
              }}
            />
            <CommonInputBox
              label={'Splecilaity'}
              value={special?.toString()}
              onPress={() => {
                navigation?.navigate('SelectSpecial');
              }}
            />
            <CommonInputBox
              label={'Membership'}
              value={memberShip?.toString()}
              onPress={() => {
                navigation?.navigate('MembershipSelect');
              }}
            />
            <CommonInputBox label={'Professialn'} />
            <CommonInputBox
              label={'exepreince'}
              onChangeText={e => {
                setProfileDate({...profileData, experience: e});
              }}
            />
          </ScrollView>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <RightButton
            onPress={() => {
              handleProfile();
            }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default PersonalProfile;

const styles = StyleSheet.create({});
