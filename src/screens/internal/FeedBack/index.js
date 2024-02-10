import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import {appColors} from '../../../utils/appColors';
import {imagePath} from '../../../utils/imagePath';
import NotificationTab from '../../../components/NotificationTab';
import {useAppCommonDataProvider} from '../../../navigation/AppCommonDataProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {apiPostModule} from '../../../utils/commonFunction';

const FeedBack = () => {
  useEffect(() => {
    getAllFeedBack();
  }, []);
  const getAllFeedBack = async () => {
    const info = await AsyncStorage.getItem('info');
    console.log(JSON.parse(info)?._id, '<--sdasdsadadsd');
    const res = await apiPostModule('v11/feedbacks/feedbacks', {
      doc_id: JSON.parse(info)?._id,
    });
    console.log(res, "<--responsee feedbacks");
  };
  const {colorScheme} = useAppCommonDataProvider();
  // const colorScheme = 'light';
  return (
    <ScreenWrapper
      statusBarColor={colorScheme === 'light' ? appColors?.white : 'black'}>
      <View
        style={{
          flex: 1,
        //  backgroundColor: "blue",
         // paddingHorizontal: 30,
          backgroundColor: colorScheme === 'light' ? appColors?.white : 'black',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            alignItems: 'center',
            marginTop:5,
            paddingHorizontal: 30,
          }}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: '600',
              color:
                colorScheme === 'light' ? appColors?.black : appColors?.white,
            }}>
            FeedBack
          </Text>
          <TouchableOpacity>
            <Image source={imagePath?.notification} />
          </TouchableOpacity>
        </View>
        <View style={{paddingTop: 25,}}>
          <NotificationTab />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default FeedBack;

const styles = StyleSheet.create({});
