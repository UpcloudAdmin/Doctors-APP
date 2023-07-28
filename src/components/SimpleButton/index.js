import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const SimpleButton = ({buttonText, width, backgroundColor}) => {
  return (
    <TouchableOpacity
      style={{
        height: 50,
        justifyContent: 'center',
        backgroundColor: backgroundColor ? backgroundColor : 'red',
        width: width,
        alignSelf: 'center',
        borderRadius: 10,
      }}>
      <Text style={{textAlign: 'center'}}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default SimpleButton;

const styles = StyleSheet.create({});
