import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import {
  getWeather,
  updateCity,
  setErrorStatus,
} from '../../Redux/Actions/records';
import FormTop from './Form';

const mapStateToProps = state => ({
  records: state.records,
});
const FormContainer = connect(mapStateToProps, {
  getWeather,
  updateCity,
  setErrorStatus,
})(FormTop);

export default FormContainer;
