import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import ModalStatus from './ModalStatus';
import {
  toggleIsFetching,
  updateStatusRecord,
} from '../../Redux/Actions/records';
import {
  showModal,
} from '../../Redux/Actions/other';

const mapStateToProps = state => ({
  records: state.records,
  other:   state.other,
});
const ModalStatusContainer = connect(mapStateToProps, {
  toggleIsFetching,
  updateStatusRecord,
  showModal,
})(ModalStatus);

export default ModalStatusContainer;
