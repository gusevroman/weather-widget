import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import {
  toggleIsFetching,
  changePositionRecord,
  updateStatusRecord,
  updateTemperature,
  updateCity,
} from '../../Redux/Actions';
import Table from './Table';

const mapStateToProps = () => ({
  records: [
    {
      city:     'Test A',
      weather:  'Weather test A',
      position: 1,
    },
    {
      city:     'Test B',
      weather:  'Weather test B',
      position: 2,
    },
    {
      city:     'Test C',
      weather:  'Weather test C',
      position: 3,
    },
  ],
}
);
const TableContainer = connect(mapStateToProps, {
  toggleIsFetching,
  changePositionRecord,
  updateStatusRecord,
  updateTemperature,
  updateCity,
})(Table);

export default TableContainer;
