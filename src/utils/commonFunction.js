import axios from 'axios';
import {baseUrl} from './constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const apiPostModule = async (url, data) => {
  const token = await AsyncStorage.getItem('token');
  console.log(token, '<--token', 'Bearer ' + token);
  try {
    console.log(baseUrl + url, data, '<---datadata');
    const response = await axios({
      method: 'post',
      url: baseUrl + url,
      data: data,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
        // Authorization: token ? 'Bearer ' + token : null,
      },
    });
    // console.log(response, '<--response');
    return response?.data;
  } catch (err) {
    console.log(err, '<--asdsa', err.response.data);
    return err.response.data;
  }
};
export const apiGetModule = async (url, data) => {
  const token = await AsyncStorage.getItem('token');
  console.log(token, '<--token', 'Bearer ' + token);
  try {
    console.log(baseUrl + url, data, '<---datadata');
    const response = await axios({
      method: 'get',
      url: baseUrl + url,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
        // Authorization: token ? 'Bearer ' + token : null,
      },
    });
    // console.log(response, '<--response');
    return response?.data;
  } catch (err) {
    console.log(err, '<--asdsa', err.response.data);
    return err.response.data;
  }
};
