import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './styles/global.module.css';
import Nav from './components/Nav';
import DarkModeProvider from './contexts/DarkModeContext';
import StudentCardForm from './components/StudentCardForm';
import StudentCardDone from './components/StudentCardDone';
import InputContextProvider from './contexts/InputContext';

function App() {
  return (
    <InputContextProvider>
    <DarkModeProvider>
    { (window.innerWidth >= 1057) ?
      <div>
        <Nav />
        <Switch>
          <Route path='/'>
            <StudentCardForm />
          </Route>
          <Route exact path='/your-student-card' >
            <StudentCardDone />
          </Route>
        </Switch>
      </div> :
      <p className={styles.alert}>For a better experience, please use your laptop</p>
      }
    </DarkModeProvider>
    </InputContextProvider> 
     
  );
}

export default App;
