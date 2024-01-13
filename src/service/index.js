import axios from "axios";
const BASEURL = "http://43.204.179.207:5000/api/v11/"; // client dev
export const request = (
  method,
  path,
  data,
  headers = {
    Accept: "application/json",
    "Content-type": "application/json",
  }
) =>
  axios({
    url: `${BASEURL}${path}`,
    data,
    method,
    timeout: 30000,
    headers,
  });

export const authenticatedRequestImageUpload = (token, path, data, method) =>
  request(method, path, data, {
    Authorization: `Bearer ${token}`,
    "Content-type": "application/json",
    "Content-type": "multipart/form-data",
  });

export const authenticatedRequest = (token, path, data, method) =>
  request(method, path, data, {
    Authorization: `Bearer ${token}`,
    "Content-type": "application/json",
  });
