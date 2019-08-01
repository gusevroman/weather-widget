import React from 'react';
import {
  Button, Form,
} from 'reactstrap';

const ModalStatus = (props) => {
  const updateStatusRecord = (event) => {
    const { id:recordStatus } = event.target;
    console.log(recordStatus);
    props.updateStatusRecord(recordStatus);
  };

  const city = 'Тестовый город';
  let stringFinal;
  let buttonTextFinal;
  let buttonСolor;
  let buttonId;
  const { actualPath:path } = props.other;

  if (path === 'deleted') {
    stringFinal = `Восстановить ${city} в общем списке?`;
    buttonTextFinal = 'Восстановить';
    buttonСolor = 'success';
    buttonId = 'active';
  } else {
    stringFinal = `Удалить ${city} из списка?`;
    buttonTextFinal = 'Удалить';
    buttonСolor = 'danger';
    buttonId = 'deleted';
  }

  return (
    <>
      <h4>Модальное окно 1</h4>
      <div className="border border-primary rounded py-4 px-4">
        <p>{stringFinal}</p>
        <Button
          outline
          id={buttonId}
          onClick={updateStatusRecord}
          color={buttonСolor}
        >
          {buttonTextFinal}
        </Button>
      </div>
    </>
  );
};

export default ModalStatus;
