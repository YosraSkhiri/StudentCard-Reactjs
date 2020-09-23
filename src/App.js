import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/global.module.css';
import Nav from './components/Nav';
import DarkModeProvider from './contexts/DarkModeContext';
import StudentCardForm from './components/StudentCardForm';
import StudentCardDone from './components/StudentCardDone';
import InputContextProvider from './contexts/InputContext';

function App() {
  return (
    <InputContextProvider>
    <DarkModeProvider>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <StudentCardForm />
          </Route>
          <Route exact path='/your-student-card' >
            <StudentCardDone />
          </Route>
        </Switch>
      </div>
    </DarkModeProvider>
    </InputContextProvider>
  );
}

export default App;
