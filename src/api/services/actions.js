import {get} from '..';
import {API_URLS} from '../constants/urls';

export const getCountries = async () => {
  return get(API_URLS.actions.countries);
};
