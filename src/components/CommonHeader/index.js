import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {imagePath} from '../../utils/imagePath';
import {appColors} from '../../utils/appColors';
import * as Progress from 'react-native-progress';
const CommonHeader = ({showProgress, text, navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#8B7156'}}>
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 0.6,

            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: '4%',
            backgroundColor: '#8B7156',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation?.goBack();
              }}>
              <Image source={imagePath?.back} style={{resizeMode: 'contain'}} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 28,
                color: appColors?.white,
                fontWeight: '600',
              }}>
              {text}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '22%',
            }}>
            <Image source={imagePath?.settings} />
            <Image source={imagePath?.demoProfile} />
          </View>
        </View>
        {showProgress && (
          <View
            style={{
              alignItems: 'center',
              flex: 0.3,
              backgroundColor: '#8B7156',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 320,
                marginBottom: 5,
              }}>
              <Text style={{color: appColors?.loaderColor}}>
                Profile Complete
              </Text>
              <Text style={{color: appColors?.loaderColor}}>100</Text>
            </View>
            <Progress.Bar
              color={appColors?.loaderColor}
              progress={0.5}
              width={320}
            />
            <Text style={{paddingTop: 5, color: appColors?.loaderColor}}>
              57
            </Text>
          </View>
        )}
        {!showProgress && (
          <View
            style={{
              flex: 0.4,
              backgroundColor: '#af977e',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: '6%',
              alignItems: 'center',
            }}>
            <View style={{paddingLeft: '9%'}}>
              <Text
                style={{
                  color: appColors?.white,
                  fontWeight: '600',
                  fontSize: 15,
                }}>
                Contact us
              </Text>
              <Text
                style={{
                  color: appColors?.white,
                  fontWeight: '600',
                  fontSize: 10,
                }}>
                v 1.0
              </Text>
            </View>
            <Image source={imagePath?.mail} />
          </View>
        )}
      </View>
    </View>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({});
