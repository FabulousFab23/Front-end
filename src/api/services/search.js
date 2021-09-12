import {get} from '..';
import {API_URLS} from '../constants/urls';

export async function searchByPseudo(pseudo) {
  return get(API_URLS.search.user(pseudo));
}
