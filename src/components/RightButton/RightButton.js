import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/appColors';

const RightButton = ({onPress, disabled, select}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{
        height: 50,
        backgroundColor: disabled ? appColors?.lightGreen : appColors?.green,
        width: '100%',
        justifyContent: 'center',
        borderRadius: 10,
      }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '600',
          color: appColors?.white,
          alignSelf: 'center',
        }}>
        RightButton
      </Text>
    </TouchableOpacity>
  );
};

export default RightButton;

const styles = StyleSheet.create({});
