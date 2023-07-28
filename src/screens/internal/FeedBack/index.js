import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import {appColors} from '../../../utils/appColors';
import {imagePath} from '../../../utils/imagePath';
import NotificationTab from '../../../components/NotificationTab';

const FeedBack = () => {
  return (
    <ScreenWrapper>
      <View
        style={{
          flex: 1,
          backgroundColor: appColors?.white,
          paddingHorizontal: '7%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{fontSize: 28, fontWeight: '600', color: appColors?.black}}>
            FeedBack
          </Text>
          <TouchableOpacity>
            <Image source={imagePath?.notification} />
          </TouchableOpacity>
        </View>
        <View style={{paddingTop: 50}}>
          <NotificationTab />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default FeedBack;

const styles = StyleSheet.create({});
