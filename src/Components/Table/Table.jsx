import React from 'react';

const Table = (props) => {
  console.log(props);

  // const { records } = props;
  /*
  const tableBody = props.records.map((task) => {
    return (
      <tr key={records.position}>
        <th scope="row">{records.position}</th>
        <td>{task.username}</td>
        <td>{task.email}</td>
        <td>
          <button
              type="button"
              // key={`btn_${task.id}`}
              // onClick={taskTextSend}
              className="btn btn-outline-primary btn-sm"
          >
            Вверх
          </button>
          <button
              type="button"
              // key={`btn_${task.id}`}
              // onClick={taskTextSend}
              className="btn btn-outline-primary btn-sm"
          >
            Вниз
          </button>
          <button
              type="button"
              // key={`btn_${task.id}`}
              // onClick={taskTextSend}
              className="btn btn-outline-primary btn-sm"
          >
            Удалить/Восстановить
          </button>
        </td>
      </tr>
    );
  });
*/
  return (
    <table id="table" className="mt-5 col-12">
      <thead className="thead-light">
        <tr>
          <th>Город</th>
          <th>Температура</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {/*{tableBody.map(td => td)}*/}
        1
      </tbody>
    </table>
  );
};

export default Table;
