import {dispatch} from '..';
import {TYPES} from './types';

export const openModal = () => {
  dispatch({
    type: TYPES.SHOW_MODAL,
    payload: {id: 1},
  });
};

export const changeTutorialStatus = ({status}) => {
  dispatch({
    type: TYPES.CHANGE_TUTORIAL_STATUS,
    payload: {status},
  });
};
