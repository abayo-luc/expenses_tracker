import {
  SAVE_NEW_TRANSACTION,
  FETCHING_TRANSACTIONS,
  FETCHING_TRANSACTIONS_FAILED,
  SAVING_NEW_TRANSACTIONS_FAILED,
  FETCHING_TRANSACTIONS_COMPLETE,
  SAVING_NEW_TRANSACTIONS_COMPLETE,
} from '../types';
import axios from '../../utils/axios';
import objectTransform from '../../utils/objectTransform';
export const saveNewTransactions = (
  {title, amount, date},
  notify,
) => async dispatch => {
  try {
    dispatch({type: SAVE_NEW_TRANSACTION});
    const {
      data: {transaction},
    } = await axios.post('/transactions', {title, amount, date});
    if (transaction.amount > 10000) {
      notify(transaction._id);
    }
    dispatch({
      type: SAVING_NEW_TRANSACTIONS_COMPLETE,
      payload: transaction,
    });
  } catch (error) {
    dispatch({type: SAVING_NEW_TRANSACTIONS_FAILED});
  }
};

export const fetchTransactions = () => async dispatch => {
  try {
    dispatch({type: FETCHING_TRANSACTIONS});
    const {data} = await axios.get('/transactions');
    const transactions = await objectTransform(data.transactions);
    dispatch({type: FETCHING_TRANSACTIONS_COMPLETE, payload: transactions});
  } catch (error) {
    dispatch({type: FETCHING_TRANSACTIONS_FAILED});
  }
};
