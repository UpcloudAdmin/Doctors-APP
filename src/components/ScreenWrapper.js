import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {appColors} from '../utils/appColors';
const ScreenWrapper = ({children, statusBarColor = appColors?.white}) => {
  const insets = useSafeAreaInsets();
  const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? insets?.top : 0;
  return (
    <View style={screenWrapperStyles.container}>
      <View
        style={{backgroundColor: statusBarColor, paddingTop: STATUSBAR_HEIGHT}}
      />
      <StatusBar backgroundColor={statusBarColor} barStyle={'dark-content'} />
      {children}
    </View>
  );
};

export default ScreenWrapper;

export const screenWrapperStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
