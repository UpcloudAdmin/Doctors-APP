import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import {appColors} from '../../../utils/appColors';
import CommonHeader from '../../../components/CommonHeader';
import {imagePath} from '../../../utils/imagePath';
import CommonTextInput from '../../../components/CommonTextInput';
import CommonInputBox from '../../../components/CommonInputBox';

const writeAddress = ({navigation}) => {
  const [address, setAddress] = useState({
    pincode: '',
    homeAddress: '',
    exactLocationOnMap: '',
    state: '',
    City: '',
  });
  return (
    <ScreenWrapper statusBarColor={appColors?.white}>
      <View style={{paddingTop: '5%', backgroundColor: 'white'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation?.goBack();
            }}>
            <Image source={imagePath?.back} tintColor={'black'} />
          </TouchableOpacity>
          <Text style={{fontSize: 28, fontWeight: '600'}}>Adress</Text>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            marginTop: '20%',
            backgroundColor: 'white',
            height: '100%',
          }}>
          <CommonInputBox
            label={'Pincode'}
            onChangeText={e => {
              setAddress({...address, pincode: e});
            }}
          />
          <CommonInputBox
            label={'exact location on map'}
            onChangeText={e => {
              setAddress({...address, exactLocationOnMap: e});
            }}
          />
          <CommonInputBox
            label={'State'}
            onChangeText={e => {
              setAddress({...address, state: e});
            }}
          />
          <CommonInputBox
            label={'City'}
            onChangeText={e => {
              setAddress({...address, City: e});
            }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default writeAddress;

const styles = StyleSheet.create({});
