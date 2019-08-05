// import React  from 'react'; //
import React  from 'react'; //
// import { bindActionCreators } from 'redux'; //
// import { connect } from 'react-redux'; //
// import { show } from 'redux-modal'; //
// import { Button } from 'react-bootstrap'; //
import { Route } from 'react-router-dom';
import FormContainer from '../Form/Container';
import NavigationContainer from '../Navigation/Container';
import TableContainer from '../Table/Container';
import ModalStatusContainer from '../ModalStatus/Container';
import ModalChangeContainer from '../ModalChange/Container';
import style from './style.module.css';

const App = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 mt-5 mx-auto">
              <header>
                <h1 className="mb-5 mx-auto text-center">Температура в городах мира</h1>
                <FormContainer />
                <NavigationContainer />
              </header>
              <section>
                <Route
                  path="/all"
                  exact
                  render={() => <TableContainer />}
                />
                <Route
                  path="/active"
                  exact
                  render={() => <TableContainer />}
                />
                <Route
                  path="/deleted"
                  exact
                  render={() => <TableContainer />}
                />
                {/*
                <Button onClick={this.handleOpen('bootstrap')}>Redux-modal</Button>
                <br />
                <br />
                */}
                <ModalStatusContainer />
                <ModalChangeContainer />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
