import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import {appColors} from '../../../utils/appColors';
import CommonHeader from '../../../components/CommonHeader';
import CommonInputBox from '../../../components/CommonInputBox';
import GenderSelectionModal from './GenderSelectionModal';

const PersonalProfile = ({navigation}) => {
  const [selectedGender, setSelectedGender] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [values, setValues] = useState({
    degree: '',
    speciality: [],
  });
  const handleGenderSelect = gender => {
    setSelectedGender(gender);
    setModalVisible(false);
    // onGenderSelected(gender);
  };
  const onFocus = () => {
    setModalVisible(true);
    console.log('onFocus');
  };
  return (
    <ScreenWrapper statusBarColor={appColors?.brown}>
      <View style={{flex: 1, backgroundColor: appColors?.white}}>
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
            <CommonInputBox label={'Email'} />
            <CommonInputBox label={'DOB'} />
            <CommonInputBox label={'Address'} />
            <CommonInputBox label={'Email'} />
            <CommonInputBox label={'Personal Contact Number'} />
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
              label={'Degree'}
              onPress={() => {
                navigation?.navigate('SingleDropDown');
              }}
            />
            <CommonInputBox
              label={'Splecilaity'}
              onPress={() => {
                navigation?.navigate('MultipleDropDown');
              }}
            />
            <CommonInputBox label={'Professialn'} />
            <CommonInputBox label={'exepreince'} />
          </ScrollView>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default PersonalProfile;

const styles = StyleSheet.create({});
