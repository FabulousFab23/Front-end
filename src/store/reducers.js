import {combineReducers} from 'redux';
import {HomeReducer} from './home/reducer';

export const rootReducers = combineReducers({
  home: HomeReducer,
});
