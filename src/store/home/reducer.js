import {TYPES} from './types';

const defaultState = {
  showModal: false,
  openedId: null,
  isLoading: false,
  isTutorial: false,
  isAuth: false,
};

export const HomeReducer = (state = defaultState, action) => {
  const {type, payload} = action;
  switch (type) {
    case TYPES.SHOW_MODAL: {
      return {
        ...state,
        showModal: true,
        openedId: payload.id,
      };
    }
    case TYPES.CHANGE_TUTORIAL_STATUS: {
      return {
        ...state,
        isTutorial: payload.status,
      };
    }
    case TYPES.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth: true,
      };
    }
    case TYPES.CLOSE_MODAL: {
      return {
        ...state,
        showModal: false,
        openedId: null,
      };
    }
    default:
      return state;
  }
};
