import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

const FormTop = (props) => {
  const cityInput   = props.records.cityRequestName;
  const errorStatus = props.records.isRequestError;

  const updateCity = (event) => {
    const city = event.target.value;
    props.updateCity(city, -1, 'formRequest');
  };
  const getWeather = () => {
    props.getWeather(cityInput);
  };
  const formSubmit = (event) => {
    event.preventDefault();
    getWeather();
  };
  if (errorStatus) {
    alert('Ошибка.\n\nВозможно вы неверно ввели название города.\nВ случае необходимости - свяжитесь с администратором.');
    props.setErrorStatus(false);
  }

  let isButtonDisabled = true;
  if (cityInput !== '') {
    isButtonDisabled = false;
  }

  /* eslint react/jsx-one-expression-per-line: "off" */
  return (
    <>
      <Form
        inline
        id="formTop"
        onSubmit={formSubmit}
      >
        <FormGroup className="col-12 col-md-8 col-lg-9 m-0">
          <Label for="cityInputTop" hidden>Город</Label>
          <Input
            id="cityInputTop"
            type="text"
            onChange={updateCity}
            className="col-12"
            value={cityInput}
            placeholder="Ведите название города (по-английски)"
          />
        </FormGroup>
        <div className="col-12 col-md-4 col-lg-3 mt-2 mt-md-0">
          <Button
            outline
            color="primary"
            disabled={isButtonDisabled}
            className="col-12"
            onClick={getWeather}
          >
            Запросить погоду
          </Button>
        </div>
      </Form>
    </>
  );
};

export default FormTop;
