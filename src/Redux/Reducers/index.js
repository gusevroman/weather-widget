import { combineReducers } from 'redux';
import recordsReducer from './records';

const reducers = combineReducers({
  records: recordsReducer,
});

export default reducers;
