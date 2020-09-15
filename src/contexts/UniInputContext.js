import React, { createContext, useState } from 'react';

export const UniInputContext = createContext();

const UniInputContextProvider = (props) => {

    const [uniName, setUniName] = useState('University Name');
    const [studentFirstName, setStudentFirstName] = useState('John');
    const [studentLastName, setStudentLastName] = useState('Doe');
    const [studentId, setStudentId] = useState('0011223344');

    const addUniName = (uniName) => {
        setUniName(uniName);
    }

    const addStudentFirstName = (firstName) => {
        setStudentFirstName(firstName);
    }

    const addStudentLastName = (lastName) => {
        setStudentLastName(lastName);
    }

    const addStudentId = (id) => {
        setStudentId(id);
    }

    return (
        <UniInputContext.Provider 
            value={
                {
                    uniName, addUniName,
                    studentFirstName, addStudentFirstName,
                    studentLastName, addStudentLastName,
                    studentId, addStudentId
                }
            }
        >
            {props.children}
        </UniInputContext.Provider>
    );
}
 
export default UniInputContextProvider;