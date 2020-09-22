import React from 'react';
import StudentCard from './StudentCard';
import InputContextProvider from '../contexts/InputContext';

function StudentCardDone() {
    return (
        <InputContextProvider>
            <h1>Your Student Card is done</h1>
            <div>
                <StudentCard />
            </div>
        </InputContextProvider>
    );
}

export default StudentCardDone;
