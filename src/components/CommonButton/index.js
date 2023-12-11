import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {imagePath} from '../../utils/imagePath';
import {appColors} from '../../utils/appColors';

const CommonButton = ({onPress, buttonText, success}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 167,
        backgroundColor: success ? appColors?.orange : appColors?.lightGray,
        paddingVertical: '5%',
        paddingHorizontal: '5%',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 19,
          color: success ? appColors?.white : appColors?.black,
        }}>
        {buttonText}
      </Text>
      <Image
        tintColor={success ? appColors?.white : appColors?.black}
        source={imagePath?.arrow}
      />
    </TouchableOpacity>
  );
};

export default CommonButton;

const styles = StyleSheet.create({});
