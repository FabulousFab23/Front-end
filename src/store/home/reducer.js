import {TYPES} from './types';

const defaultState = {
  showModal: false,
  openedId: null,
  isLoading: false,
  isTutorial: false,
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
    default:
      return state;
  }
};
