import { combineReducers } from 'redux';
import { reducer as modal } from 'redux-modal';
import records from './records';
import other from './other';

const reducers = combineReducers({
  records,
  modal,
  other,
});

export default reducers;
