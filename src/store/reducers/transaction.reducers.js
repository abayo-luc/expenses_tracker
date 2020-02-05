import {
  SAVE_NEW_TRANSACTION,
  FETCHING_TRANSACTIONS,
  FETCHING_TRANSACTIONS_FAILED,
} from '../types';

const INITIAL_STATE = {
  transaction: {
    isFetching: false,
  },
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
    case FETCHING_TRANSACTIONS:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_TRANSACTIONS_FAILED:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};
