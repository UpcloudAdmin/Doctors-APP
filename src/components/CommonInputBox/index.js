import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {appColors} from '../../utils/appColors';
const CommonInputBox = ({label, onFocus, value, editable, onPress}) => {
  return (
    <View
      onTouchStart={onPress}
      // onStartShouldSetResponder={() => true}
      // onStartShouldSetResponder={() => console.log('view pressed')}
      style={{}}>
      <TextInput
        onFocus={onFocus}
        style={{
          width: '100%',
          backgroundColor: appColors?.white,
          height: 60,
          marginTop: 10,
        }}
        // editable={false}
        value={value}
        underlineColor={'black'}
        placeholderTextColor={appColors?.gray}
        theme={{
          colors: {
            text: 'black',
            underlineColor: 'black',
            primary: 'black',
          },
        }}
        label={label}
        onChangeText={text => console.log(text, '<--sadsad')}
      />
    </View>
  );
};

export default CommonInputBox;

const styles = StyleSheet.create({});
