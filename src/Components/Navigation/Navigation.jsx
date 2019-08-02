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
    <div className={`${style.nav_parent} mt-4`}>
      <NavLink
        to="/all"
        id="all"
        onClick={pathChange}
        activeClassName={style.active}
        className="font-weight-light mx-auto pr-3"
      >
        Все
      </NavLink>
      <NavLink
        to="/active"
        id="active"
        onClick={pathChange}
        activeClassName={style.active}
        className="font-weight-light mx-auto pr-3"
      >
        Активные
      </NavLink>
      <NavLink
        to="/deleted"
        id="deleted"
        onClick={pathChange}
        activeClassName={style.active}
        className="font-weight-light mx-auto"
      >
        Удаленные
      </NavLink>
    </div>
  );
};

export default Navigation;
