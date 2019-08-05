import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  // Input,
  // Label,
  Modal,
  // FormText,
// } from 'reactstrap';
} from 'react-bootstrap';
import { connectModal } from 'redux-modal';
import style from "../ModalStatus/style.module.css";

const ModalChange = (props) => {
  const { show, handleHide } = props;

  const activeID = props.other.activeRecordId;
  const activeRecordIndex = props.records.records.findIndex(obj => (obj.id === +activeID));
  const cityInput = props.records.cityTemporaryName;
  const temperatureInput = props.records.temperatureTemporaryValue;

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
        // className="col-12"
      >
        <Modal.Header className="col-12">
          <Modal.Title>Редактирование записи</Modal.Title>
        </Modal.Header>
        <Modal.Body className={`${style.modalBody}`}>
          <FormGroup className="mb-2">
            <Form.Label hidden>Город</Form.Label>
            <Form.Control
              className="col-12"
              type="text"
              onChange={updateCity}
              // placeholder={city}
              value={cityInput}
            />
            {/*
            <Label for="cityInputModal" hidden>Город</Label>
            <Input
              className="col-12"
              id="cityInputModal"
              type="text"
              onChange={updateCity}
              // placeholder={city}
              value={city}
            />
            */}
          </FormGroup>
          <FormGroup className="mb-2">
            <Form.Label hidden>Температура</Form.Label>
            <Form.Control
              className="col-12"
              // type="number"
              type="text"
              onChange={updateTemperature}
              value={temperatureInput}
            />
            {/*
            <Label for="temperatureInputModal" hidden>Температура</Label>
            <Input
              className="col-12"
              type="number"
              //onChange={onNewTaskTextChange}
              placeholder={temperatureInputModal}
            />
            */}
          </FormGroup>
        </Modal.Body>

        <Modal.Footer className="col-12 d-flex flex-column flex-sm-row">
          {/*<div className="row justify-content-center mt-0 mt-md-2 col-12 col-sm-6 mx-auto mt-2 mt-md-4">*/}
          {/*<div className="row col-12 ">*/}
            {/*<div className="col-12 text-center">*/}
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
            {/*</div>*/}
          {/*</div>*/}
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default connectModal({ name: 'modalChange' })(ModalChange);
