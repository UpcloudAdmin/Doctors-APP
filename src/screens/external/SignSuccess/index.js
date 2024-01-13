import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import {appColors} from '../../../utils/appColors';
import {imagePath} from '../../../utils/imagePath';
import { useAppCommonDataProvider } from '../../../navigation/AppCommonDataProvider';

const SignSuccess = ({navigation}) => {
    const { colorScheme } = useAppCommonDataProvider();

  return (
    <ScreenWrapper
      statusBarColor={
        colorScheme === "light" ? appColors?.white : appColors?.black
      }
    >
      <View
        style={{
          backgroundColor:
            colorScheme === "light" ? appColors?.white : appColors?.black,
          flex: 1,
          paddingHorizontal: 50,
          paddingTop: "15%",
        }}
      >
        <Text
          style={{
            fontSize: 37,
            color:
              colorScheme === "light" ? appColors?.black : appColors?.white,
          }}
        >
          Successful
        </Text>
        <Image style={{ marginVertical: "15%" }} source={imagePath?.success} />
        <Text
          style={{ textAlign: "center", fontSize: 17, color: appColors?.gray }}
        >
          Signed Up Succesfully
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 17,
            color: appColors?.gray,
            marginVertical: "1%",
          }}
        >
          You have successfully Signed Up on the platform & the account is now
          secured to use.
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation?.navigate("TabNavigator");
          }}
          style={{
            backgroundColor:
              colorScheme === "light"
                ? appColors?.lightGray
                : appColors?.transprance,

            borderColor:
              colorScheme === "light" ? appColors?.white : appColors?.orange,
            borderWidth: 1,
            paddingVertical: "5%",
            justifyContent: "center",
            borderRadius: 10,
            top:8,
            marginHorizontal: 20,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize:20,
              color:
                colorScheme === "light"
                  ? appColors?.black
                  : appColors?.white,

            
            }}
          >
            Home
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default SignSuccess;

const styles = StyleSheet.create({});
