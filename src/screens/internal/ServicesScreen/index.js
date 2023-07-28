import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import {appColors} from '../../../utils/appColors';
import CommonHeader from '../../../components/CommonHeader';
import {Switch} from 'react-native-paper';
const ServicesScreen = ({navigation}) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <ScreenWrapper statusBarColor={appColors?.brown}>
      <View style={{flex: 1, backgroundColor: appColors?.white}}>
        <View style={{flex: 0.2}}>
          <CommonHeader navigation={navigation} text={'Services'} />
        </View>
        <View style={{flex: 0.8, paddingHorizontal: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 20,
              alignItems: 'center',
              borderBottomColor: appColors?.gray,
              borderBottomWidth: 0.6,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: appColors?.black,
              }}>
              In-Clinic Appointments
            </Text>
            <Switch
              style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
              value={isSwitchOn}
              color="black"
              onValueChange={onToggleSwitch}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 20,
              alignItems: 'center',
              borderBottomColor: appColors?.gray,
              borderBottomWidth: 0.6,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: appColors?.black,
              }}>
              Video Calling
            </Text>
            <Switch
              style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
              value={isSwitchOn}
              color="black"
              onValueChange={onToggleSwitch}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 20,
              alignItems: 'center',
              borderBottomColor: appColors?.gray,
              borderBottomWidth: 0.6,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: appColors?.black,
              }}>
              Audio Calling
            </Text>
            <Switch
              style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
              value={isSwitchOn}
              color="black"
              onValueChange={onToggleSwitch}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 20,
              alignItems: 'center',
              borderBottomColor: appColors?.gray,
              borderBottomWidth: 0.6,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: appColors?.black,
              }}>
              Chat
            </Text>
            <Switch
              style={{
                transform: [{scaleX: 0.8}, {scaleY: 0.8}],
                paddingHorizontal: 5,
              }}
              color="black"
              value={isSwitchOn}
              onValueChange={onToggleSwitch}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ServicesScreen;

const styles = StyleSheet.create({});
