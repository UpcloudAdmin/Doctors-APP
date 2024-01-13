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
import { connect, useSelector, useDispatch } from "react-redux";
import { getCollegeListAction } from '../../../redux/action/Collegelist';
import CustomMessage from '../../../utils/CustomMessage';


const SelectCollege = ({navigation, route}) => {
    const dispatch = useDispatch();

  const [college, setCollege] = useState([]);
  const [selectCollege, setSelectCollege] = useState('');
  useFocusEffect(
    useCallback(() => {
      getData();
    }, []),
  );
  const getData = async () => {
    // const getCollege = await apiGetModule('v11/doctorlist/collegelist');
    // console.log(getCollege?.colleges, '<--getCollege');
    // setCollege(getCollege?.colleges);
    dispatch({
      type: getCollegeListAction?.types?.start,
      extraData: (collegeList) => {
        console.log("collegeList", collegeList);
        if (collegeList?.status === 200) {
          if (collegeList?.data?.status == "success") {
            // navigation?.navigate("Login");
            CustomMessage(collegeList?.data?.message, "success");
            setCollege(collegeList?.colleges);
          }
        } else {
          CustomMessage(err?.response?.data?.message?.message, "danger");
        }
      },
      onError: (err) => {
        console.log("err", err);
        //CustomMessage(err?.response?.data?.message?.message, "danger");
      },
    });
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
          <Text style={{fontSize: 28, fontWeight: '600'}}>select College</Text>
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
          {console.log(college, '<---collegecollegecollege')}
          <View>
            <FlatList
              style={{height: '85%', paddingTop: '5%'}}
              data={college}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectCollege(item?.collegeName);
                    }}
                    style={{
                      borderBottomColor:
                        selectCollege === item?.collegeName ? 'green' : 'black',
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
                          selectCollege === item?.collegeName
                            ? appColors?.black
                            : appColors?.gray,
                      }}>
                      {item?.collegeName}
                    </Text>
                    {selectCollege === item?.collegeName && (
                      <Image source={imagePath?.tick} />
                    )}
                  </TouchableOpacity>
                );
              }}
            />
            <RightButton
              disabled={selectCollege === ''}
              onPress={() => {
                navigation?.navigate('SelectDegree', {
                  year: route?.params?.year,
                  college: selectCollege,
                });
                console.log('this is pressed');
              }}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SelectCollege;

const styles = StyleSheet.create({});
