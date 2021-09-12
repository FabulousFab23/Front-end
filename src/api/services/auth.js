import {post} from '..';
import {API_URLS} from '../constants/urls';

export async function register(data) {
  return post(API_URLS.auth.register, data);
}

export async function login(data) {
  return post(API_URLS.auth.login, data);
}
