import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import { show } from 'redux-modal';
import {
  upRowRecord,
  downRowRecord,
  modalChangesPrepare,
  setActiveRecordId,
} from '../../Redux/Actions/records';
import Table from './Table';

const mapStateToProps = state => ({
  records: state.records.records,
  other:   state.other,
});
const TableContainer = connect(mapStateToProps, {
  show,
  upRowRecord,
  downRowRecord,
  modalChangesPrepare,
  setActiveRecordId,
})(Table);

export default TableContainer;
