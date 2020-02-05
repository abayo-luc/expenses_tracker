import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
const middleware = [ReduxThunk];
const store = createStore(reducers, applyMiddleware(...middleware));

export default store;
