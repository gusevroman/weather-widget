import React from 'react';
import { Button } from 'reactstrap';
import { Modal } from 'react-bootstrap';
import { connectModal } from 'redux-modal';
import style from './style.module.css';

const ModalStatus = (props) => {
  const { show, handleHide } = props;

  const updateStatusRecord = (event) => {
    const { status } = event.target.dataset;
    const { activeRecordId:activeID } = props.records;
    const activeRecordIndex = props.records.records.findIndex(obj => (obj.id === +activeID));
    props.updateStatusRecord(status, activeRecordIndex);
    handleHide('modalStatus');
  };

  const activeID          = props.records.activeRecordId;
  const activeRecordIndex = props.records.records.findIndex(obj => (obj.id === +activeID));
  const isActive          = props.records.records[activeRecordIndex].isActive;
  const city              = props.records.records[activeRecordIndex].city;
  let stringFinal;
  let buttonTextFinal;
  let buttonСolor;
  let newRecordStatus;

  if (isActive) {
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
        <p>{stringFinal}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
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
};

export default connectModal({ name: 'modalStatus' })(ModalStatus);
