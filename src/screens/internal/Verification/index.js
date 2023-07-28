import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import {appColors} from '../../../utils/appColors';
import CommonHeader from '../../../components/CommonHeader';
import * as ImagePicker from 'react-native-image-picker';
const VerificationDoc = ({navigation}) => {
  console.log(ImagePicker, '<---ImagePicker');
  const [filePath, setFilePath] = useState({});
  const chooseFile = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = {
        //   uri: 'data:image/jpeg;base64,' + response.data
        // };
        setFilePath(source);
      }
    });
  };
  return (
    <ScreenWrapper statusBarColor={appColors?.brown}>
      <View style={{flex: 1, backgroundColor: appColors?.white}}>
        <View style={{flex: 0.2}}>
          <CommonHeader navigation={navigation} text={'Profile'} />
        </View>
        <View style={{flex: 0.8}}>
          <ScrollView
            contentContainerStyle={{
              marginTop: '7%',
              paddingBottom: 20,
            }}>
            <View
              style={{
                paddingHorizontal: 20,
                borderBottomColor: appColors?.gray,
                borderBottomWidth: 0.6,
              }}>
              <Text
                style={{
                  paddingVertical: '5%',
                  fontSize: 16,
                  fontWeight: '600',
                  color: appColors?.black,
                }}>
                Dr. Ridhwik Submit Your Photo ID
              </Text>
              <Text
                style={{
                  fontWeight: '500',
                  lineHeight: 16,
                  marginBottom: 5,
                  color: appColors?.black,
                }}>
                For verification as well as for your patients to see. Documents
                Accepted - Passport, AadhaarUID, Pan card, Election commission
                card,Ration card with photo
              </Text>
              <View style={{paddingVertical: 10}}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '600',
                    color: appColors?.green,
                  }}>
                  Aadhar Verified
                </Text>
              </View>
            </View>
            <View
              style={{
                paddingHorizontal: 20,
                borderBottomColor: appColors?.gray,
                borderBottomWidth: 0.6,
              }}>
              <Text
                style={{
                  paddingVertical: '5%',
                  fontSize: 16,
                  fontWeight: '600',
                }}>
                Your Dr. Registration Document.
              </Text>
              <Text
                style={{fontWeight: '500', lineHeight: 16, marginBottom: 5}}>
                To verify that you are currently a registered healthcare
                practitioner.
              </Text>
              <View style={{paddingVertical: 10, flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '600',
                    color: '#4A90E2',
                  }}>
                  {'Add \nmore'}
                </Text>
                <TouchableOpacity>
                  <Text>Picker</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                paddingHorizontal: 20,
                borderBottomColor: appColors?.gray,
                borderBottomWidth: 0.6,
              }}>
              <Text
                style={{
                  paddingVertical: '5%',
                  fontSize: 16,
                  fontWeight: '600',
                  color: appColors?.black,
                }}>
                Your Clinic Ownership Document
              </Text>
              <Text
                style={{
                  fontWeight: '500',
                  lineHeight: 16,
                  marginBottom: 5,
                  color: appColors?.black,
                }}>
                To confirm that the clinic that you work in is registered as
                well. Document accepted - Clinic letterhead/ Prescription pad
                with details suggesting that you are the owner of the clinic,
                Clinic Registration proof, Document for waste disposal, Sales
                tax receipt for clinic.
              </Text>
              <View style={{paddingVertical: 10, flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '600',
                    color: '#4A90E2',
                  }}>
                  {'Add \nmore'}
                </Text>
                <TouchableOpacity onPress={chooseFile}>
                  <Text style={{color: appColors?.black}}> Picker</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginVertical: '20%'}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 12,
                  lineHeight: 18,
                  fontWeight: '300',
                  paddingHorizontal: 70,
                  color: appColors?.gray,
                }}>
                The Company Shall Verify The Documents & Pass If With A Verified
                Tag.
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default VerificationDoc;

const styles = StyleSheet.create({});
