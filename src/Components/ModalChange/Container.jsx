import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import ModalChange from './index';
import {
  toggleIsFetching,
  updateTemperature,
  updateCity,
} from '../../Redux/Actions/records';
import {
  show,
  hide,
} from '../../Redux/Actions/modals';

const mapStateToProps = state => ({
  records: state.records,
  modals:  state.modals,
  other:   state.other,
});
const ModalChangeContainer = connect(mapStateToProps, {
  toggleIsFetching,
  updateTemperature,
  updateCity,
  show,
  hide,
})(ModalChange);

export default ModalChangeContainer;
