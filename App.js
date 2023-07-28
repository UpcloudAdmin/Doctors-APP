import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import Toast, {BaseToastProps} from 'react-native-toast-message';
import {PaperProvider} from 'react-native-paper';
import {AppCommonDataProvider} from './src/navigation/AppCommonDataProvider';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const App = () => {
  const ToastConfig = {
    success: () => {
      <View>
        <Text>{props?.text}</Text>
      </View>;
    },
  };
  return (
    <GestureHandlerRootView style={{flex: 1}}>
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
