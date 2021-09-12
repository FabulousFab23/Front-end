import {TYPES} from './types';

const defaultState = {
  activePage: 0,
  isLoading: false,
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
    default:
      return state;
  }
};
