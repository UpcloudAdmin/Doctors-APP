import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';

import {Searchbar} from 'react-native-paper';
import ScreenWrapper from '../../../components/ScreenWrapper';
import {imagePath} from '../../../utils/imagePath';
import {appColors} from '../../../utils/appColors';
import {useFocusEffect} from '@react-navigation/native';
import {apiGetModule, apiPostModule} from '../../../utils/commonFunction';
import CommonButton from '../../../components/CommonButton';
import RightButton from '../../../components/RightButton/RightButton';
import {useAppCommonDataProvider} from '../../../navigation/AppCommonDataProvider';

const SelectDegree = ({navigation, route}) => {
  const {setCollege} = useAppCommonDataProvider();
  const [degree, setDegree] = useState([]);
  const [selectDegree, setSelectDegree] = useState('');
  useFocusEffect(
    useCallback(() => {
      getData();
    }, []),
  );
  const getData = async () => {
    console.log(route?.params, '<---params');
    const getCollege = await apiGetModule('v11/doctorlist/degreelist');
    console.log(getCollege?.degree, '<--getCollege');
    setDegree(getCollege?.degrees);
  };
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
          <Text style={{fontSize: 28, fontWeight: '600'}}>select Desgree</Text>
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
              style={{height: '85%', paddingTop: '5%'}}
              data={degree}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectDegree(item?.degree);
                    }}
                    style={{
                      borderBottomColor:
                        selectDegree === item?.degree ? 'green' : 'black',
                      borderBottomWidth: 1,
                      paddingVertical: '5%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '100%',
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 400,
                        width: '80%',
                        color:
                          selectDegree === item?.degree
                            ? appColors?.black
                            : appColors?.gray,
                      }}>
                      {item?.degree}
                    </Text>
                    {selectDegree === item?.degree && (
                      <Image source={imagePath?.tick} />
                    )}
                  </TouchableOpacity>
                );
              }}
            />
            <RightButton
              disabled={selectDegree === ''}
              onPress={() => {
                setCollege({
                  deg: selectDegree,
                  college: route?.params?.college,
                  passingYear: route?.params?.year,
                });
                navigation?.navigate('PersonalProfile');
              }}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SelectDegree;

const styles = StyleSheet.create({});
