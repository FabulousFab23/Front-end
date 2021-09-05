import {TYPES} from './types';

const defaultState = {
  showModal: false,
  openedId: null,
  isLoading: false,
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
    default:
      return state;
  }
};
