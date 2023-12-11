import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import {imagePath} from '../../../utils/imagePath';
import {appColors} from '../../../utils/appColors';
import {useFocusEffect} from '@react-navigation/native';
import {apiGetModule} from '../../../utils/commonFunction';
import {useAppCommonDataProvider} from '../../../navigation/AppCommonDataProvider';
import RightButton from '../../../components/RightButton/RightButton';

const MembershipSelect = ({navigation}) => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];
  const {setMembership} = useAppCommonDataProvider();
  const [state, setState] = useState([]);
  const [speciality, setSpeciality] = useState([]);
  useFocusEffect(
    useCallback(() => {
      getData();
    }, []),
  );
  useEffect(() => {
    setMembership(speciality);
  }, [speciality]);
  const getData = async () => {
    const getCollege = await apiGetModule('v11/doctorlist/membershiplist');
    console.log(getCollege, '<--getCollege');
    setState(getCollege?.members);
    // setCollege(getCollege?.colleges);
  };

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
              navigation?.navigate('PersonalProfile');
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
                      const filtered = speciality?.filter(
                        itm => itm !== item.membership,
                      );
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
                        fontWeight: 400,
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
              data={state}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setSpeciality([...speciality, item?.membership]);
                    }}
                    style={{
                      borderBottomColor: 'black',
                      borderBottomWidth: 0.6,
                      paddingVertical: '5%',
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 400,
                        color: appColors?.gray,
                      }}>
                      {item?.membership}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
            <View style={{backgroundColor: 'red', height: 100}} />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default MembershipSelect;

const styles = StyleSheet.create({});
