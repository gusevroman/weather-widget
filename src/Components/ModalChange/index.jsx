import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  FormText,
} from 'reactstrap';

const ModalChange = (props) => {
  const city = 'Тестовый город';
  const temperatureInputModal = 'Тестовая температура';

  return (
    <>
      <br />
      <br />
      <h4>Модальное окно 2</h4>
      <Form id="formChange" inline className="border border-primary rounded py-4 px-2">
        <FormGroup className="col-12 col-md-6 mb-2 mb-md-0">
          <Label for="cityInputModal" hidden>Город</Label>
          <Input className="col-12" id="cityInputModal" type="text" placeholder={city} />
        </FormGroup>
        <FormGroup className="col-12 col-md-6">
          <Label for="temperatureInputModal" hidden>Температура</Label>
          <Input className="col-12" type="number" placeholder={temperatureInputModal} />
          {/*<FormText>&#8451;</FormText>*/}
        </FormGroup>
        <div className="row justify-content-center mt-0 mt-md-2 col-12 col-sm-6 mx-auto mt-2 mt-md-4">
          <div className="col-12 text-center">
            <Button outline color="danger" className="col-12 col-md-5 mb-2 mb-md-0 mr-0 mr-md-2">Отменить</Button>
            <Button outline color="success" className="col-12 col-md-5">Сохранить</Button>
          </div>
        </div>
      </Form>
      <br />
      <br />
    </>
  );
};

export default ModalChange;
