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
      <p>Здесь должно быть второе модальное окно</p>
      <Form id="formChange">
        <FormGroup>
          <Label for="cityInputModal" hidden>Город</Label>
          <Input id="cityInputModal" type="text" placeholder={city} />
        </FormGroup>
        <FormGroup>
          <Label for="temperatureInputModal" hidden>Температура</Label>
          <Input type="number" placeholder={temperatureInputModal} />
          <FormText>&#8451;</FormText>
        </FormGroup>
        <div className="col-12 col-md-4 col-lg-3 mt-2 mt-md-0">
          <Button outline color="primary" className="col-12">Сохранить</Button>
          <Button outline color="primary" className="col-12">Отменить</Button>
        </div>
      </Form>
      <br />
      <br />
    </>
  );
};

export default ModalChange;
