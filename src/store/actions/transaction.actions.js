import {
  SAVE_NEW_TRANSACTION,
  FETCHING_TRANSACTIONS,
  FETCHING_TRANSACTIONS_FAILED,
  SAVING_NEW_TRANSACTIONS_FAILED,
} from '../types';
import axios from '../../utils/axios';
export const saveNewTransactions = ({
  title,
  amount,
  date,
}) => async dispatch => {
  try {
    dispatch({type: SAVE_NEW_TRANSACTION});
    const {data} = await axios.post('/transactions', {title, amount, date});
    console.log(data);
  } catch (error) {
    dispatch({type: SAVING_NEW_TRANSACTIONS_FAILED});
  }
};

export const fetchTransactions = () => async dispatch => {
  try {
    dispatch({type: FETCHING_TRANSACTIONS});
    const {data} = await axios.get('/transactions');
    console.log(data);
  } catch (error) {
    dispatch({type: FETCHING_TRANSACTIONS_FAILED});
  }
};
