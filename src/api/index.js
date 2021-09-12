/* eslint-disable func-names */
import axios from 'axios';
import {CACHE_KEYS} from '../constants/cache-keys';
import {getCachedItem} from '../services/cache-storage';

const makeRequest = axios;

const baseURL = 'http://127.0.0.1:4000';

function onSuccess(response) {
  return response;
}

const onGetToken = async () => {
  const token = await getCachedItem(CACHE_KEYS.TOKEN);
  if (token) {
    return token;
  }
  return null;
};

const onFail = async err => {
  const {response} = err;

  // if (response.status === HttpStatusCode.UNAUTHORIZED) {
  //   Toast.error(translate('SESSION_EXPIRED'));
  //   dispatch(logOut());
  //   await clearStorage();
  //   await navigate(AppRoute.LOGIN, {});
  // }

  throw err;
};

makeRequest.interceptors.request.use(
  async function (config) {
    const token = await onGetToken();
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

makeRequest.interceptors.response.use(onSuccess, onFail);

export const get = (requestUrl, params = {}) =>
  makeRequest({
    baseURL,
    url: requestUrl,
    method: 'get',
    params,
  });

export const post = (requestUrl, data = {}) =>
  makeRequest({
    baseURL,
    url: requestUrl,
    method: 'post',
    data,
  });

export const remove = (requestUrl, params = {}) =>
  makeRequest({
    baseURL,
    url: requestUrl,
    method: 'delete',
    params,
  });

export const put = (requestUrl, data = {}) =>
  makeRequest({
    baseURL,
    url: requestUrl,
    method: 'put',
    data,
  });
