import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import FormTop from '../Form/Form';
import Navigation from '../Navigation/Navigation';
import Table from '../Table/Form';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

import style from './style.module.css';
import Provider from "react-redux/es/components/Provider";

function App() {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 mt-5 mx-auto">
              <header>
                <h1 className="mb-5 mx-auto text-center">Температура в городах мира</h1>
                <FormTop />
                <Navigation />
              </header>
              <section>
                <Redirect from="/" to="/all" />
                <Table />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
