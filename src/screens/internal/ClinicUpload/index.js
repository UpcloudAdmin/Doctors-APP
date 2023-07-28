import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import {appColors} from '../../../utils/appColors';
import Swiper from 'react-native-swiper';
import * as ImagePicker from 'react-native-image-picker';
import ImageSelectorModal from '../../../components/ImageSelectorModal';
const ClinicUpload = () => {
  const [filePath, setFilePath] = useState({});
  const [modalVisibility, setModalVisibility] = useState(false);
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
    <ScreenWrapper>
      <View style={{flex: 1, backgroundColor: appColors?.tan}}>
        <View style={{flex: 0.15, paddingHorizontal: 20, marginTop: '10%'}}>
          <Text
            style={{fontSize: 35, fontWeight: '400', color: appColors?.white}}>
            Select
          </Text>
          <Text style={{fontSize: 50, fontWeight: '600'}}>Upload</Text>
        </View>
        <View style={{flex: 0.8}}>
          <Swiper style={[styles.wrapper]} showsButtons={true}>
            <View style={styles.slide1}>
              <Text style={styles.text}>Hello Swiper</Text>
              <ImageSelectorModal visibility={modalVisibility} />
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Beautiful</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>And simple</Text>
            </View>
          </Swiper>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ClinicUpload;

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors?.tan,
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors?.tan,
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors?.tan,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
