import React from 'react';
import {
  Button, Form,
} from 'reactstrap';

const ModalStatus = (props) => {
  const updateStatusRecord = (event) => {
    const { status } = event.target.dataset;
    // const { id:recordStatus } = event.target;
    const { activeRecordId:activeID } = props.modals;
    let activeRecordIndex = props.records.records.findIndex(obj => (obj.id === +activeID));
    props.updateStatusRecord(status, activeRecordIndex);
  };

  let activeID = props.modals.activeRecordId;
  let activeRecordIndex = props.records.records.findIndex(obj => (obj.id === +activeID));
  let isActive;
  let city;
  if (activeRecordIndex >= 0) {
    city = props.records.records[activeRecordIndex].city;
    isActive = props.records.records[activeRecordIndex].isActive;
  }

  let stringFinal;
  let buttonTextFinal;
  let buttonСolor;
  let newRecordStatus;
  const { actualPath:path } = props.other;

  if ((activeRecordIndex >= 0) && isActive) {
    stringFinal = `Удалить ${city} из списка?`;
    buttonTextFinal = 'Удалить';
    buttonСolor = 'danger';
    newRecordStatus = 'deleted';
  } else {
    stringFinal = `Восстановить ${city} в общем списке?`;
    buttonTextFinal = 'Восстановить';
    buttonСolor = 'success';
    newRecordStatus = 'active';
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
