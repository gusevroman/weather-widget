import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input, Label,
} from 'reactstrap';

const ModalChange = (props) => {
  const city = 'Тестовый город';

  return (
    <>
      <br />
      <br />
      <p>Здесь должно быть второе модальное окно</p>
      <Form>
        <FormGroup>
          <Label for="cityInputModal" hidden>Город</Label>
          <Input id="cityInputModal" type="text" placeholder={city} />
        </FormGroup>
        <FormGroup>
          <Label for="temperatureInputModal" hidden>Температура</Label>
          <Input type="number" placeholder="temperatureInputModal" />
        </FormGroup>
        <div className="col-12 col-md-4 col-lg-3 mt-2 mt-md-0">
          <Button outline color="primary" className="col-12">Сохранить</Button>
          <Button outline color="primary" className="col-12">Отменить</Button>
        </div>
      </Form>
    </>
  );
};

export default ModalChange;
