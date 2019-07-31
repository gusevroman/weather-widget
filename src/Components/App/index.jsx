import React from 'react';
import { Route } from 'react-router-dom';
import FormTop from '../Form/Form';
import Navigation from '../Navigation/Navigation';
import Table from '../Table/Form';
import style from './style.module.css';

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
