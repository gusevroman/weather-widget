import React from 'react';
import {
  Button, Form,
} from 'reactstrap';

const ModalStatus = (props) => {
  const updateStatusRecord = (event) => {
    const { status } = event.target.dataset;
    // const { id:recordStatus } = event.target;
    const { activeRecordId:id } = props.modals;
    props.updateStatusRecord(status, id);
  };

  let activeID = props.modals.activeRecordId;
  let activeRecordIndex = props.records.records.findIndex(obj => (obj.id === +activeID));
  let city = '';
  if (activeRecordIndex >= 0) {
    city = props.records.records[activeRecordIndex].city;
  }

  let stringFinal;
  let buttonTextFinal;
  let buttonСolor;
  let newRecordStatus;
  const { actualPath:path } = props.other;

  if (path === 'deleted') {
    stringFinal = `Восстановить ${city} в общем списке?`;
    buttonTextFinal = 'Восстановить';
    buttonСolor = 'success';
    newRecordStatus = 'active';
  } else {
    stringFinal = `Удалить ${city} из списка?`;
    buttonTextFinal = 'Удалить';
    buttonСolor = 'danger';
    newRecordStatus = 'deleted';
  }

  return (
    <>
      <h4>Модальное окно 1</h4>
      <div className="border border-primary rounded py-4 px-4">
        <p>{stringFinal}</p>
        <Button
          outline
          data-status={newRecordStatus}
          onClick={updateStatusRecord}
          color={buttonСolor}
        >
          {buttonTextFinal}
        </Button>
      </div>
    </>
  );
};

export default ModalStatus;
