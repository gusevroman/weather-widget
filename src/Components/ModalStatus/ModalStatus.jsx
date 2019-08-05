import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { connectModal } from 'redux-modal';
import style from './style.module.css';

const ModalStatus = (props) => {
  const { show, handleHide } = props;

  const updateStatusRecord = (event) => {
    const { status } = event.target.dataset;
    const { activeRecordId:activeID } = props.other;
    let activeRecordIndex = props.records.records.findIndex(obj => (obj.id === +activeID));
    props.updateStatusRecord(status, activeRecordIndex);
    handleHide('modalStatus');
  };

  let activeID          = props.other.activeRecordId;
  let activeRecordIndex = props.records.records.findIndex(obj => (obj.id === +activeID));
  let isActive          = props.records.records[activeRecordIndex].isActive;
  let city              = props.records.records[activeRecordIndex].city;
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

  /* eslint react/jsx-one-expression-per-line: "off" */
  return (
    <Modal show={show}>
      <Modal.Body className={`${style.modalBody}`}>
        {/* <p>{ message }</p> */}
        {/* <p>{ttt}</p> */}
        <p>{stringFinal}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button
          outline={true}
          data-status={newRecordStatus}
          onClick={updateStatusRecord}
          color={buttonСolor}
          variant={buttonСolor}
        >
          {buttonTextFinal}
        </Button>
        <Button
          onClick={handleHide}
          className={`${style.close}`}
        >
          ×
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default connectModal({ name: 'modalStatus' })(ModalStatus);
