import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../screens/external/SignUp';
import Verification from '../screens/external/Verification';
import EnterPhone from '../screens/external/EnterPhone';
import Login from '../screens/external/Login';
import SignSuccess from '../screens/external/SignSuccess';
import TabNavigator from './TabNavigator';
import ForgetPassword from '../screens/external/ForgetPassword';
import ForgotPasswordVerify from '../screens/external/ForgotPasswordVerify';
import ChangePassword from '../screens/external/ChangePassword';
import PersonalProfile from '../screens/internal/PersonalProfile';
import SingleDropDown from '../components/SingleDropDown';
import MultipleDropDown from '../components/MultipleDropDown';
import ClinicProfile from '../screens/internal/ClinicProfile';
import HolidaySelector from '../screens/internal/HolidaySelector';
import VerificationDoc from '../screens/internal/Verification';
import ServicesScreen from '../screens/internal/ServicesScreen';
import AddBankAccount from '../screens/internal/AddBankAccount';
import WorkingHours from '../screens/internal/WorkingHoura';
import DisplayProfile from '../screens/internal/DisplayProfile';
import ClinicUpload from '../screens/internal/ClinicUpload';
const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SignUp">
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="EnterPhone" component={EnterPhone} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="SignSuccess" component={SignSuccess} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="AddBankAccount" component={AddBankAccount} />

      <Stack.Screen name="SingleDropDown" component={SingleDropDown} />
      <Stack.Screen name="MultipleDropDown" component={MultipleDropDown} />

      <Stack.Screen
        name="ForgotPasswordVerify"
        component={ForgotPasswordVerify}
      />

      <Stack.Screen name="HolidaySelector" component={HolidaySelector} />
      <Stack.Screen name="PersonalProfile" component={PersonalProfile} />
      <Stack.Screen name="ClinicProfile" component={ClinicProfile} />
      <Stack.Screen name="ServicesScreen" component={ServicesScreen} />
      <Stack.Screen name="VerificationDoc" component={VerificationDoc} />
      <Stack.Screen name="WorkingHours" component={WorkingHours} />
      <Stack.Screen name="ClinicUpload" component={ClinicUpload} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
