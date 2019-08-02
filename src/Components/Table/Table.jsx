import React from 'react';
import style from './style.module.css';

const Table = (props) => {
  // console.log(props);

  const path = window.location.pathname;
  let { records: filtredRecords } = props;
  let buttonName = '';
  let buttonColor = '';

  if (path === '/active') {
    filtredRecords = props.records.filter(obj => (obj.isActive === true));
  } else if (path === '/deleted') {
    filtredRecords = props.records.filter(obj => (obj.isActive !== true));
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
  const showModalStatus = (event) => {
    const { id } = event.target.dataset;
    console.log(`Status. ID = ${id}`);
    props.show('Status', id);
  };
  const showModalChange = (event) => {
    const { id } = event.target.dataset;
    console.log(`Message. ID = ${id}`);
    props.show('Change', id);
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
          onClick={showModalStatus}
          key={`city_${record.id}`}
          data-id={record.id}
        >
          <span data-id={record.id}>{record.city}</span>
        </td>
        <td
          onClick={showModalStatus}
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
            onClick={showModalChange}
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
