import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './style.module.css';

const Navigation = (props) => {
  const pathChange = (event) => {
    const { id:path } = event.target;
    props.pathChange(path);
  };

  /* eslint react/jsx-one-expression-per-line: "off" */
  return (
    <div className={`${style.nav_parent} col-12 mt-4`}>
      <NavLink
        to="/all"
        id="all"
        onClick={pathChange}
        activeClassName={style.active}
        className="font-weight-light mr-3 d-inline-block"
      >
        Все
      </NavLink>
      <NavLink
        to="/active"
        id="active"
        onClick={pathChange}
        activeClassName={style.active}
        className="font-weight-light mr-3 d-inline-block"
      >
        Активные
      </NavLink>
      <NavLink
        to="/deleted"
        id="deleted"
        onClick={pathChange}
        activeClassName={style.active}
        className="font-weight-light mr-3 d-inline-block"
      >
        Удаленные
      </NavLink>
    </div>
  );
};

export default Navigation;
