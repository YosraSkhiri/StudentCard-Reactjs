import React from 'react';
import FormInfo from './FormInfo';
import StudentCard from './StudentCard';
import InputContextProvider from '../contexts/InputContext';

function StudentCardForm() {
    return (
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
    );
}

export default StudentCardForm;
