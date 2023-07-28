import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import {appColors} from '../../../utils/appColors';
import {imagePath} from '../../../utils/imagePath';
import ListItems from './ListItems';

const DisplayProfile = () => {
  return (
    <ScreenWrapper statusBarColor={appColors?.white}>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: appColors?.white,
          height: 2400,
        }}>
        <Image
          source={imagePath?.docProfile}
          style={{width: '100%', height: 315, resizeMode: 'cover'}}
        />
        <View
          style={{marginTop: 30, marginHorizontal: 10, flexDirection: 'row'}}>
          <Text
            style={{fontSize: 17, fontWeight: '700', color: appColors?.black}}>
            13
          </Text>
          <View style={{marginTop: 17, flexDirection: 'row'}}>
            <Image
              source={imagePath?.docProfile}
              style={{width: 70, height: 70, borderRadius: 5}}
            />
            <View style={{marginLeft: 15, justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '400',
                  color: appColors?.black,
                }}>
                Dr. Swapnil Katare
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '600',
                  color: appColors?.black,
                }}>
                Ayurveda - Diabetiologist
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '700',
                    color: appColors?.black,
                  }}>
                  {'Mumbai    |'}
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '400',
                    color: appColors?.black,
                  }}>
                  {'  Maharashtra'}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{marginHorizontal: 30}}>
          <View style={{flexDirection: 'row', marginTop: 25}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                justifyContent: 'center',
                color: appColors?.black,
              }}>
              Phone no :{' '}
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '400',
                justifyContent: 'center',
                color: appColors?.black,
              }}>
              {'   9230173019, 9002230341'}
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                justifyContent: 'center',
                color: appColors?.black,
              }}>
              Unique id
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '400',
                justifyContent: 'center',
                color: appColors?.black,
              }}>
              {'  9230173019, 9002230341'}
            </Text>
          </View>
          <View style={{marginTop: 30}}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: '700',
                color: appColors?.black,
              }}>
              Activity
            </Text>
          </View>
          <View style={{marginTop: 30}}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: '600',
                color: appColors?.black,
              }}>
              Education
            </Text>
            <View style={{marginTop: 10}}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '700',
                  marginTop: 10,
                  color: appColors?.black,
                }}>
                {' '}
                BHMS
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  marginTop: 10,
                  color: appColors?.black,
                }}>
                {' '}
                Maulana Azad Dental College ,Bhopal
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '700',
                  marginTop: 10,
                  color: appColors?.black,
                }}>
                {' '}
                2015
              </Text>
            </View>
            <View style={{marginTop: 10}}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '700',
                  marginTop: 10,
                  color: appColors?.black,
                }}>
                {' '}
                Diploma in Medicine & Surgery
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  marginTop: 10,
                  color: appColors?.black,
                }}>
                {' '}
                Maulana Azad Dental College Bhopal
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '700',
                  marginTop: 10,
                  color: appColors?.black,
                }}>
                {' '}
                2015
              </Text>
            </View>
          </View>
          <View style={{marginTop: 30}}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: '600',
                color: appColors?.black,
              }}>
              Clinic Photo
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                paddingRight: '12%',
                color: appColors?.black,
              }}>
              Annusaya Nivas, 13, Pali Hill, Bandra (West), Mumbai 400050
            </Text>
            <Image source={imagePath?.map} style={{resizeMode: 'cover'}} />
            <View
              style={{
                flexDirection: 'row',
                marginTop: '5%',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  textAlign: 'center',
                  color: appColors?.black,
                }}>
                Mon - Thur :{' '}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '400',
                  color: appColors?.black,
                }}>
                12:30 - 17:30, 19:00 - 22:30
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: '5%',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  textAlign: 'center',
                  color: appColors?.black,
                }}>
                Holiday :
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '400',
                  color: appColors?.black,
                }}>
                Saturday, Sunday
              </Text>
            </View>
          </View>
          <View style={{marginTop: 30}}>
            <ListItems name={'Clinical Specialisation'} />
          </View>
          <View style={{marginTop: 30}}>
            <ListItems name={'Clinical Issues'} />
          </View>
          <View style={{marginTop: 30}}>
            <ListItems name={'Membership'} />
          </View>
          <View style={{marginTop: 30}}>
            <Text style={{fontSize: 30, fontWeight: '600'}}>About</Text>
            <View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  lineHeight: 18,
                  color: appColors?.black,
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                sollicitudin nulla proin pretium risus, non aliquam. Neque,
                lorem nisi, volutpat consectetur. Tincidunt at dolor integer non
                non. Euismod ut lobortis laoreet sodales id lacus, proin massa.
                Quis diam eget egestas proin et diam ut sit natoque. Dolor,
                imperdiet urna, leo elit. Feugiat morbi vitae molestie mollis
                magna nunc fermentum nulla in. Sit aenean porttitor id aliquet
                morbi. Mauris habitant tellus condimentum egestas at lobortis
                neque. Id a sagittis morbi integer massa tincidunt posuere.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default DisplayProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors?.white,
  },
});
