import {post, put} from '..';
import {API_URLS} from '../constants/urls';

export const uploadAvatar = data => {
  return post(API_URLS.users.avatar);
};

export const editProfile = async data => {
  return put(API_URLS.user.account, data);
};
