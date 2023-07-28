import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appColors} from '../../../utils/appColors';

const ListItems = ({name}) => {
  const arr = [
    'Hair Transplant Surgery',
    'Integrated Medicine',
    'Pediatrics',
    'Integrated Medicine',
  ];
  return (
    <View>
      <Text style={{fontSize: 30, fontWeight: '600'}}>{name}</Text>
      <FlatList
        data={arr}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 10,
                borderBottomColor: appColors?.gray,
                borderBottomWidth: 0.6,
                marginTop: 10,
              }}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '400',
                  color: appColors?.black,
                }}>
                {item}
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '700',
                  color: appColors?.black,
                }}>
                5
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ListItems;

const styles = StyleSheet.create({});
