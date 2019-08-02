import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import {
  pathChange,
} from '../../Redux/Actions/other';
import Navigation from './Navigation';

const mapStateToProps = state => ({
  other: state.other,
});
const NavigationContainer = connect(mapStateToProps, {
  pathChange,
})(Navigation);

export default NavigationContainer;
