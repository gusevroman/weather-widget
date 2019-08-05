import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import { show } from 'redux-modal';
import {
  upRowRecord,
  downRowRecord,
  modalChangesPrepare,
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
  upRowRecord,
  downRowRecord,
  modalChangesPrepare,
  showModal,
  show,
})(Table);

export default TableContainer;
