import React from 'react';
import ModalStatus from '../ModalStatus';
import ModalChange from '../ModalChange';
import {
  Button,
  Form,
  FormGroup,
  Input,
} from 'reactstrap';

const Table = (props) => {
  console.log(props);
  // const { upRowRecord }   = props;
  // const { downRowRecord } = props;


  const path = window.location.pathname;
  let filtredRecords = props.records;
  let buttonName = '';
  let recordStatusUpdated = '';

  if (path === '/all') {
    buttonName = 'Удалить';
    recordStatusUpdated = 'deleted';
  } else if (path === '/active') {
    filtredRecords = props.records.filter(obj => (obj.isActive === true));
    buttonName = 'Удалить';
    recordStatusUpdated = 'deleted';
  } else if (path === '/deleted') {
    filtredRecords = props.records.filter(obj => (obj.isActive !== true));
    buttonName = 'Восстановить';
    recordStatusUpdated = 'active';
  }

  const upRowRecord = (event) => {
    props.upRowRecord(1);
  };
  const downRowRecord = (event) => {
    props.downRowRecord(1);
  };
  const show = (event) => {
    props.show('Modal name');
  };

  const tableBody = filtredRecords.map((record) => {
    return (
      <tr key={record.position}>
        <td onClick={show}>{record.city}</td>
        <td onClick={show}>{record.temperature}</td>
        <td>
          <button
            type="button"
            // key={`btn_${task.id}`}
            onClick={upRowRecord}
            className="btn btn-outline-secondary btn-sm"
          >
            Вверх
          </button>
          <button
            type="button"
            // key={`btn_${task.id}`}
            onClick={downRowRecord}
            className="btn btn-outline-secondary btn-sm"
          >
            Вниз
          </button>
          <button
            type="button"
            // key={`btn_${task.id}`}
            onClick={show}
            className="btn btn-outline-secondary btn-sm"
          >
            {buttonName}
          </button>
        </td>
      </tr>
    );
  });




  return (
    <table id="table" className="mt-5 col-12">
      <thead className="thead-light">
        <tr>
          <th><span>Город</span></th>
          <th>Температура</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {tableBody.map(td => td)}
        <br />
        <br />
        <Form>
          <FormGroup>
            <div>
              <Button>Сохранить</Button>
            </div>
          </FormGroup>
        </Form>
        <ModalStatus />
        <ModalChange />
      </tbody>
    </table>
  );
};

export default Table;
