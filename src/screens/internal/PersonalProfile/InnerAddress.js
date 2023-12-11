import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import {appColors} from '../../../utils/appColors';
import MapView, {Marker, PROVIDER_GOOGLE, UrlTile} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {Platform} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import CommonButton from '../../../components/CommonButton';
import {imagePath} from '../../../utils/imagePath';
const InnerAddress = ({navigation}) => {
  const [value, setValue] = useState('');
  console.log(value, '<---wqweqewqe');
  const [loc, setLoc] = useState({
    latitude: 0,
    longitude: 0,
  });

  const [markerpos, setMarkerpos] = useState({
    latitude: 0,
    longitude: 0,
  });
  useEffect(() => {
    gteLoc();
  }, []);
  const gteLoc = () => {
    Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        setLoc({
          latitude: position?.coords?.latitude,
          longitude: position?.coords?.longitude,
        });
        setMarkerpos({
          latitude: position?.coords?.latitude,
          longitude: position?.coords?.longitude,
        });
        console.log(position, '<-hgdrfsedefrgth');
      },
    );
  };
  return (
    <ScreenWrapper>
      <View style={{flex: 1}}>
        <View
          style={{
            position: 'absolute',
            top: 10,
            zIndex: 111123213213213132,
            width: '100%',
          }}>
          <GooglePlacesAutocomplete
            GooglePlacesDetailsQuery={{fields: 'geometry'}}
            placeholder="Search"
            fetchDetails={true}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              setLoc({
                latitude: details?.geometry?.location?.lat,
                longitude: details?.geometry?.location?.lng,
              });
              console.log(data, details?.geometry?.location, '<--saasdsadas');
            }}
            query={{
              key: 'AIzaSyBCE5TvjoFHpZA1Yz8bPOZCOce9grrzXrY',
              language: 'en',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',

            backgroundColor: 'white',
            position: 'absolute',
            top: 15,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation?.goBack();
            }}>
            <Image source={imagePath?.back} tintColor={'black'} />
          </TouchableOpacity>
          <Text style={{fontSize: 28, fontWeight: '600'}}>Adress</Text>
        </View>
        <MapView
          provider={PROVIDER_GOOGLE}
          mapType={Platform.OS === 'android' ? 'none' : 'standard'}
          // coordinate={loc}
          showsUserLocation={true}
          onRegionChange={e => {
            console.log(e, '<--sadsads');
          }}
          region={loc}
          // remove if not using Google Maps
          style={{flex: 1}}>
          <UrlTile
            /**
             * The url template of the tile server. The patterns {x} {y} {z} will be replaced at runtime
             * For example, http://c.tile.openstreetmap.org/{z}/{x}/{y}.png
             */
            /**
             * The maximum zoom level for this tile overlay. Corresponds to the maximumZ setting in
             * MKTileOverlay. iOS only.
             */
            maximumZ={19}
            /**
             * flipY allows tiles with inverted y coordinates (origin at bottom left of map)
             * to be used. Its default value is false.
             */
            flipY={false}
          />
          <Marker
            draggable
            coordinate={loc}
            description={'move this marker'}
            onDragEnd={e => {
              console.log(e.nativeEvent.coordinate, '<--sadasd');
              setLoc(e.nativeEvent.coordinate);
            }}
          />
        </MapView>

        <TouchableOpacity onPress={gteLoc}>
          <View
            style={{
              position: 'absolute',
              height: 20,
              width: 20,
              backgroundColor: 'red',
              bottom: 20,
              right: 20,
            }}></View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '100%',
            position: 'absolute',
            bottom: 10,
          }}>
          <CommonButton
            buttonText={'Enter you full address'}
            onPress={() => {
              navigation?.navigate('writeAddress');
            }}
          />
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default InnerAddress;

const styles = StyleSheet.create({});
