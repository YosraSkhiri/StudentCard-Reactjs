import React from 'react';
import FormInfo from './FormInfo';
import StudentCard from './StudentCard';

function StudentCardForm() {
    return (
        <main>
            <div>
                <StudentCard showColorOption='true'/>
            </div>

            <div>
                <FormInfo />
            </div>  
        </main>
    );
}

export default StudentCardForm;
