import {SAVE_NEW_TRANSACTION} from '../types';

export const newTransaction = ({title, amount, date}) => ({
  type: SAVE_NEW_TRANSACTION,
  payload: {title, amount, date},
});
