import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import ModalStatus from './index';
import {
  toggleIsFetching,
  updateStatusRecord,
} from '../../Redux/Actions/records';
import {
  show,
  hide,
} from '../../Redux/Actions/modals';

const mapStateToProps = state => ({
  records: state.records,
  other:   state.other,
});
const ModalStatusContainer = connect(mapStateToProps, {
  toggleIsFetching,
  updateStatusRecord,
  show,
  hide,
})(ModalStatus);

export default ModalStatusContainer;
