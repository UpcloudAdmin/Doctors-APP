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
            backgroundColor: textChecker
              ? appColors?.lightGreen
              : passwordFocus
              ? colorScheme === 'light'
                ? 'white'
                : 'black'
              : '#FF9393',
          },
        ]}>
        <Text
          style={[
            styles?.label,
            {color: textChecker ? 'green' : passwordFocus ? '#007AFF' : 'red'},
          ]}>
          A Alphabet
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles?.layer,
          {
            backgroundColor: numberChecker
              ? appColors?.lightGreen
              : passwordFocus
              ? colorScheme === 'light'
                ? 'white'
                : 'black'
              : '#FF9393',
          },
        ]}>
        <Text
          style={[
            styles?.label,
            {
              color: numberChecker
                ? 'green'
                : passwordFocus
                ? '#007AFF'
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
            backgroundColor: specialChecker
              ? appColors?.lightGreen
              : passwordFocus
              ? colorScheme === 'light'
                ? 'white'
                : 'black'
              : '#FF9393',
          },
        ]}>
        <Text
          style={[
            styles?.label,
            {
              color: specialChecker
                ? 'green'
                : passwordFocus
                ? '#007AFF'
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
            backgroundColor: valueLength
              ? appColors?.lightGreen
              : passwordFocus
              ? colorScheme === 'light'
                ? 'white'
                : 'black'
              : '#FF9393',
          },
        ]}>
        <Text
          style={[
            styles?.label,
            {color: valueLength ? 'green' : passwordFocus ? '#007AFF' : 'red'},
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
