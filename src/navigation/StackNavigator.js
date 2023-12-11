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
import SplashScreen from '../screens/external/SplashScreen';
import SelectYear from '../screens/internal/PersonalProfile/SelectYear';
import SelectCollege from '../screens/internal/PersonalProfile/SelectCollege';
import SelectSpecial from '../screens/internal/PersonalProfile/SelectSpecial';
import SelectDegree from '../screens/internal/PersonalProfile/selectDegree';
import MembershipSelect from '../screens/internal/PersonalProfile/MemberShipSelect';
import ClinicService from '../screens/internal/ClinicProfile/ClinicService';
import VideoCall from '../screens/internal/VideoCall/VideoCall';
import InnerAddress from '../screens/internal/PersonalProfile/InnerAddress';
import writeAddress from '../screens/internal/PersonalProfile/writeAddress';
import WeekelyCalendar from '../screens/internal/WeekelyCalendar/WeekelyCalendar';
const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="EnterPhone" component={EnterPhone} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="SignSuccess" component={SignSuccess} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="AddBankAccount" component={AddBankAccount} />
      <Stack.Screen name="SelectYear" component={SelectYear} />
      <Stack.Screen name="SingleDropDown" component={SingleDropDown} />
      <Stack.Screen name="WeekelyCalendar" component={WeekelyCalendar} />
      <Stack.Screen name="MultipleDropDown" component={MultipleDropDown} />

      <Stack.Screen
        name="ForgotPasswordVerify"
        component={ForgotPasswordVerify}
      />
      <Stack.Screen name="SelectDegree" component={SelectDegree} />
      <Stack.Screen name="InnerAddress" component={InnerAddress} screenOptions={{
        headerShown:true
      }} />
      <Stack.Screen name="HolidaySelector" component={HolidaySelector} />
      <Stack.Screen name="PersonalProfile" component={PersonalProfile} />
      <Stack.Screen name="SelectCollege" component={SelectCollege} />
      <Stack.Screen name="SelectSpecial" component={SelectSpecial} />
      <Stack.Screen name="MembershipSelect" component={MembershipSelect} />
      <Stack.Screen name="ClinicService" component={ClinicService} />
      <Stack.Screen name="ClinicProfile" component={ClinicProfile} />
      <Stack.Screen name="VideoCall" component={VideoCall} />
      <Stack.Screen name="ServicesScreen" component={ServicesScreen} />
      <Stack.Screen name="VerificationDoc" component={VerificationDoc} />
      <Stack.Screen name="WorkingHours" component={WorkingHours} />
      <Stack.Screen name="ClinicUpload" component={ClinicUpload} />
      <Stack.Screen name="writeAddress" component={writeAddress} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
