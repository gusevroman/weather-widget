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
  showModal,
} from '../../Redux/Actions/other';
import Table from './Table';

const mapStateToProps = state => ({
  records: state.records.records,
  other:   state.other,
});
const TableContainer = connect(mapStateToProps, {
  toggleIsFetching,
  changePositionRecord,
  upRowRecord,
  downRowRecord,
  showModal,
  show,
})(Table);

export default TableContainer;
