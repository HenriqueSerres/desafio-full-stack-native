import axios from 'axios';
import { URL_USER, URL_USER_CITY, URL_TOTAL_CITY } from '../helpers/constants';


const applicationJSON = 'application/json';

const setOptions = (url, method, data) => ({
  url,
  method,
  data,
});

export const getAxiosRequestUserId = async (id) => {
  const userData = await JSON.parse(localStorage.getItem('user'));
  if (!userData) return;
  const { token } = userData;
  return axios
    .get(URL_USER+id, {
      headers: {
        'x-access-token': token,
        Accept: applicationJSON,
        Authorization: token,
      },
    })
    .then((response) => response.data)
    .catch((err) => err);
};

export const putAxiosRequestUserUpdate = async (id, body) => {
  const userData = await JSON.parse(localStorage.getItem('user'));
  if (!userData) return;
  const { token } = userData;
  return axios
    .put(URL_USER+id, body, {
      headers: {
        'x-access-token': token,
        Accept: applicationJSON,
        Authorization: token,
      },
    })
    .then((response) => response.data)
    .catch((err) => err);
  // return axios({
  //   method:'put',
  //   url: URL_USER+id,
  //   headers: {
  //     'x-access-token': token,
  //     Accept: applicationJSON,
  //     Authorization: token,
  //   },
    
  // }, body)
};

export const axiosRequest = (u, m, d) => axios(setOptions(u, m, d))
  .then((response) => response)
  .catch((err) => err);

export const axiosRequestToken = async (u, d) => {
  const userData = await JSON.parse(localStorage.getItem('user'));
  if (!userData) return;
  const { token } = userData;

  return axios.post(
    u,
    { ...d },
    {
      headers: {
        Authorization: `${token}`,
      },
    },
  )

    .then((response) => response)
    .catch((err) => console.log(err));
};

export const getAxiosRequestUserCity = async (city) => {
  const userData = await JSON.parse(localStorage.getItem('user'));
  if (!userData) return;
  const { token } = userData;
  return axios
    .get(URL_USER_CITY+city, {
      headers: {
        'x-access-token': token,
        Accept: applicationJSON,
        Authorization: token,
      },
    })
    .then((response) => response.data)
    .catch((err) => err);
};

export const getAxiosRequestTotalCity = async () => {
  const userData = await JSON.parse(localStorage.getItem('user'));
  if (!userData) return;
  const { token } = userData;
  return axios
    .get(URL_TOTAL_CITY, {
      headers: {
        'x-access-token': token,
        Accept: applicationJSON,
        Authorization: token,
      },
    })
    .then((response) => response.data)
    .catch((err) => err);
};
