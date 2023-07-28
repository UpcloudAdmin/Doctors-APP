import axios from 'axios';
import {baseUrl} from './constants';

export const apiPostModule = async (url, data) => {
  console.log(baseUrl + url, data, '<---datadata');
  const response = await axios({
    method: 'post',
    url: baseUrl + url,
    data: data,
  });
  console.log(response, '<---qwerty');
};
