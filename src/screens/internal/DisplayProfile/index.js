import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import {appColors} from '../../../utils/appColors';
import {imagePath} from '../../../utils/imagePath';
import ListItems from './ListItems';
import {useAppCommonDataProvider} from '../../../navigation/AppCommonDataProvider';

const DisplayProfile = () => {
  const {colorScheme} = useAppCommonDataProvider();
  // useEffect(()=>{

  // },[])
  return (
    <ScreenWrapper
      statusBarColor={colorScheme === 'light' ? appColors?.white : 'black'}>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: colorScheme === 'light' ? appColors?.white : 'black',
          height: 2400,
        }}>
        <Image
          source={imagePath?.docProfile}
          style={{width: '100%', height: 315, resizeMode: 'cover'}}
        />
        <View
          style={{marginTop: 30, marginHorizontal: 10, flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: '700',
              color:
                colorScheme === 'light' ? appColors?.black : appColors?.white,
            }}>
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
                  color:
                    colorScheme === 'light'
                      ? appColors?.black
                      : appColors?.white,
                }}>
                Dr. Swapnil Katare
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '600',
                  color:
                    colorScheme === 'light'
                      ? appColors?.black
                      : appColors?.white,
                }}>
                Ayurveda - Diabetiologist
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '700',
                    color:
                      colorScheme === 'light'
                        ? appColors?.black
                        : appColors?.white,
                  }}>
                  {'Mumbai    |'}
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '400',
                    color:
                      colorScheme === 'light'
                        ? appColors?.black
                        : appColors?.white,
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
                color:
                  colorScheme === 'light' ? appColors?.black : appColors?.white,
              }}>
              Phone no :{' '}
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '400',
                justifyContent: 'center',
                color:
                  colorScheme === 'light' ? appColors?.black : appColors?.white,
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
                color:
                  colorScheme === 'light' ? appColors?.black : appColors?.white,
              }}>
              Unique id
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '400',
                justifyContent: 'center',
                color:
                  colorScheme === 'light' ? appColors?.black : appColors?.white,
              }}>
              {'  9230173019, 9002230341'}
            </Text>
          </View>
          <View style={{marginTop: 30}}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: '700',
                color:
                  colorScheme === 'light' ? appColors?.black : appColors?.white,
              }}>
              Activity
            </Text>
          </View>
          <View style={{marginTop: 30}}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: '600',
                color:
                  colorScheme === 'light' ? appColors?.black : appColors?.white,
              }}>
              Education
            </Text>
            <View style={{marginTop: 10}}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '700',
                  marginTop: 10,
                  color:
                    colorScheme === 'light'
                      ? appColors?.black
                      : appColors?.white,
                }}>
                {' '}
                BHMS
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  marginTop: 10,
                  color:
                    colorScheme === 'light'
                      ? appColors?.black
                      : appColors?.white,
                }}>
                {' '}
                Maulana Azad Dental College ,Bhopal
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '700',
                  marginTop: 10,
                  color:
                    colorScheme === 'light'
                      ? appColors?.black
                      : appColors?.white,
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
                  color:
                    colorScheme === 'light'
                      ? appColors?.black
                      : appColors?.white,
                }}>
                {' '}
                Diploma in Medicine & Surgery
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  marginTop: 10,
                  color:
                    colorScheme === 'light'
                      ? appColors?.black
                      : appColors?.white,
                }}>
                {' '}
                Maulana Azad Dental College Bhopal
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '700',
                  marginTop: 10,
                  color:
                    colorScheme === 'light'
                      ? appColors?.black
                      : appColors?.white,
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
                color:
                  colorScheme === 'light' ? appColors?.black : appColors?.white,
              }}>
              Clinic Photo
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                paddingRight: '12%',
                color:
                  colorScheme === 'light' ? appColors?.black : appColors?.white,
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
                  color:
                    colorScheme === 'light'
                      ? appColors?.black
                      : appColors?.white,
                }}>
                Mon - Thur :{' '}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '400',
                  color:
                    colorScheme === 'light'
                      ? appColors?.black
                      : appColors?.white,
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
                  color:
                    colorScheme === 'light'
                      ? appColors?.black
                      : appColors?.white,
                }}>
                Holiday :
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '400',
                  color:
                    colorScheme === 'light'
                      ? appColors?.black
                      : appColors?.white,
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
            <Text
              style={{
                fontSize: 30,
                fontWeight: '600',
                color:
                  colorScheme === 'light' ? appColors?.black : appColors?.white,
              }}>
              About
            </Text>
            <View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  lineHeight: 18,
                  color:
                    colorScheme === 'light'
                      ? appColors?.black
                      : appColors?.white,
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
