import {SAVE_NEW_TRANSACTION} from '../types';

const INITIAL_STATE = {
  transaction: {},
};
export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case SAVE_NEW_TRANSACTION:
      return {
        ...state,
        transaction: {
          ...payload,
        },
      };
    default:
      return state;
  }
};
