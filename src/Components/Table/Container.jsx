import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import {
  toggleIsFetching,
  changePositionRecord,
  upRowRecord,
  downRowRecord,
} from '../../Redux/Actions/records';
import {
  show,
  hide,
} from '../../Redux/Actions/modals';
import Table from './Table';

const mapStateToProps = state => ({
  records: state.records.records,
  modals:  state.modal.modals,
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
