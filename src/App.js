import React from 'react';

import Nav from './components/Nav';
import FormInfo from './components/FormInfo';
import StudentCard from './components/StudentCard';

function App() {
  return (
    <div>
      <Nav />
      <main>
        <StudentCard />
        <FormInfo />
      </main>
      
    </div>
  );
}

export default App;
