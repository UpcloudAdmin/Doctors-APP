import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import {appColors} from '../../../utils/appColors';
import {imagePath} from '../../../utils/imagePath';

const SignSuccess = ({navigation}) => {
  return (
    <ScreenWrapper>
      <View
        style={{
          backgroundColor: appColors?.white,
          flex: 1,
          paddingHorizontal: 50,
          paddingTop: '15%',
        }}>
        <Text style={{fontSize: 37, color: appColors?.black}}>Successful</Text>
        <Image style={{marginVertical: '15%'}} source={imagePath?.success} />
        <Text
          style={{textAlign: 'center', fontSize: 17, color: appColors?.gray}}>
          Signed Up Succesfully
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 17,
            color: appColors?.gray,
            marginVertical: '1%',
          }}>
          You have successfully Signed Up on the platform & the account is now
          secured to use.
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation?.navigate('TabNavigator');
          }}
          style={{
            backgroundColor: appColors?.orange,
            paddingVertical: '5%',
            justifyContent: 'center',
            borderRadius: 10,
            marginHorizontal: 20,
          }}>
          <Text style={{textAlign: 'center'}}>Home</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default SignSuccess;

const styles = StyleSheet.create({});
