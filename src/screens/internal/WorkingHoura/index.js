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
import {Image} from 'react-native';
import {imagePath} from '../../../utils/imagePath';
import SessionModal from './SessionModal';
import moment from 'moment';

const WorkingHours = ({navigation}) => {
  const [isVisible, setVisible] = useState(false);
  const [workHours, setWorkHours] = useState({
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
  });
  const [daySelect, setDaySelect] = useState('');
  return (
    <ScreenWrapper statusBarColor={appColors?.white}>
      <View style={{flex: 1, backgroundColor: appColors?.white}}>
        <View style={{flex: 0.15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                navigation?.goBack();
              }}>
              <Image source={imagePath?.back} tintColor={'black'} />
            </TouchableOpacity>
            <View style={{width: '100%'}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  color: appColors?.black,
                }}>
                Katare’s Integrative Health & Gastro ..
              </Text>
              <View>
                <Text style={{color: appColors?.black}}>same for weekdays</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            borderTopColor: 'black',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              paddingVertical: 10,
              paddingHorizontal: 50,
              color: appColors?.black,
            }}>
            Working Days
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              paddingVertical: 10,
              paddingHorizontal: 50,
              color: appColors?.blue,
            }}>
            Edit
          </Text>
        </View>
        <View style={{flex: 0.65}}>
          <ScrollView>
            <View
              style={{
                marginHorizontal: 20,
                paddingVertical: 30,
                borderBottomColor: '#979797',
                borderBottomWidth: 0.6,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  color: appColors?.black,
                }}>
                Monday - Wendensday
              </Text>
              {workHours?.monday?.map(itm => {
                return (
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{marginRight: 20}}>slot 1</Text>
                    <Text>{itm}</Text>
                  </View>
                );
              })}
              {workHours?.monday.length < 2 && (
                <TouchableOpacity
                  onPress={() => {
                    setDaySelect('monday');
                    setVisible(true);
                  }}>
                  <Text
                    style={{
                      paddingTop: 30,
                      fontSize: 16,
                      fontWeight: '600',
                      textAlign: 'center',
                      color: '#007AFF',
                    }}>
                    Add a Clinic Session{' '}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            <View
              style={{
                marginHorizontal: 20,
                paddingVertical: 30,
                borderBottomColor: '#979797',
                borderBottomWidth: 0.6,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  color: appColors?.black,
                }}>
                Friday
              </Text>
              {workHours?.tuesday?.map(itm => {
                return (
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{marginRight: 20}}>slot 1</Text>
                    <Text>{itm}</Text>
                  </View>
                );
              })}
              {workHours?.tuesday.length < 2 && (
                <TouchableOpacity
                  onPress={() => {
                    setDaySelect('tuesday');
                    setVisible(true);
                  }}>
                  <Text
                    style={{
                      paddingTop: 30,
                      fontSize: 16,
                      fontWeight: '600',
                      textAlign: 'center',
                      color: '#007AFF',
                    }}>
                    Add a Clinic Session{' '}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            <View
              style={{
                marginHorizontal: 20,
                paddingVertical: 30,
                borderBottomColor: '#979797',
                borderBottomWidth: 0.6,
              }}>
              <Text style={{fontSize: 20, fontWeight: '600'}}>Sunday</Text>
              {workHours?.wednesday?.map(itm => {
                return (
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{marginRight: 20}}>slot 1</Text>
                    <Text>{itm}</Text>
                  </View>
                );
              })}
              {workHours?.wednesday.length < 2 && (
                <TouchableOpacity
                  onPress={() => {
                    setDaySelect('wednesday');
                    setVisible(true);
                  }}>
                  <Text
                    style={{
                      paddingTop: 30,
                      fontSize: 16,
                      fontWeight: '600',
                      textAlign: 'center',
                      color: '#007AFF',
                    }}>
                    Add a Clinic Session{' '}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            {/* <View
              style={{
                marginHorizontal: 20,
                paddingVertical: 30,
                borderBottomColor: '#979797',
                borderBottomWidth: 0.6,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  color: appColors?.black,
                }}>
                Thursday
              </Text>
              {workHours?.thursday?.map(itm => {
                return (
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{marginRight: 20}}>slot 1</Text>
                    <Text>{itm}</Text>
                  </View>
                );
              })}
              {workHours?.thursday.length < 2 && (
                <TouchableOpacity
                  onPress={() => {
                    setDaySelect('thursday');
                    setVisible(true);
                  }}>
                  <Text
                    style={{
                      paddingTop: 30,
                      fontSize: 16,
                      fontWeight: '600',
                      textAlign: 'center',
                      color: '#007AFF',
                    }}>
                    Add a Clinic Session{' '}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            <View
              style={{
                marginHorizontal: 20,
                paddingVertical: 30,
                borderBottomColor: '#979797',
                borderBottomWidth: 0.6,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  color: appColors?.black,
                }}>
                Friday
              </Text>
              {workHours?.friday?.map(itm => {
                return (
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{marginRight: 20}}>slot 1</Text>
                    <Text>{itm}</Text>
                  </View>
                );
              })}
              {workHours?.friday.length < 2 && (
                <TouchableOpacity
                  onPress={() => {
                    setDaySelect('friday');
                    setVisible(true);
                  }}>
                  <Text
                    style={{
                      paddingTop: 30,
                      fontSize: 16,
                      fontWeight: '600',
                      textAlign: 'center',
                      color: '#007AFF',
                    }}>
                    Add a Clinic Session{' '}
                  </Text>
                </TouchableOpacity>
              )}
            </View> */}
          </ScrollView>
        </View>
        <View
          style={{
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            borderTopColor: 'black',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              paddingVertical: 10,
              paddingHorizontal: 50,
              color: appColors?.black,
            }}>
            Holidays
          </Text>
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            color: appColors?.black,
          }}>
          Monday - Wendensday
        </Text>
        <View
          style={{
            flex: 0.15,
            justifyContent: 'center',
          }}>
          <TouchableOpacity>
            <Text
              style={{
                textAlign: 'center',
                color: '#007AFF',
                textDecorationLine: 'underline',
              }}>
              Tap to declare a holiday
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <SessionModal
        isVisible={isVisible}
        setVisible={() => {
          setVisible(false);
        }}
        setTime={e => {
          console.log(workHours, daySelect, '<----sqweqweqwe', e);
          setWorkHours({
            ...workHours,
            [daySelect]: [...workHours[daySelect], e],
          });
          console.log(e, '<--wqeqweqeqw');
          setVisible(false);
        }}
      />
    </ScreenWrapper>
  );
};

export default WorkingHours;

const styles = StyleSheet.create({});
