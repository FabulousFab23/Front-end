import {API_URLS} from '../constants/urls';

export function register(data) {
  return post(API_URLS.auth.register, data);
}
