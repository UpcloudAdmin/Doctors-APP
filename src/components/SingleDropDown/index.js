import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ScreenWrapper from '../ScreenWrapper';
import {appColors} from '../../utils/appColors';
import {imagePath} from '../../utils/imagePath';
import {Searchbar} from 'react-native-paper';

const SingleDropDown = ({navigation}) => {
  const items = ['chetan', 'bansal', 'swapnil', 4, 5, 6, 7, 8];
  return (
    <ScreenWrapper>
      <View
        style={{
          flex: 1,
          backgroundColor: appColors?.white,
          paddingHorizontal: '5%',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation?.goBack();
            }}>
            <Image source={imagePath?.back} style={{tintColor: 'black'}} />
          </TouchableOpacity>
          <Text style={{fontSize: 28, fontWeight: '600'}}>Degree</Text>
        </View>
        <View style={{paddingTop: 25}}>
          <View
            style={{
              height: 40,
              backgroundColor: appColors?.gray,
              borderRadius: 7,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
            }}>
            <Image source={imagePath?.eyeClose} />
            <TextInput
              style={{height: 40, paddingLeft: 20}}
              placeholder="searchbar"
            />
          </View>
          <View>
            <FlatList
              style={{height: '90%', paddingTop: '5%'}}
              data={items}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      borderBottomColor: 'black',
                      borderBottomWidth: 0.6,
                      paddingVertical: '5%',
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "400",
                        color: appColors?.gray,
                      }}>
                      {item}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SingleDropDown;

const styles = StyleSheet.create({});
