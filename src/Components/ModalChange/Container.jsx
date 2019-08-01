import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import ModalChange from './index';

const mapStateToProps = state => ({
  other: state.other,
});
const ModalChangeContainer = connect(mapStateToProps, {})(ModalChange);

export default ModalChangeContainer;
