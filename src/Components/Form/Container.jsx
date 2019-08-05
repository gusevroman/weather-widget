import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import {
  getWeather,
  updateCity,
} from '../../Redux/Actions/records';
import FormTop from './Form';

const mapStateToProps = state => ({
  records: state.records,
});
const FormContainer = connect(mapStateToProps, {
  getWeather,
  updateCity,
})(FormTop);

export default FormContainer;
