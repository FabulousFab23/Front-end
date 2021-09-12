import {Alert} from 'react-native';
import {dispatch} from '..';
import {login} from '../../api/services/auth';
import {CACHE_KEYS} from '../../constants/cache-keys';
import {AppRoute, navigate} from '../../navigation';
import {cacheItem} from '../../services/cache-storage';
import {TYPES} from './types';

export const openModal = () => {
  dispatch({
    type: TYPES.SHOW_MODAL,
    payload: {id: 1},
  });
};

export const closeModal = () => {
  dispatch({
    type: TYPES.CLOSE_MODAL,
  });
};

export const changeTutorialStatus = ({status}) => {
  dispatch({
    type: TYPES.CHANGE_TUTORIAL_STATUS,
    payload: {status},
  });
};

export const signIn = async ({email, password}) => {
  try {
    const {data} = await login({email, password});

    await cacheItem(CACHE_KEYS.TOKEN, data.accessToken);
    await cacheItem(CACHE_KEYS.REFRESH_TOKEN, data.refreshToken);

    await dispatch({
      type: TYPES.LOGIN_SUCCESS,
    });

    navigate(AppRoute.HOME);
  } catch (e) {
    Alert.alert('Sorry', 'User not found');
  }
};
