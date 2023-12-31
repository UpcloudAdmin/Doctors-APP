import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {imagePath} from '../../utils/imagePath';
import {appColors} from '../../utils/appColors';
import {useAppCommonDataProvider} from '../../navigation/AppCommonDataProvider';

const NotificationTab = () => {
  const {colorScheme} = useAppCommonDataProvider();
  return (
    <View>
      <View style={{width: '90%'}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
            marginBottom: '3%',
            paddingLeft: 10,
            color:
              colorScheme === 'light' ? appColors?.black : appColors?.white,
          }}>
          Aashay Shirsawade
        </Text>
        <View
          style={{
            backgroundColor: '#3C4B32',
            borderRadius: 12,
            paddingHorizontal: 10,
            paddingVertical: 10,
            paddingBottom: 15,
          }}>
          <Text
            style={{
              textAlign: 'right',
              fontSize: 10,
              fontWeight: '700',
              color:
                colorScheme === 'light' ? appColors?.black : appColors?.white,
            }}>
            19 June, 21:22
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color:
                colorScheme === 'light' ? appColors?.black : appColors?.white,
            }}>
            M/ 21
          </Text>
          <Text
            style={{
              paddingTop: '2%',
              fontSize: 15,
              fontWeight: '500',
              color:
                colorScheme === 'light' ? appColors?.black : appColors?.white,
            }}>
            It has been a week since my last consultancy and there has been a
            visible decrease in my pain. Thank you!
          </Text>
        </View>
        <View
          style={{
            paddingTop: '4%',
            flexDirection: 'row',
            width: '40%',
            paddingHorizontal: 10,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              color:
                colorScheme === 'light' ? appColors?.black : appColors?.gray,
            }}>
            reply
          </Text>
          <TouchableOpacity>
            <Image source={imagePath?.like} style={{height: 17, width: 17}} />
          </TouchableOpacity>
        </View>
        <View>
          <View
            style={{
              backgroundColor: '#666666',
              width: '90%',
              marginLeft: '20%',
              paddingVertical: '4%',
              marginTop: '5%',
              borderRadius: 10,
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '600',
                textAlign: 'right',
                paddingBottom: '3%',
                color:
                  colorScheme === 'light' ? appColors?.black : appColors?.white,
              }}>
              11 March, 18:27
            </Text>
            <Text
              style={{
                color:
                  colorScheme === 'light' ? appColors?.black : appColors?.white,
              }}>
              Thank you, Mr. Ram for your positive reply! I am glad that you
              find this platform an our services effective. Your{' '}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width: '90%',
            marginLeft: '20%',
            color: appColors?.black,
          }}>
          <Text
            style={{
              paddingRight: '5%',
              color:
                colorScheme === 'light' ? appColors?.black : appColors?.gray,
            }}>
            edited
          </Text>
          <Text style={{color: '#007AFF', fontSize: 13, fontWeight: '600'}}>
            read more
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NotificationTab;

const styles = StyleSheet.create({});
