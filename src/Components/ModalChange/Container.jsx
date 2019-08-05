import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import { show } from 'redux-modal';
import {
  updateTemperature,
  updateCity,
  modalChangesSave,
  modalChangesCancel,
} from '../../Redux/Actions/records';
import ModalChange from './ModalChange';

const mapStateToProps = state => ({
  records: state.records,
  other:   state.other,
});
const ModalChangeContainer = connect(mapStateToProps, {
  updateTemperature,
  updateCity,
  modalChangesSave,
  modalChangesCancel,
  show,
})(ModalChange);

export default ModalChangeContainer;
