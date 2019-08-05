import React from 'react';
import { Button } from 'reactstrap';
import style from './style.module.css';

const Table = (props) => {
  const path = window.location.pathname;
  let { records: filtredRecords } = props;
  let buttonName = '';
  let buttonColor = '';

  if (path === '/active') {
    filtredRecords = props.records.filter(obj => (obj.isActive === true));
  } else if (path === '/deleted') {
    filtredRecords = props.records.filter(obj => (obj.isActive !== true));
  }

  const getIndex = id => props.records.findIndex(obj => (obj.id === +id));
  const upRowRecord = (event) => {
    const { id } = event.target.dataset;
    const index = getIndex(id);
    console.log(`ID: ${id}`);
    console.log(`Index: ${index}`);
    props.upRowRecord(index);
  };
  const downRowRecord = (event) => {
    const { id } = event.target.dataset;
    const index = getIndex(id);
    console.log(`ID: ${id}`);
    console.log(`Index: ${index}`);
    props.downRowRecord(index);
  };
  const showModalStatus = (event) => {
    const { id } = event.target.dataset;
    console.log(`Status. ID = ${id}`);
    props.showModal('Status', id);
    props.show('modalStatus', {
      // message: `test`,
      // ttt: 'Да!',
    });
  };
  const showModalChange = (event) => {
    const { id } = event.target.dataset;
    const index = getIndex(id);
    console.log(`Change. ID = ${id}`);
    props.showModal('Change', id);
    props.show('modalChange');
    props.modalChangesPrepare(index);
  };

  /* eslint react/jsx-one-expression-per-line: "off" */
  const tableBody = filtredRecords.map(record => {
    if (record.isActive) {
      buttonName = 'Удалить';
      buttonColor = 'danger';
    } else {
      buttonName = 'Восстановить';
      buttonColor = 'success';
    }

    return (
      <tr key={record.id} className={`${style.tr}`}>
        <td
          onClick={showModalChange}
          key={`city_${record.id}`}
          data-id={record.id}
        >
          <span data-id={record.id}>{record.city}</span>
        </td>
        <td
          onClick={showModalChange}
          key={`temperature_${record.id}`}
          data-id={record.id}
        >
          <span data-id={record.id}>{record.temperature}</span>
        </td>
        <td className={style.tdButtons}>
          <button
            type="button"
            data-id={record.id}
            key={`btn-up_${record.id}`}
            onClick={upRowRecord}
            className="btn btn-sm btn-outline-secondary"
          >
            &uarr;
          </button>
          <button
            type="button"
            data-id={record.id}
            key={`btn-down_${record.id}`}
            onClick={downRowRecord}
            className="btn btn-sm btn-outline-secondary"
          >
            &darr;
          </button>
          <button
            type="button"
            data-id={record.id}
            key={`btn-change_${record.id}`}
            onClick={showModalStatus}
            className={`btn btn-sm btn-outline btn-outline-${buttonColor}`}
          >
            {buttonName}
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <table id="table" className="mt-5 col-12">
        <thead className={`${style.thead} thead-light`}>
          <tr>
            <th>Город</th>
            <th>Температура&nbsp;&#8451;</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {tableBody.map(td => td)}
        </tbody>
      </table>
    </>
  );
};

export default Table;
