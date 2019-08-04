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

const ModalChange = (props) => {
  const { show, handleHide, message, ttt } = props;

  let activeID = props.other.activeRecordId;
  let activeRecordIndex = props.records.records.findIndex(obj => (obj.id === +activeID));
  let city = props.records.cityTemporaryName;
  let temperatureInput = props.records.temperatureTemporaryValue;

  // console.log(`activeRecordIndex: ${activeRecordIndex}`);

  const updateCity = (event) => {
    const city = event.target.value;
    console.log(`Новый город: ${city}`);
    props.updateCity(city, activeRecordIndex);
  };
  const updateTemperature = (event) => {
    const temperature = event.target.value;
    console.log(`Новая температура: ${temperature}`);
    props.updateTemperature(temperature, activeRecordIndex);
  };
  const recordChangesSubmit = (event) => {
    event.preventDefault();
    /*
    const { city }        = this.props.records;
    const { temperature } = this.props.records;
    if (true) {
      updateCity(city);
    }
    if (true) {
      updateTemperature(temperature);
    }
    */
  };
  const modalChangesSave = (event) => {
    event.preventDefault();
    if (true) {
      props.modalChangesSave(activeRecordIndex);
    }
  };
  const modalChangesCancel = () => {
    console.log('CANCEL')
    props.modalChangesCancel();
  };

  return (
    <>
      <br />
      <br />
      <h4>Модальное окно 2</h4>
      <Form
        id="formChange"
        inline
        onSubmit={recordChangesSubmit}
        className="border border-primary rounded py-4 px-2"
      >
        <FormGroup className="col-12 col-md-6 mb-2 mb-md-0">
          <Form.Label hidden>Город</Form.Label>
          <Form.Control
              className="col-12"
              id="cityInputModal"
              type="text"
              onChange={updateCity}
              // placeholder={city}
              value={city}
          />
          {/*<Label for="cityInputModal" hidden>Город</Label>
          <Input
            className="col-12"
            id="cityInputModal"
            type="text"
            onChange={updateCity}
            // placeholder={city}
            value={city}
          />*/}
        </FormGroup>
        <FormGroup className="col-12 col-md-6">
          <Form.Label hidden>Температура</Form.Label>
          <Form.Control
              className="col-12"
              id="temperatureInputModal"
              // type="number"
              type="text"
              onChange={updateTemperature}
              value={temperatureInput}
          />
          {/*<Label for="temperatureInputModal" hidden>Температура</Label>
          <Input
            className="col-12"
            type="number"
            //onChange={onNewTaskTextChange}
            placeholder={temperatureInputModal}
          />*/}
          {/*<FormText>&#8451;</FormText>*/}
        </FormGroup>
        <div className="row justify-content-center mt-0 mt-md-2 col-12 col-sm-6 mx-auto mt-2 mt-md-4">
          <div className="col-12 text-center">
            <Button
              // outline
              type="submit"
              color="success"
              variant="success"
              className="col-12 col-md-5 mb-2 mb-md-0 mr-0 mr-md-2"
              onClick={modalChangesSave}
            >
              Сохранить
            </Button>
            <Button
              // outline
              color="danger"
              variant="danger"
              className="col-12 col-md-5"
              onClick={modalChangesCancel}
            >
              Отменить
            </Button>
          </div>
        </div>
      </Form>
      <br />
      <br />
    </>
  );
};

export default ModalChange;
