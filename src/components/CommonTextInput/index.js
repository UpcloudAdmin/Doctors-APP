import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {imagePath} from '../../utils/imagePath';
import {appColors} from '../../utils/appColors';
import PasswordError from '../PasswordError';
import {useAppCommonDataProvider} from '../../navigation/AppCommonDataProvider';
const CommonTextInput = ({
  label,
  onChangeText,
  value,
  onChangeEye,
  eyeValue,
  initvalue,
  sucess,
  passwordFocus,
  onFocus,
  onBlur,
  style,
  maxlength,
}) => {
  const {colorScheme} = useAppCommonDataProvider();
  console.log(!passwordFocus && value?.length !== 0, passwordFocus, value);
  if (label?.includes('Password')) {
    return (
      <View style={{height: 75}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomColor: sucess ? appColors?.green : '#979797',
            borderBottomWidth: 0.6,
            width: 265,
            marginTop: '10%',
          }}>
          <TextInput
            secureTextEntry={eyeValue}
            placeholder={label}
            onFocus={onFocus}
            onBlur={onBlur}
            onChangeText={onChangeText}
            value={value}
            style={{
              width: '90%',
              height: 40,
              fontSize: 17,
              paddingBottom: 10,
              color: colorScheme === 'light' ? 'black' : 'white',
            }}
          />
          <TouchableOpacity
            onPress={onChangeEye}
            style={
              {
                // backgroundColor: 'red',
                // height: '80%',
              }
            }>
            <Image
              source={eyeValue ? imagePath?.eyeClose : imagePath?.eyeOpen}
              style={{
                height: 17,
                width: 17,
              }}
            />
          </TouchableOpacity>
        </View>
        {console.log(value, '<---valuevalue')}
        {value?.length !== 0 && (
          <View>
            <PasswordError
              passwordFocus={passwordFocus}
              passwordCheck={!passwordFocus && value?.length !== 0}
              value={value}
            />
          </View>
        )}
      </View>
    );
  }
  if (initvalue) {
    return (
      <View
        style={{
          height: 75,
          flexDirection: 'row',
          width: 265,
          height: 40,
          borderBottomColor: sucess ? appColors?.green : '#979797',
          borderBottomWidth: 0.6,
        }}>
        <Text
          style={{
            color: colorScheme === 'light' ? 'black' : 'white',
            marginRight: 10,
            fontSize: 17,
            justifyContent: 'center',
          }}>
          {initvalue}
        </Text>
        <TextInput
          onChangeText={onChangeText}
          maxLength={maxlength}
          value={value}
          placeholder={label}
          style={[
            {
              width: 252,
              height: 40,
              paddingBottom: 20,
              fontSize: 17,

              color: colorScheme === 'light' ? 'black' : 'white',
            },
            style,
          ]}
        />
      </View>
    );
  }
  return (
    <View style={{height: 75}}>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        placeholder={label}
        style={[
          {
            width: 265,
            height: 40,
            paddingBottom: 10,
            fontSize: 17,
            marginTop: '10%',
            borderBottomColor: sucess ? appColors?.green : '#979797',
            borderBottomWidth: 0.6,
            color: colorScheme === 'light' ? 'black' : 'white',
          },
          style,
        ]}
      />
    </View>
  );
};

export default CommonTextInput;

const styles = StyleSheet.create({});
