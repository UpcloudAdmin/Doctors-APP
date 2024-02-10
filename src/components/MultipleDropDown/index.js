import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../ScreenWrapper';
import {appColors} from '../../utils/appColors';
import {imagePath} from '../../utils/imagePath';
import {Searchbar} from 'react-native-paper';

const MultipleDropDown = ({navigation}) => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];
  const [speciality, setSpeciality] = useState([]);
  return (
    <ScreenWrapper>
      <View
        style={{
          flex: 1,
          backgroundColor: appColors?.white,
          paddingHorizontal: '7%',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation?.goBack();
            }}>
            <Image source={imagePath?.back} style={{tintColor: 'black'}} />
          </TouchableOpacity>
          <Text style={{fontSize: 28, fontWeight: '600'}}>Specialities</Text>
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
              style={{marginTop: '5%'}}
              data={speciality}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      const filtered = speciality?.filter(itm => itm !== item);
                      setSpeciality(filtered);
                    }}
                    style={{
                      paddingVertical: '2%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "400",
                        color: '#8A5D3C',
                      }}>
                      {item}
                    </Text>
                    <Image source={imagePath?.no} />
                  </TouchableOpacity>
                );
              }}
            />
            <FlatList
              style={{height: '90%', paddingTop: '5%'}}
              data={items}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setSpeciality([...speciality, item]);
                    }}
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
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default MultipleDropDown;

const styles = StyleSheet.create({});
