import React from 'react';
import './styles/global.css';
import Nav from './components/Nav';
import FormInfo from './components/FormInfo';
import StudentCard from './components/StudentCard';
import UniInputContextProvider from './contexts/UniInputContext';

function App() {
  return (
    <div>
      <Nav />
      <main>
        <UniInputContextProvider>
          <div>
            <StudentCard />
          </div>

          <div>
            <FormInfo />
          </div>
        </UniInputContextProvider>
      </main>
    </div>
  );
}

export default App;
