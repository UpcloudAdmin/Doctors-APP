import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {appColors} from '../../utils/appColors';
import {useAppCommonDataProvider} from '../../navigation/AppCommonDataProvider';
const CommonInputBox = ({
  label,
  onFocus,
  value,
  editable,
  onPress,
  onChangeText,
}) => {
  const {colorScheme} = useAppCommonDataProvider();
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
          backgroundColor: colorScheme === 'light' ? appColors?.white : 'black',
          height: 60,
          marginTop: 10,
          borderBottomWidth: colorScheme === 'light' ? 1 : 0,
          borderColor: appColors?.black,
        }}
        // editable={false}
        value={value}
        underlineColor={
          colorScheme === 'light' ? appColors?.white : appColors?.gray
        }
        placeholderTextColor={appColors?.gray}
        theme={{
          colors: {
            text: colorScheme === 'light' ? appColors?.black : appColors?.gray,
            underlineColor:
              colorScheme === 'light' ? appColors?.black : appColors?.gray,
            primary:
              colorScheme === 'light' ? appColors?.black : appColors?.gray,
          },
        }}
        label={label}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default CommonInputBox;

const styles = StyleSheet.create({});
