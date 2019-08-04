import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { connectModal } from 'redux-modal';

const ModalStatus = (props) => {
  const updateStatusRecord = (event) => {
    const { status } = event.target.dataset;
    // const { id:recordStatus } = event.target;
    const { activeRecordId:activeID } = props.other;
    let activeRecordIndex = props.records.records.findIndex(obj => (obj.id === +activeID));
    props.updateStatusRecord(status, activeRecordIndex);
  };

  let activeID = props.other.activeRecordId;
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

  const { show, handleHide, message } = props;

  return (
    <Modal show={show} >
      <Modal.Body>
        <p>{ message }</p>
        <p>{stringFinal}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button
            outline
            data-status={newRecordStatus}
            onClick={updateStatusRecord}
            color={buttonСolor}
        >
          {buttonTextFinal}
        </Button>
        <Button onClick={handleHide}>Отмена</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default connectModal({ name: 'modalStatus' })(ModalStatus);
