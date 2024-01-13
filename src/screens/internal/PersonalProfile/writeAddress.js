import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import {appColors} from '../../../utils/appColors';
import CommonHeader from '../../../components/CommonHeader';
import {imagePath} from '../../../utils/imagePath';
import CommonTextInput from '../../../components/CommonTextInput';
import CommonInputBox from '../../../components/CommonInputBox';
import { useAppCommonDataProvider } from '../../../navigation/AppCommonDataProvider';

const WriteAddress = ({navigation}) => {
    const { colorScheme } = useAppCommonDataProvider()

  const [address, setAddress] = useState({
    pincode: '',
    homeAddress: '',
    exactLocationOnMap: '',
    state: '',
    City: '',
  });
  return (
    <ScreenWrapper
      statusBarColor={colorScheme === "light" ? appColors?.white : "black"}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor:
              colorScheme === "light" ? appColors?.white : "black",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation?.goBack();
            }}
          >
            <Image
              source={imagePath?.back}
              tintColor={colorScheme === "light" ? "black" : appColors.white}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 28,
              fontWeight: "600",
              color: colorScheme === "light" ? "black" : appColors.white,
            }}
          >
            Address
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            // marginTop: "20%",
            backgroundColor:
              colorScheme === "light" ? appColors?.white : "black",

            // height: '100%',
          }}
        >
          <CommonInputBox
            label={"Pincode"}
            onChangeText={(e) => {
              setAddress({ ...address, pincode: e });
            }}
          />
          <CommonInputBox
            label={"exact location on map"}
            onChangeText={(e) => {
              setAddress({ ...address, exactLocationOnMap: e });
            }}
          />
          <CommonInputBox
            label={"State"}
            onChangeText={(e) => {
              setAddress({ ...address, state: e });
            }}
          />
          <CommonInputBox
            label={"City"}
            onChangeText={(e) => {
              setAddress({ ...address, City: e });
            }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default WriteAddress;

const styles = StyleSheet.create({});
