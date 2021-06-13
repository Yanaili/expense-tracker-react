import { combineReducers } from 'redux';
import transactionsReducer from './reducers/transactionsReducer';

const allReducers = combineReducers({
  transactionsState: transactionsReducer,
});

export default allReducers;
