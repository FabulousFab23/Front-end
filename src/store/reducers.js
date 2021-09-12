import {combineReducers} from 'redux';
import {HomeReducer} from './home/reducer';
import {OnboardingReducer} from './onboarding/reducer';

export const rootReducers = combineReducers({
  home: HomeReducer,
  onboarding: OnboardingReducer,
});
