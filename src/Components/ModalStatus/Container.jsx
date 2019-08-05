import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import { show } from 'redux-modal';
import {
  updateStatusRecord,
} from '../../Redux/Actions/records';
import ModalStatus from './ModalStatus';

const mapStateToProps = state => ({
  records: state.records,
  other:   state.other,
});
const ModalStatusContainer = connect(mapStateToProps, {
  updateStatusRecord,
  show,
})(ModalStatus);

export default ModalStatusContainer;
