import {dispatch} from '..';
import {register} from '../../api/services/auth';
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
    const result = await register({email, password});
    console.log('RESULT', result);
    // changePage({nextPage: 1});
  } catch (e) {
    console.log('E', e);
  }
};
