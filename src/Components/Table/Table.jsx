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
    props.upRowRecord(index);
  };
  const downRowRecord = (event) => {
    const { id } = event.target.dataset;
    const index = getIndex(id);
    props.downRowRecord(index);
  };
  const showModalStatus = (event) => {
    const { id } = event.target.dataset;
    props.setActiveRecordId(id);
    props.show('modalStatus', {});
  };
  const showModalChange = (event) => {
    const { id } = event.target.dataset;
    const index = getIndex(id);
    props.setActiveRecordId(id);
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

    /* eslint react/jsx-one-expression-per-line: "off" */
    return (
      <tr
        key={record.id}
        className={`${style.tr}`}
      >
        <td
          onClick={showModalChange}
          data-id={record.id}
        >
          <span data-id={record.id}>{record.city}</span>
        </td>
        <td
          onClick={showModalChange}
          data-id={record.id}
        >
          <span data-id={record.id}>{record.temperature}</span>
        </td>
        <td className={style.tdButtons}>
          <Button
            outline
            type="button"
            data-id={record.id}
            onClick={upRowRecord}
            className="btn btn-sm btn-outline-secondary"
          >
            &uarr;
          </Button>
          <Button
            outline
            type="button"
            data-id={record.id}
            onClick={downRowRecord}
            className="btn btn-sm btn-outline-secondary"
          >
            &darr;
          </Button>
          <Button
            outline
            type="button"
            data-id={record.id}
            // key={`btn-change_${record.id}`}
            onClick={showModalStatus}
            className={`btn btn-sm btn-outline btn-outline-${buttonColor}`}
          >
            {buttonName}
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <table
        id="table"
        className="mt-5 col-12"
      >
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
