import React from 'react';

const Table = (props) => {
  // console.log(props);

  const path = window.location.pathname;
  let { records: filtredRecords } = props;
  let buttonName = '';

  if (path === '/all') {
    buttonName = 'Удалить';
  } else if (path === '/active') {
    filtredRecords = props.records.filter(obj => (obj.isActive === true));
    buttonName = 'Удалить';
  } else if (path === '/deleted') {
    filtredRecords = props.records.filter(obj => (obj.isActive !== true));
    buttonName = 'Восстановить';
  }

  const upRowRecord = (event) => {
    const { id } = event.target;
    console.log(id);
    props.upRowRecord(id);
  };
  const downRowRecord = (event) => {
    const { id } = event.target;
    console.log(id);
    props.downRowRecord(1);
  };
  const show = (event) => {
    const { id } = event.target;
    console.log(id);
    props.show('Modal name');
  };

  /* eslint react/jsx-one-expression-per-line: "off" */
  const tableBody = filtredRecords.map(record => (
    <tr key={record.id}>
      <td
        onClick={show}
        key={`city_${record.id}`}
        id={`city_${record.id}`}
      >
        {record.city}
      </td>
      <td
        onClick={show}
        key={`temperature_${record.id}`}
        id={`temperature_${record.id}`}
      >
        {record.temperature}
      </td>
      <td>
        <button
          type="button"
          id={`btn-up_${record.id}`}
          key={`btn-up_${record.id}`}
          onClick={upRowRecord}
          className="btn btn-outline-secondary btn-sm"
        >
          Вверх
        </button>
        <button
          type="button"
          id={`btn-down_${record.id}`}
          key={`btn-down_${record.id}`}
          onClick={downRowRecord}
          className="btn btn-outline-secondary btn-sm"
        >
          Вниз
        </button>
        <button
          type="button"
          id={`btn-change_${record.id}`}
          key={`btn-change_${record.id}`}
          onClick={show}
          className="btn btn-outline-secondary btn-sm"
        >
          {buttonName}
        </button>
      </td>
    </tr>
  ));

  return (
    <>
      <table id="table" className="mt-5 col-12">
        <thead className="thead-light">
          <tr>
            <th><span>Город</span></th>
            <th>Температура</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {tableBody.map(td => td)}
        </tbody>
      </table>
    </>
  );
};

export default Table;
