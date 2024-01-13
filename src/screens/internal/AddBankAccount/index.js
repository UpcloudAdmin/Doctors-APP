import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import {appColors} from '../../../utils/appColors';
import PaymentSelector from '../../../components/PaymentSelector';
import CommonHeader from '../../../components/CommonHeader';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CommonTextInput from '../../../components/CommonTextInput';
import SimpleButton from '../../../components/SimpleButton';
import BottomSheet from '@gorhom/bottom-sheet';
import {imagePath} from '../../../utils/imagePath';
import {useFocusEffect} from '@react-navigation/native';
import { useAppCommonDataProvider } from '../../../navigation/AppCommonDataProvider';

const AddBankAccount = ({navigation}) => {
  const userBottomSheetRef = useRef(null);
  const { colorScheme } = useAppCommonDataProvider();

  const [bankType, setBankType] = useState('');
  const [bottomShow, setBottomShow] = useState(0);
  const [bankinfo, setBankInfo] = useState({
    name: '',
    phone: '',
    accno: '',
    ifsc: '',
  });
  const [upiInfo, setUpiInfo] = useState({
    name: '',
    phone: '',
    upi: '',
  });
  useFocusEffect(
    useCallback(() => {
      setBottomShow(0);
      userBottomSheetRef?.current?.snapToIndex(0);
      console.log(userBottomSheetRef?.current, '<--wqeqwqwjknjkwkq');
    }, []),
  );
  const selectAdd = e => {
    setBankType(e);
    userBottomSheetRef?.current?.close();
  };
  return (
    <ScreenWrapper statusBarColor={appColors?.brown}>
      <View style={{ flex: 1, backgroundColor: appColors?.white }}>
        <View style={{ flex: 0.2 }}>
          <CommonHeader navigation={navigation} text={"ADD Account"} />
        </View>
        <View style={{ flex: 0.5, width: "100%", marginHorizontal: 20 }}>
          <KeyboardAwareScrollView contentContainerStyle={{}}>
            {bankType === "bank" && (
              <View>
                <CommonTextInput
                  label={"Name of holder"}
                  value={bankinfo?.name}
                  onChangeText={(e) => {
                    setBankInfo({ ...bankinfo, name: e });
                  }}
                  style={{ width: "90%", color: appColors?.black }}
                />
                <CommonTextInput
                  label={"Phone Number"}
                  keyboardType={"number-pad"}
                  value={bankinfo?.phone}
                  onChangeText={(e) => {
                    setBankInfo({ ...bankinfo, phone: e });
                  }}
                  style={{ width: "90%", color: appColors?.black }}
                />
                <CommonTextInput
                  keyboardType={"number-pad"}
                  value={bankinfo?.accno}
                  onChangeText={(e) => {
                    setBankInfo({ ...bankinfo, accno: e });
                  }}
                  label={"12 Digit Account no"}
                  style={{ width: "90%" }}
                />
                <CommonTextInput
                  label={"IFSC CODE"}
                  value={bankinfo?.ifsc}
                  onChangeText={(e) => {
                    setBankInfo({ ...bankinfo, ifsc: e });
                  }}
                  style={{ width: "90%", color: appColors?.black }}
                />
              </View>
            )}
            {bankType === "upi" && (
              <View>
                <CommonTextInput
                  label={"Name"}
                  value={upiInfo?.name}
                  onChangeText={(e) => {
                    setBankInfo({ ...upiInfo, name: e });
                  }}
                  style={{ width: "90%", color: appColors?.black }}
                />
                <CommonTextInput
                  label={"Phone Number"}
                  keyboardType={"number-pad"}
                  value={upiInfo?.phone}
                  onChangeText={(e) => {
                    setBankInfo({ ...upiInfo, name: phone });
                  }}
                  style={{ width: "90%", color: appColors?.black }}
                />
                <CommonTextInput label={"UPI Id"} style={{ width: "90%" }} />
              </View>
            )}
          </KeyboardAwareScrollView>
        </View>
      </View>
      <View style={{ flex: 0.1 }}>
        <SimpleButton
          buttonText={"Add Account"}
          width={"90%"}
          backgroundColor={{}}
        />
      </View>
      {console.log(bottomShow, "<---bottomShow")}
      <BottomSheet
        index={bottomShow}
        ref={userBottomSheetRef}
        snapPoints={["50%"]}
      >
        <View
          style={{
            paddingTop: "5%",
            flex: 1,
            paddingHorizontal: 20,
            backgroundColor:
              colorScheme === "light" ? appColors?.white : appColors?.black,
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "600",
              color:
                colorScheme === "light" ? appColors?.black : appColors?.white,
            }}
          >
            {"Select\nOption"}
          </Text>
          <TouchableOpacity
            onPress={() => {
              selectAdd("bank");
            }}
            style={{
              marginTop: 20,
              borderBottomColor: "green",
              borderBottomWidth: 1,
              paddingVertical: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={imagePath?.handCard}
              style={{ height: 55, width: 55, marginRight: 20 }}
            />
            <Text
              style={{
                fontSize: 15,
                fontWeight: "500",
                color:
                  colorScheme === "light" ? appColors?.black : appColors?.white,
              }}
            >
              Proceed with Bank Info
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              selectAdd("upi");
            }}
            style={{
              marginTop: 20,
              borderBottomColor: "green",
              borderBottomWidth: 1,
              paddingVertical: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={imagePath?.upi}
              style={{ height: 55, width: 55, marginRight: 20 }}
            />
            <Text
              style={{
                fontSize: 15,
                fontWeight: "500",
                color:
                  colorScheme === "light" ? appColors?.black : appColors?.white,
              }}
            >
              Proceed Through UPI ID
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </ScreenWrapper>
  );
};

export default AddBankAccount;

const styles = StyleSheet.create({});
