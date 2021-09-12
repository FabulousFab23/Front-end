import {Alert} from 'react-native';
import {dispatch} from '..';
import {register} from '../../api/services/auth';
import {editProfile} from '../../api/services/user';
import {CACHE_KEYS} from '../../constants/cache-keys';
import {cacheItem} from '../../services/cache-storage';
import {TYPES} from './types';

export const changePage = ({nextPage}) => {
  dispatch({
    type: TYPES.CHANGE_PAGE,
    payload: {page: nextPage},
  });
};

export const changeLoaderStatus = async ({status}) => {
  dispatch({
    type: TYPES.CHANGE_LOADER_STATUS,
    payload: {status},
  });
};

export const signUp = async ({email, password}) => {
  try {
    const {data} = await register({email, password});
    await cacheItem(CACHE_KEYS.TOKEN, data.accessToken);
    await cacheItem(CACHE_KEYS.REFRESH_TOKEN, data.refreshToken);
    changePage({nextPage: 1});
  } catch (e) {
    Alert.alert('Sorry', e);
  }
};

export const setOnboardingData = ({user}) => {
  dispatch({
    type: TYPES.SET_USER,
    payload: {user},
  });
};

export const finishOnboarding = async ({user}) => {
  try {
    const {data} = await editProfile(user);
    console.log('DATA', data);
  } catch (e) {
    console.log('E', e);
  }
};
