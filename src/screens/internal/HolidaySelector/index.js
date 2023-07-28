import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import {appColors} from '../../../utils/appColors';
import {imagePath} from '../../../utils/imagePath';

const HolidaySelector = ({navigation}) => {
  const [daySelect, setDaySelect] = useState([]);
  return (
    <ScreenWrapper>
      <View
        style={{
          flex: 1,
          backgroundColor: appColors?.white,
          paddingHorizontal: 20,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation?.goBack();
            }}>
            <Image source={imagePath?.back} tintColor={'black'} />
          </TouchableOpacity>
          <Text style={{fontSize: 28, fontWeight: '600'}}>Holidays</Text>
        </View>
        <View style={{marginTop: '10%', paddingHorizontal: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 20,
            }}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Monday</Text>
            <TouchableOpacity>
              <Image source={imagePath?.box} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 20,
            }}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Tuesday</Text>
            <Image source={imagePath?.box} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 20,
            }}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Wednesday</Text>
            <Image source={imagePath?.box} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 20,
            }}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Thursday</Text>
            <Image source={imagePath?.box} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 20,
            }}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Friday</Text>
            <Image source={imagePath?.box} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 20,
            }}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Saturday</Text>
            <Image source={imagePath?.box} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 20,
            }}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Sunday</Text>
            <Image source={imagePath?.box} />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default HolidaySelector;

const styles = StyleSheet.create({});
