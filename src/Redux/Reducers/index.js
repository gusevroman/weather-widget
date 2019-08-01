import { combineReducers } from 'redux';
import modal from './modal';
import records from './records';

const reducers = combineReducers({
  records,
  modal,
});

export default reducers;