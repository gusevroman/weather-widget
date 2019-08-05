import React from 'react';
import {
  Button,
  Form,
  Input,
  Label,
  FormGroup,
} from 'reactstrap';
import { Modal } from 'react-bootstrap';
import { connectModal } from 'redux-modal';
import style from '../ModalStatus/style.module.css';

const ModalChange = (props) => {
  const { show, handleHide } = props;

  const activeID          = props.other.activeRecordId;
  const activeRecordIndex = props.records.records.findIndex(obj => (obj.id === +activeID));
  const cityInput         = props.records.cityTemporaryName;
  const temperatureInput  = props.records.temperatureTemporaryValue;

  let isButtonDisabled = true;
  if (activeRecordIndex >= 0) {
    const isContentChanged = (keyNameTemporary, keyName) => {
      if ((props.records[keyNameTemporary] == props.records.records[activeRecordIndex][keyName])) {
        return false;
      }
      return true;
    };
    const isEmpty = (keyNameTemporary) => {
      if (props.records[keyNameTemporary] === '') {
        return false;
      }
      return true;
    };

    if (isContentChanged('cityTemporaryName', 'city') || isContentChanged('temperatureTemporaryValue', 'temperature')
    ) {
      isButtonDisabled = false;
    }
    if (!isEmpty('cityTemporaryName') || !isEmpty('temperatureTemporaryValue')) {
      isButtonDisabled = true;
    }
  }

  const updateCity = (event) => {
    const city = event.target.value;
    props.updateCity(city, activeRecordIndex, 'modalChange');
  };
  const updateTemperature = (event) => {
    const temperature = event.target.value;
    // console.log(`Новая температура: ${temperature}`);
    props.updateTemperature(temperature, activeRecordIndex);
  };
  const modalChangesSave = (event) => {
    event.preventDefault();
    props.modalChangesSave(activeRecordIndex);
    handleHide('modalChange');
  };
  const modalChangesCancel = () => {
    console.log('CANCEL');
    props.modalChangesCancel();
    handleHide('modalChange');
  };
  const recordChangesSubmit = (event) => {
    event.preventDefault();
    modalChangesSave(event);
  };

  /* eslint react/jsx-one-expression-per-line: "off" */
  return (
    <Modal show={show}>
      <Form
        id="formChange"
        inline
        onSubmit={recordChangesSubmit}
      >
        <Modal.Header className="col-12">
          <Modal.Title>Редактирование записи</Modal.Title>
        </Modal.Header>
        <Modal.Body className={`${style.modalBody}`}>
          <FormGroup className="mb-2">
            <Label for="cityInputModal" hidden>Город</Label>
            <Input
              className="col-12"
              id="cityInputModal"
              type="text"
              onChange={updateCity}
              value={cityInput}
            />
          </FormGroup>
          <FormGroup className="mb-2">
            <Label for="temperatureInputModal" hidden>Температура</Label>
            <Input
              className="col-12"
              type="text"
              onChange={updateTemperature}
              value={temperatureInput}
            />
          </FormGroup>
        </Modal.Body>

        <Modal.Footer className="col-12 d-flex flex-column flex-sm-row">
          <Button
            disabled={isButtonDisabled}
            type="submit"
            color="success"
            variant="success"
            className="col-12 col-sm-4 mb-2 mb-sm-0 mr-0 mr-sm-2"
            onClick={modalChangesSave}
          >
            Сохранить
          </Button>
          <Button
            color="danger"
            variant="danger"
            className="col-12 col-sm-4 ml-0"
            onClick={modalChangesCancel}
          >
            Отменить
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default connectModal({ name: 'modalChange' })(ModalChange);
