import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import { show } from 'redux-modal';
import {
  toggleIsFetching,
  changePositionRecord,
  upRowRecord,
  downRowRecord,
} from '../../Redux/Actions/records';
import {
  //show,
  hide,
} from '../../Redux/Actions/modals';
import Table from './Table';

const mapStateToProps = state => ({
  records: state.records.records,
  modals:  state.modals.modals,
});
const TableContainer = connect(mapStateToProps, {
  toggleIsFetching,
  changePositionRecord,
  upRowRecord,
  downRowRecord,
  show,
  hide,
})(Table);

export default TableContainer;
