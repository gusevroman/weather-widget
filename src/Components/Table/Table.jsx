import React from 'react';
import style from './style.module.css';

const Table = (props) => {
  // console.log(props);

  const path = window.location.pathname;
  let { records: filtredRecords } = props;
  let buttonName = '';
  let buttonColor = '';

  if (path === '/all') {
    buttonName = 'Удалить';
    buttonColor = 'danger';
  } else if (path === '/active') {
    filtredRecords = props.records.filter(obj => (obj.isActive === true));
    buttonName = 'Удалить';
    buttonColor = 'danger';
  } else if (path === '/deleted') {
    filtredRecords = props.records.filter(obj => (obj.isActive !== true));
    buttonName = 'Восстановить';
    buttonColor = 'success';
  }

  const upRowRecord = (event) => {
    const { data:id } = event.target;
    console.log(id);
    props.upRowRecord(id);
  };
  const downRowRecord = (event) => {
    const { data:id } = event.target;
    console.log(id);
    props.downRowRecord(1);
  };
  const showStatus = (event) => {
    const { id } = event.target.dataset;
    console.log(`Status. ID = ${id}`);
    props.show('Status', id);
  };

  const showChange = (event) => {
    const { id } = event.target.dataset;
    console.log(`Message. ID = ${id}`);
    props.show('Change', id);
  };

  /* eslint react/jsx-one-expression-per-line: "off" */
  const tableBody = filtredRecords.map(record => (
    <tr key={record.id} className={`${style.tr}`}>
      <td
        onClick={showStatus}
        key={`city_${record.id}`}
        data-id={record.id}
      >
        <span data-id={record.id}>{record.city}</span>
      </td>
      <td
        onClick={showStatus}
        key={`temperature_${record.id}`}
        data-id={record.id}
      >
        <span data-id={record.id}>{record.temperature}</span>
      </td>
      <td>
        <button
          type="button"
          data-id={record.id}
          key={`btn-up_${record.id}`}
          onClick={upRowRecord}
          className="btn btn-sm btn-outline-secondary"
        >
          Вверх
        </button>
        <button
          type="button"
          data-id={record.id}
          key={`btn-down_${record.id}`}
          onClick={downRowRecord}
          className="btn btn-sm btn-outline-secondary"
        >
          Вниз
        </button>
        <button
          type="button"
          data-id={record.id}
          key={`btn-change_${record.id}`}
          onClick={showChange}
          className={`btn btn-sm btn-outline btn-outline-${buttonColor}`}
        >
          {buttonName}
        </button>
      </td>
    </tr>
  ));

  return (
    <>
      <table id="table" className="mt-5 col-12">
        <thead className={`${style.thead} thead-light`}>
          <tr>
            <th>Город</th>
            <th>Температура</th>
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
