import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import {PaperProvider} from 'react-native-paper';
import {AppCommonDataProvider} from './src/navigation/AppCommonDataProvider';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const App = () => {
  const toastConfig = {
    /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
    success: props => (
      <BaseToast
        {...props}
        style={{borderLeftColor: 'pink'}}
        contentContainerStyle={{paddingHorizontal: 15}}
        text1Style={{
          fontSize: 15,
          fontWeight: '400',
        }}
      />
    ),
    /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
    error: props => (
      <ErrorToast
        {...props}
        text1Style={{
          fontSize: 17,
        }}
        text2Style={{
          fontSize: 15,
        }}
      />
    ),
    /*
      Or create a completely new type - `tomatoToast`,
      building the layout from scratch.
  
      I can consume any custom `props` I want.
      They will be passed when calling the `show` method (see below)
    */
    tomatoToast: ({text1, props}) => (
      <View style={{height: 60, width: '100%', backgroundColor: 'tomato'}}>
        <Text>{text1}</Text>
        <Text>{props.uuid}</Text>
      </View>
    ),
  };
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Toast config={toastConfig} />
      <AppCommonDataProvider>
        <NavigationContainer>
          <PaperProvider>
            <StackNavigator />
          </PaperProvider>
        </NavigationContainer>
      </AppCommonDataProvider>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
