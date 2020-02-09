import {combineReducers} from 'redux';
import transactionReducers from './transaction.reducers';
import themeReducers from './theme.reducers';
export default combineReducers({
  transactions: transactionReducers,
  theme: themeReducers,
});
