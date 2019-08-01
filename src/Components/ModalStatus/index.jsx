import React from 'react';
import {
  Button,
} from 'reactstrap';

const ModalStatus = (props) => {
  const city = 'Тестовый город';
  const stringDelete = `Удалить ${city} из списка?`;
  const stringActivate = `Восстановить ${city} в общем списке?`;
  let stringFinal;
  const buttonTextDelete = 'Удалить';
  const buttonTextActivate = 'Восстановить';
  let buttonTextFinal;

  if (true) {
    stringFinal = stringDelete;
    buttonTextFinal = buttonTextDelete;
  } else {
    stringFinal = stringActivate;
    buttonTextFinal = buttonTextActivate;
  }

  return (
    <>
      <h4>Модальное окно 1</h4>
      <p>{stringFinal}</p>
      <Button>{buttonTextFinal}</Button>
    </>
  );
};

export default ModalStatus;
