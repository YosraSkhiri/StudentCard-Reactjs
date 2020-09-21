import React from 'react';
import './styles/global.module.css';
import Nav from './components/Nav';
import FormInfo from './components/FormInfo';
import StudentCard from './components/StudentCard';
import InputContextProvider from './contexts/InputContext';

function App() {
  return (
    <div>
      <Nav />
      <main>
        <InputContextProvider>
          <div>
            <StudentCard />
          </div>

          <div>
            <FormInfo />
          </div>
        </InputContextProvider>
      </main>
    </div>
  );
}

export default App;
