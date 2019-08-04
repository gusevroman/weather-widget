import { combineReducers } from 'redux';
import { reducer as modal } from 'redux-modal';
import modals from './modal';
import records from './records';
import other from './other';

const reducers = combineReducers({
  records,
  modal,
  modals,
  other,
});

export default reducers;
