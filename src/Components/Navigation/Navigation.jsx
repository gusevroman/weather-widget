import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './style.module.css';

const Navigation = (props) => {
  return (
    <div className={`${style.nav_parent} mt-3`}>
      <NavLink
        to="/all"
        activeClassName={style.active}
        className="font-weight-light mx-auto pr-3"
      >
        Все
      </NavLink>
      <NavLink
        to="/active"
        activeClassName={style.active}
        className="font-weight-light mx-auto pr-3"
      >
        Активные
      </NavLink>
      <NavLink
        to="/deleted"
        activeClassName={style.active}
        className="font-weight-light mx-auto"
      >
        Удаленные
      </NavLink>
    </div>
  );
};

export default Navigation;
