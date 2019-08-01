import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import FormTop from '../Form/Form';
import Navigation from '../Navigation';
import TableContainer from '../Table/Container';
import style from './style.module.css';


const App = () => {
  if (window.location.pathname === '/') {
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
                  <Route path="/active" exact render={() => <TableContainer />} />
                  <Route path="/deleted" exact render={() => <TableContainer />} />
                  <Route path="/" exact render={() => <TableContainer />} />
                  <Route path="/all" exact render={() => <TableContainer />} />
                  <Redirect from="/" to="/all" />
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
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
                <Route path="/all" exact render={() => <TableContainer />} />
                <Route path="/active" exact render={() => <TableContainer />} />
                <Route path="/deleted" exact render={() => <TableContainer />} />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
