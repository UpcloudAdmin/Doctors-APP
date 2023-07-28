import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/appColors';
import {useAppCommonDataProvider} from '../../navigation/AppCommonDataProvider';

const PasswordError = ({passwordFocus, passwordCheck, value}) => {
  const textChecker = /.*[a-zA-Z]+.*/.test(value);
  const numberChecker = /.*[0-9].*/.test(value);
  const specialChecker = /.*[!@#$%^&*(),.?":{}|<>].*/.test(value);
  const valueLength = value?.length >= 8 ? true : false;
  const {colorScheme} = useAppCommonDataProvider();
  console.log(passwordCheck, '<---passwordCheckpasswordCheck', specialChecker);
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        style={[
          styles?.layer,
          {
            backgroundColor: passwordFocus
              ? colorScheme === 'light'
                ? 'white'
                : 'black'
              : textChecker
              ? appColors?.lightGreen
              : '#FF9393',
          },
        ]}>
        <Text
          style={[
            styles?.label,
            {color: passwordFocus ? '#007AFF' : textChecker ? 'green' : 'red'},
          ]}>
          A Alphabet
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles?.layer,
          {
            backgroundColor: passwordFocus
              ? colorScheme === 'light'
                ? 'white'
                : 'black'
              : numberChecker
              ? appColors?.lightGreen
              : '#FF9393',
          },
        ]}>
        <Text
          style={[
            styles?.label,
            {
              color: passwordFocus
                ? '#007AFF'
                : numberChecker
                ? 'green'
                : 'red',
            },
          ]}>
          1 numeric
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles?.layer,
          {
            backgroundColor: passwordFocus
              ? colorScheme === 'light'
                ? 'white'
                : 'black'
              : specialChecker
              ? appColors?.lightGreen
              : '#FF9393',
          },
        ]}>
        <Text
          style={[
            styles?.label,
            {
              color: passwordFocus
                ? '#007AFF'
                : specialChecker
                ? 'green'
                : 'red',
            },
          ]}>
          # Special
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles?.layer,
          {
            backgroundColor: passwordFocus
              ? colorScheme === 'light'
                ? 'white'
                : 'black'
              : valueLength
              ? appColors?.lightGreen
              : '#FF9393',
          },
        ]}>
        <Text
          style={[
            styles?.label,
            {
              color: passwordFocus ? '#007AFF' : valueLength ? 'green' : 'red',
            },
          ]}>
          8 Character
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PasswordError;

const styles = StyleSheet.create({
  label: {
    fontSize: 10,
    fontWeight: '500',
    alignSelf: 'center',
  },
  layer: {
    width: 65,
    borderRadius: 6,
    backgroundColor: '#FF9393',
    height: 18,
    marginHorizontal: 1,
    marginTop: 5,
    justifyContent: 'center',
  },
});
