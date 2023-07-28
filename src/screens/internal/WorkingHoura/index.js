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

const WorkingHours = ({navigation}) => {
  const [isVisible, setVisible] = useState(false);
  return (
    <ScreenWrapper statusBarColor={appColors?.white}>
      <View style={{flex: 1, backgroundColor: appColors?.white}}>
        <View style={{flex: 0.15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                navigation?.goBack();
              }}>
              <Image source={imagePath?.back} tintColor={'red'} />
            </TouchableOpacity>
            <View style={{backgroundColor: 'red', width: '100%'}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  color: appColors?.black,
                }}>
                Jo hoga deqha Jayega
              </Text>
              <View>
                <Text style={{color: appColors?.black}}>weekwew</Text>
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
                Monday
              </Text>
              <TouchableOpacity
                onPress={() => {
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
                Tuesday
              </Text>
              <TouchableOpacity
                onPress={() => {
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
            </View>
            <View
              style={{
                marginHorizontal: 20,
                paddingVertical: 30,
                borderBottomColor: '#979797',
                borderBottomWidth: 0.6,
              }}>
              <Text style={{fontSize: 20, fontWeight: '600'}}>Wednesday</Text>
              <TouchableOpacity
                onPress={() => {
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
                Thursday
              </Text>
              <TouchableOpacity
                onPress={() => {
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
              <TouchableOpacity
                onPress={() => {
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
            </View>
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
      />
    </ScreenWrapper>
  );
};

export default WorkingHours;

const styles = StyleSheet.create({});
