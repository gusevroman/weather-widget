import { combineReducers } from 'redux';
import modal from './modal';
import records from './records';
import other from './other';

const reducers = combineReducers({
  records,
  modal,
  other,
});

export default reducers;
