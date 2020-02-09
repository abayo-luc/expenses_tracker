import {
  SAVE_NEW_TRANSACTION,
  FETCHING_TRANSACTIONS,
  FETCHING_TRANSACTIONS_FAILED,
  FETCHING_TRANSACTIONS_COMPLETE,
  SAVING_NEW_TRANSACTIONS_COMPLETE,
  SAVING_NEW_TRANSACTIONS_FAILED,
  DELETE_TRANSACTION_COMPLETE,
} from '../types';

const INITIAL_STATE = {
  transaction: {},
  isFetching: false,
  transactions: {},
};
export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case SAVE_NEW_TRANSACTION:
      return {
        ...state,
        isFetching: true,
      };
    case SAVING_NEW_TRANSACTIONS_COMPLETE:
      return {
        ...state,
        isFetching: false,
        transactions: {
          [payload._id]: payload,
          ...state.transactions,
        },
      };
    case SAVING_NEW_TRANSACTIONS_FAILED:
      return {
        ...state,
        isFetching: false,
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
    case FETCHING_TRANSACTIONS_COMPLETE:
      return {
        ...state,
        isFetching: false,
        transactions: {
          ...state.transactions,
          ...payload,
        },
      };
    case SAVING_NEW_TRANSACTIONS_FAILED:
      return {
        ...state,
        isFetching: false,
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
    case FETCHING_TRANSACTIONS_COMPLETE:
      return {
        ...state,
        isFetching: false,
        transactions: {
          ...state.transactions,
          ...payload,
        },
      };
    case DELETE_TRANSACTION_COMPLETE:
      const transactions = {...state.transactions};
      delete transactions[payload.id];
      return {
        ...state,
        transactions,
      };
    default:
      return state;
  }
};
