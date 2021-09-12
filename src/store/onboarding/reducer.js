import {TYPES} from './types';

const defaultState = {
  activePage: 0,
  isLoading: false,
  user: {
    pseudo: '',
    dob: '',
    country: '',
    gender: '',
  },
};

export const OnboardingReducer = (state = defaultState, action) => {
  const {type, payload} = action;
  switch (type) {
    case TYPES.CHANGE_PAGE: {
      return {
        ...state,
        activePage: payload.page,
      };
    }
    case TYPES.CHANGE_LOADER_STATUS: {
      return {
        ...state,
        isLoading: payload.status,
      };
    }
    case TYPES.SET_USER: {
      return {
        ...state,
        user: {
          ...state.user,
          ...payload.user,
        },
      };
    }
    default:
      return state;
  }
};
